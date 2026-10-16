#!/usr/bin/env python3
"""Check release links, highlighting and exact code excerpts against packaged lessons."""
import argparse
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.blocks = [], set(), []
        self.pre, self.code = False, None
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag in ('a', 'link', 'script', 'img'):
            target = attrs.get('href', attrs.get('src'))
            if target:
                self.links.append(target)
        if tag == 'pre':
            self.pre = True
        if tag == 'code' and self.pre:
            self.code = {'text': '', 'classes': attrs.get('class', '').split(), 'tokens': []}
        if tag == 'span' and self.code is not None:
            self.code['tokens'].extend(attrs.get('class', '').split())

    def handle_endtag(self, tag):
        if tag == 'code' and self.code is not None:
            self.blocks.append(self.code)
            self.code = None
        if tag == 'pre':
            self.pre = False

    def handle_data(self, text):
        if self.code is not None:
            self.code['text'] += text


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--learn', type=Path, help='learn/ extracted from the selected release ZIP')
    parser.add_argument('--version', help='release to compare with --learn and --assets (default: latest)')
    parser.add_argument('--assets', type=Path, help='download assets to check against manifest checksums')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    preview = root / 'preview'
    index = json.loads((preview / 'versions.json').read_text())
    versions = [entry['version'] for entry in index['versions']]
    assert len(versions) == len(set(versions)), 'Duplicate archived version'
    assert versions == sorted(versions, key=lambda value: tuple(map(int, value.split('.'))), reverse=True)
    assert index['latest'] == versions[0], 'Latest must be the newest version'
    assert json.loads((preview / 'manifest.json').read_text())['version'] == index['latest']
    version = args.version or index['latest']
    assert version in versions, f'Unknown tutorial version: {version}'
    release = preview if version == index['latest'] else preview / 'versions' / version
    manifest = json.loads((release / 'manifest.json').read_text())
    for entry in index['versions']:
        assert entry['path'] == f'versions/{entry["version"]}/'
        archived = preview / entry['path']
        record = json.loads((archived / 'manifest.json').read_text())
        assert record['version'] == entry['version']
        assert record['source']['commit'] == entry['source_commit']
        assert entry['pages'] == sorted(str(path.relative_to(archived)) for path in archived.rglob('*.html'))
    pages = {path: Page(path.read_text()) for path in preview.rglob('*.html')}
    checked = {'vh': 0, 'java': 0}
    for path, page in pages.items():
        if path != preview / 'versions.html':
            page_version = path.relative_to(preview).parts[1] if path.is_relative_to(preview / 'versions') else index['latest']
            assert f'v{page_version}' in path.read_text().lower(), f'{path}: stale release label'
            assert f'data-version="{page_version}"' in path.read_text(), f'{path}: missing version selector'
        for link in page.links:
            url = urlsplit(link)
            if url.scheme or url.netloc:
                continue
            if url.path.startswith('/variohyve-benchmarks/'):
                target = (root / unquote(url.path.removeprefix('/variohyve-benchmarks/'))).resolve()
            else:
                target = (path.parent / unquote(url.path)).resolve() if url.path else path
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f'{path}: missing {link}'
            if url.fragment and target.suffix == '.html':
                target_page = pages.get(target) or Page(target.read_text())
                assert unquote(url.fragment) in target_page.ids, f'{path}: missing fragment {link}'
    for source in args.learn.rglob('*.md') if args.learn else []:
        relative = source.relative_to(args.learn)
        target = release / 'learn' / relative.with_name('index.html' if source.name == 'README.md' else source.stem + '.html')
        page = pages[target]
        fences = re.findall(r'^```([^\n]*)\n(.*?)^```\s*$', source.read_text(), re.M | re.S)
        assert len(fences) == len(page.blocks), f'{source}: code block count differs'
        for (language, code), rendered in zip(fences, page.blocks):
            assert rendered['text'] == code, f'{source}: rendered code changed'
            if language in checked:
                assert f'language-{language}' in rendered['classes'], f'{source}: wrong grammar'
                assert any(token.startswith('hljs-') for token in rendered['tokens']), f'{source}: highlighting absent'
                checked[language] += 1
    if args.learn:
        assert all(checked.values()), 'Both languages must be exercised'
    index_html = (release / 'index.html').read_text()
    for asset in manifest['assets']:
        assert f'/v{version}/{asset["name"]}' in index_html, f'Missing release download: {asset["name"]}'
        if args.assets:
            data = (args.assets / asset['name']).read_bytes()
            assert len(data) == asset['bytes']
            assert hashlib.sha256(data).hexdigest() == asset['sha256']
    print(f'Preview structure checks passed: {len(versions)} releases, {len(pages)} pages.')
    if args.learn:
        print(f'Source comparison passed: {checked["vh"]} VarioHyve and {checked["java"]} Java blocks preserve exact packaged source and have distinct language highlighting.')


if __name__ == '__main__':
    main()
