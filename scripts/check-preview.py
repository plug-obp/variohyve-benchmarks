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
    parser.add_argument('--learn', required=True, type=Path, help='learn/ extracted from the release ZIP')
    parser.add_argument('--assets', type=Path, help='download assets to check against manifest checksums')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    preview = root / 'preview'
    manifest = json.loads((preview / 'manifest.json').read_text())
    version = manifest['version']
    pages = {path: Page(path.read_text()) for path in preview.rglob('*.html')}
    checked = {'vh': 0, 'java': 0}
    for path, page in pages.items():
        assert f'v{version}' in path.read_text().lower(), f'{path}: stale release label'
        for link in page.links:
            url = urlsplit(link)
            if url.scheme or url.netloc:
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f'{path}: missing {link}'
            if url.fragment and target.suffix == '.html':
                target_page = pages.get(target) or Page(target.read_text())
                assert unquote(url.fragment) in target_page.ids, f'{path}: missing fragment {link}'
    for source in args.learn.rglob('*.md'):
        relative = source.relative_to(args.learn)
        target = preview / 'learn' / relative.with_name('index.html' if source.name == 'README.md' else source.stem + '.html')
        page = pages[target]
        fences = re.findall(r'^```([^\n]*)\n(.*?)^```\s*$', source.read_text(), re.M | re.S)
        assert len(fences) == len(page.blocks), f'{source}: code block count differs'
        for (language, code), rendered in zip(fences, page.blocks):
            assert rendered['text'] == code, f'{source}: rendered code changed'
            if language in checked:
                assert f'language-{language}' in rendered['classes'], f'{source}: wrong grammar'
                assert any(token.startswith('hljs-') for token in rendered['tokens']), f'{source}: highlighting absent'
                checked[language] += 1
    assert all(checked.values()), 'Both languages must be exercised'
    index = (preview / 'index.html').read_text()
    for asset in manifest['assets']:
        assert f'/v{version}/{asset["name"]}' in index, f'Missing release download: {asset["name"]}'
        if args.assets:
            data = (args.assets / asset['name']).read_bytes()
            assert len(data) == asset['bytes']
            assert hashlib.sha256(data).hexdigest() == asset['sha256']
    print(f'Preview checks passed: {len(pages)} pages; {checked["vh"]} VarioHyve and {checked["java"]} Java blocks preserve exact packaged source and have distinct language highlighting.')


if __name__ == '__main__':
    main()
