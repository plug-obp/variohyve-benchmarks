#!/usr/bin/env python3
"""Copy a tagged mdBook build and map source-only links without changing its prose."""
import argparse
import html
from pathlib import Path
import posixpath
import re
import shutil
from urllib.parse import quote, unquote, urlsplit

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source',required=True,type=Path)
parser.add_argument('--commit',required=True)
parser.add_argument('--version',required=True)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
assert re.fullmatch('[0-9a-f]{40}',args.commit)
book=args.source/'docs/spec/book'
shutil.copytree(book,root/'spec',dirs_exist_ok=True)
count=0
for page in (root/'spec').glob('*.html'):
    def link(match):
        global count
        prefix,href,attrs,label,end=match.groups()
        url=urlsplit(html.unescape(href))
        if url.scheme or not url.path or (page.parent/unquote(url.path)).exists(): return match[0]
        source=posixpath.normpath(posixpath.join('docs/spec/src',unquote(url.path)))
        if source.endswith('.html'): source=source[:-5]+'.md'
        if not (args.source/source).is_file(): raise ValueError(f'{page}: unknown source link {href}')
        suffix=('#'+url.fragment) if url.fragment else ''
        if source=='docs/conformance.md':
            target=f'/variohyve-benchmarks/preview/versions/{args.version}/reference/conformance.html'+suffix
            return prefix+target+attrs+label+end
        target='https://github.com/plug-obp/variohyve/blob/'+args.commit+'/'+quote(source,safe='/')+suffix
        count+=1
        return prefix+html.escape(target,quote=True)+attrs+label+end+' <small>(source access required)</small>'
    text=re.sub(r'(<a\b[^>]*href=")([^"]+)("[^>]*>)(.*?)(</a>)',link,page.read_text(),flags=re.S)
    page.write_text(text)
print(f'Published mdBook; labelled {count} source-only links. Historical PDFs retained.')
