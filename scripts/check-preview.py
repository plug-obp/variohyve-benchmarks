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
        self.anchors, self.paragraphs = [], []
        self.anchor, self.paragraph = None, None
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
        if tag == 'a':
            self.anchor = {'attrs': attrs, 'text': ''}
            self.anchors.append(self.anchor)
            if self.paragraph is not None:
                self.paragraph['anchors'].append(self.anchor)
        if tag == 'p':
            self.paragraph = {'text': '', 'anchors': []}
        if tag == 'pre':
            self.pre = True
        if tag == 'code' and self.pre:
            self.code = {'text': '', 'classes': attrs.get('class', '').split(), 'tokens': []}
        if tag == 'span' and self.code is not None:
            self.code['tokens'].extend(attrs.get('class', '').split())

    def handle_endtag(self, tag):
        if tag == 'a':
            self.anchor = None
        if tag == 'p' and self.paragraph is not None:
            self.paragraphs.append(self.paragraph)
            self.paragraph = None
        if tag == 'code' and self.code is not None:
            self.blocks.append(self.code)
            self.code = None
        if tag == 'pre':
            self.pre = False

    def handle_data(self, text):
        if self.anchor is not None:
            self.anchor['text'] += text
        if self.paragraph is not None:
            self.paragraph['text'] += text
        if self.code is not None:
            self.code['text'] += text


def check_downloads(markdown, source, learn, rendered, rendered_learn, page):
    """A promised download must retain its source path, bytes and browser action."""
    count = 0
    for match in re.finditer(r'\[(Download [^\]\n]+)\]\((<[^>\n]+>|[^)\s]+)\)', markdown):
        label, href = match.groups()
        label = label.replace('`', '')
        url = urlsplit(href.strip('<>'))
        if url.scheme or url.netloc:
            continue
        original = (source.parent / unquote(url.path)).resolve()
        assert original.is_relative_to(learn.resolve()), f'{source}: download escapes tutorial: {href}'
        assert original.is_file(), f'{source}: missing download source: {href}'
        expected = (rendered_learn / original.relative_to(learn.resolve())).resolve()
        candidates = [anchor for anchor in page.anchors if ' '.join(anchor['text'].split()) == label]
        matching = []
        for anchor in candidates:
            target_url = urlsplit(anchor['attrs'].get('href', ''))
            if not target_url.scheme and not target_url.netloc:
                target = (rendered.parent / unquote(target_url.path)).resolve()
                if target == expected:
                    matching.append(anchor)
        assert matching, f'{source}: missing original download target for {label}: {href}'
        assert any('download' in anchor['attrs'] and 'button' in anchor['attrs'].get('class', '').split()
                   for anchor in matching), f'{source}: {label} needs a download attribute and button class'
        assert expected.is_file(), f'{source}: missing published download: {href}'
        assert expected.read_bytes() == original.read_bytes(), f'{source}: downloaded bytes differ: {href}'
        count += 1
    return count


def check_full_files(markdown, source, learn):
    marked = re.compile(r'<!-- example-file: ([^\n]+) -->\s*\n```[^\n]*\n(.*?)^```\s*$', re.M | re.S)
    matches = list(marked.finditer(markdown))
    assert len(matches) == markdown.count('<!-- example-file:'), f'{source}: complete-file marker must directly precede a fence'
    for match in matches:
        original = (learn / match[1]).resolve()
        assert original.is_relative_to(learn.resolve()), f'{source}: complete-file source escapes tutorial'
        assert original.is_file(), f'{source}: missing complete-file source: {match[1]}'
        assert match[2] == original.read_bytes().decode('utf-8'), f'{source}: complete-file fence differs from {match[1]}'
    return len(matches)


def check_chapter_navigation(learn, rendered_learn, pages):
    """Only require successors that belong to this tutorial's own chapter index."""
    index = (learn / 'README.md').read_text()
    chapters = re.findall(r'^\d+\.\s+\[[^\]]+\]\((\d{2}-[^/\n)]+\.md)\)', index, re.M)
    checked = 0
    for current, following in zip(chapters, chapters[1:]):
        assert (learn / current).is_file() and (learn / following).is_file(), 'Chapter index names a missing source'
        rendered = rendered_learn / Path(current).with_suffix('.html')
        successor = (rendered_learn / Path(following).with_suffix('.html')).resolve()
        page = pages[rendered]
        next_links = [anchor['attrs'].get('href', '') for paragraph in page.paragraphs
                      if ' '.join(paragraph['text'].split()).startswith('Next:')
                      for anchor in paragraph['anchors']]
        assert any(not urlsplit(href).scheme and not urlsplit(href).netloc
                   and (rendered.parent / unquote(urlsplit(href).path)).resolve() == successor
                   for href in next_links), f'{current}: missing Next link to {following}'
        checked += 1
    return checked


def check_tutorial(learn, rendered_learn, pages):
    checked = {'vh': 0, 'java': 0, 'downloads': 0, 'complete_files': 0, 'chapter_steps': 0}
    for source in learn.rglob('*.md'):
        relative = source.relative_to(learn)
        target = rendered_learn / relative.with_name('index.html' if source.name == 'README.md' else source.stem + '.html')
        page = pages[target]
        markdown = source.read_bytes().decode('utf-8')
        fences = re.findall(r'^```([^\n]*)\n(.*?)^```\s*$', markdown, re.M | re.S)
        assert len(fences) == len(page.blocks), f'{source}: code block count differs'
        for (language, code), rendered in zip(fences, page.blocks):
            assert rendered['text'] == code, f'{source}: rendered code changed'
            if language in ('vh', 'java'):
                assert f'language-{language}' in rendered['classes'], f'{source}: wrong grammar'
                assert any(token.startswith('hljs-') for token in rendered['tokens']), f'{source}: highlighting absent'
                checked[language] += 1
        checked['downloads'] += check_downloads(markdown, source, learn, target, rendered_learn, page)
        checked['complete_files'] += check_full_files(markdown, source, learn)
    checked['chapter_steps'] = check_chapter_navigation(learn, rendered_learn, pages)
    assert checked['vh'] and checked['java'], 'Both languages must be exercised'
    return checked


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--learn', type=Path, help='lesson source tree matching the published tutorial revision')
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
    checked = check_tutorial(args.learn, release / 'learn', pages) if args.learn else None
    if args.learn and version == index['latest']:
        archived = check_tutorial(args.learn, preview / 'versions' / version / 'learn', pages)
        assert archived == checked, 'Latest default and its versioned tutorial disagree'
    index_html = (release / 'index.html').read_text()
    for asset in manifest['assets']:
        assert f'/v{version}/{asset["name"]}' in index_html, f'Missing release download: {asset["name"]}'
        if args.assets:
            data = (args.assets / asset['name']).read_bytes()
            assert len(data) == asset['bytes']
            assert hashlib.sha256(data).hexdigest() == asset['sha256']
    print(f'Preview structure checks passed: {len(versions)} releases, {len(pages)} pages.')
    if args.learn:
        print(f'Source comparison passed: {checked["vh"]} VarioHyve and {checked["java"]} Java blocks preserve exact source and have distinct language highlighting.')
        print(f'Tutorial checks passed: {checked["downloads"]} download buttons, {checked["complete_files"]} complete-file excerpts, {checked["chapter_steps"]} chapter transitions.')


if __name__ == '__main__':
    main()
