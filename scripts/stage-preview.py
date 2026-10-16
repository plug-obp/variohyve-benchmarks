#!/usr/bin/env python3
"""Preserve preview releases and promote an already validated, main-branch release."""
import argparse
import html
import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RELEASE_FILES = ('index.html', 'manifest.json', 'preview.css', 'learn')
OPTIONAL_RELEASE_FILES = ('reference', 'SHA256SUMS.txt')
COPY_FILES = RELEASE_FILES + OPTIONAL_RELEASE_FILES
VERSION = re.compile(r'^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$')
BAR = re.compile(r'\n?<!-- version navigation -->.*?<!-- /version navigation -->\n?', re.S)
HEAD = re.compile(r'\s*<link data-version-navigation[^>]*>\s*<script data-version-navigation[^>]*></script>\s*')
LINK = re.compile(r'((?:href|src)=")(.*?)(")')


def read_manifest(source):
    manifest = json.loads((source / 'manifest.json').read_text())
    if not VERSION.fullmatch(manifest['version']):
        raise ValueError('Expected a three-part release version')
    if not re.fullmatch(r'[0-9a-f]{40}', manifest['source']['commit']):
        raise ValueError('Manifest must pin the full source commit')
    if manifest['source']['tag'] != 'v' + manifest['version']:
        raise ValueError('Source tag must match the release version')
    for name in RELEASE_FILES:
        if not (source / name).exists():
            raise ValueError(f'Missing release content: {name}')
    return manifest


def relative(target, parent):
    import os
    return Path(os.path.relpath(target.resolve(), parent.resolve())).as_posix()


def copy_release(source, target):
    target.mkdir(parents=True, exist_ok=True)
    for name in COPY_FILES:
        origin, destination = source / name, target / name
        if name in OPTIONAL_RELEASE_FILES and not origin.exists():
            continue
        if origin.is_dir():
            shutil.copytree(origin, destination)
        else:
            shutil.copy2(origin, destination)
    # Links within a release remain relative. Links to the rest of the public
    # site must still reach their original destination after the move.
    for filename in target.rglob('*.html'):
        text = HEAD.sub('', BAR.sub('', filename.read_text()))
        original = source / filename.relative_to(target)
        def relocate(match):
            href = match[2]
            if re.match(r'^(?:[a-z]+:|//|/|#)', href, re.I):
                return match[0]
            parts = re.split(r'([?#])', href, maxsplit=1)
            resolved = (original.parent / parts[0]).resolve()
            if not resolved.is_relative_to(source.resolve()):
                # Source staging directories have the same logical position as
                # preview/. Resolve external site links there, not in /tmp.
                logical = ROOT / 'preview' / original.relative_to(source)
                resolved = (logical.parent / parts[0]).resolve()
                return match[1] + relative(resolved, filename.parent) + ('/' if parts[0].endswith('/') else '') + ''.join(parts[1:]) + match[3]
            return match[0]
        filename.write_text(LINK.sub(relocate, text))


def decorate(release, preview):
    version = read_manifest(release)['version']
    for filename in release.rglob('*.html'):
        # Only the release's own pages; archived releases are decorated separately.
        if release == preview and filename.is_relative_to(preview / 'versions'):
            continue
        if filename == preview / 'versions.html':
            continue
        text = HEAD.sub('', BAR.sub('', filename.read_text()))
        base = relative(preview, filename.parent)
        page = filename.relative_to(release).as_posix()
        head = f'\n<link data-version-navigation rel="stylesheet" href="{base}/versions.css">\n<script data-version-navigation src="{base}/versions.js" defer></script>\n'
        text = text.replace('</head>', head + '</head>', 1)
        bar = f'\n<!-- version navigation --><div class="version-navigation wrap" data-version="{version}" data-page="{html.escape(page, quote=True)}"><span>Preview v{version}</span> · <a href="{base}/versions.html">All tutorial versions</a></div><!-- /version navigation -->\n'
        if '</header>' not in text:
            raise ValueError(f'Page has no navigation header: {filename}')
        filename.write_text(text.replace('</header>', '</header>' + bar, 1))


def refresh(preview):
    releases = []
    for directory in (preview / 'versions').iterdir():
        if not directory.is_dir():
            continue
        manifest = read_manifest(directory)
        if directory.name != manifest['version']:
            raise ValueError('Release directory and manifest version disagree')
        releases.append({'version': directory.name, 'date': manifest['date'],
                         'path': f'versions/{directory.name}/',
                         'source_commit': manifest['source']['commit'],
                         'pages': sorted(str(p.relative_to(directory)) for p in directory.rglob('*.html'))})
    releases.sort(key=lambda entry: tuple(map(int, entry['version'].split('.'))), reverse=True)
    latest = read_manifest(preview)['version']
    if not releases or latest != releases[0]['version']:
        raise ValueError('The default preview must be the newest archived release')
    index = {'schema_version': 1, 'latest': latest, 'versions': releases}
    (preview / 'versions.json').write_text(json.dumps(index, indent=2) + '\n')
    for release in releases:
        decorate(preview / release['path'], preview)
    decorate(preview, preview)
    cards = []
    for entry in releases:
        latest_label = ' <span class="latest">Latest</span>' if entry['version'] == latest else ''
        cards.append(f'<li><h2><a href="{entry["path"]}learn/">Learn VarioHyve v{entry["version"]}</a>{latest_label}</h2><p>Published {entry["date"]} · <a href="{entry["path"]}#downloads">Matching downloads</a> · <a href="{entry["path"]}manifest.json">Build manifest</a></p></li>')
    cards = '\n'.join(cards)
    (preview / 'versions.html').write_text(f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Tutorial versions · VarioHyve</title><link rel="stylesheet" href="preview.css"><link rel="stylesheet" href="versions.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header class="site-header wrap"><a class="wordmark" href="./">VarioHyve<span aria-hidden="true">.</span></a><nav><a href="learn/">Latest tutorial</a></nav></header><main id="main" class="wrap version-list"><p class="eyebrow">LEARN VARIOHYVE</p><h1>Choose your version.</h1><p>The latest release, v{latest}, opens by default. Each tutorial stays paired with its original runtime, extension and examples.</p><ul>{cards}</ul></main><footer class="wrap"><p>Published tutorials remain available at their versioned addresses.</p><a href="./">Back to the preview</a></footer></body></html>
''')


def archive(source, preview):
    manifest = read_manifest(source)
    target = preview / 'versions' / manifest['version']
    if target.exists():
        raise ValueError(f'Release {manifest["version"]} already exists; published content is immutable')
    copy_release(source, target)
    return target


def validate_source(manifest, source_repository):
    commit = manifest['source']['commit']
    subprocess.run(['git', '-C', str(source_repository), 'merge-base', '--is-ancestor', commit, 'main'], check=True)
    properties = subprocess.check_output(['git', '-C', str(source_repository), 'show', f'{commit}:gradle.properties'], text=True)
    match = re.search(r'^version=(.+)$', properties, re.M)
    if not match or match[1].strip() != manifest['version']:
        raise ValueError('Pinned source must carry the bumped release version on main')
    tagged = subprocess.check_output(['git', '-C', str(source_repository), 'rev-parse', '--verify',
                                      manifest['source']['tag'] + '^{commit}'], text=True).strip()
    if tagged != commit:
        raise ValueError('Release tag must resolve to the pinned source commit')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command', required=True)
    historical = commands.add_parser('archive', help='Recover a previously published release from this repository')
    historical.add_argument('--revision', required=True)
    promote = commands.add_parser('promote', help='Archive and select a new validated release locally; does not push')
    promote.add_argument('--release', required=True, type=Path)
    promote.add_argument('--source-repository', required=True, type=Path)
    commands.add_parser('refresh', help='Regenerate version navigation without changing release content')
    args = parser.parse_args()
    preview = ROOT / 'preview'
    if args.command == 'archive':
        revision = subprocess.check_output(['git', '-C', str(ROOT), 'rev-parse', '--verify', args.revision + '^{commit}'], text=True).strip()
        with tempfile.TemporaryDirectory(prefix='vh-preview-archive-') as tmp:
            source = Path(tmp) / 'preview'
            files = subprocess.check_output(['git', '-C', str(ROOT), 'ls-tree', '-r', '--name-only', revision, '--', *['preview/' + name for name in COPY_FILES]], text=True).splitlines()
            for name in files:
                destination = Path(tmp) / name
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_bytes(subprocess.check_output(['git', '-C', str(ROOT), 'show', revision + ':' + name]))
            target = archive(source, preview)
            print(f'Archived v{target.name} from public site commit {revision}')
    elif args.command == 'promote':
        source = args.release.resolve()
        manifest = read_manifest(source)
        validate_source(manifest, args.source_repository)
        current = read_manifest(preview)['version']
        if tuple(map(int, manifest['version'].split('.'))) <= tuple(map(int, current.split('.'))):
            raise ValueError('Only a newer release can become the default')
        # Preserve current release before any destructive replacement.
        if not (preview / 'versions' / current).exists():
            raise ValueError('Archive the current release before promoting a new one')
        archive(source, preview)
        for name in COPY_FILES:
            target = preview / name
            if target.is_dir():
                shutil.rmtree(target)
            elif target.exists():
                target.unlink()
        copy_release(source, preview)
        refresh(preview)
        print(f'Staged v{manifest["version"]} as the default; no commit or push performed')
    else:
        refresh(preview)
        print('Refreshed version navigation')


if __name__ == '__main__':
    main()
