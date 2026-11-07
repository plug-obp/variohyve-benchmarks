#!/usr/bin/env python3
"""Check current project entry points, specification links and release identity."""
import importlib.util
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('preview_checks', ROOT / 'scripts/check-preview.py')
checks = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checks)
manifest = json.loads((ROOT / 'preview/manifest.json').read_text())
version = manifest['version']
pdf = manifest['additional_validation']['documentation']['spec_pdf']['path']
home = (ROOT / 'index.html').read_text()
assert f'v{version}' in home and pdf in home, 'Homepage release/PDF disagrees with manifest'
assert set(re.findall(r'v(\d+\.\d+\.\d+)', home)) == {version}, 'Stale homepage release label'
paths = [ROOT / 'index.html', ROOT / 'dev/bench/index.html', ROOT / 'dev/bench/test-reports/index.html', *sorted((ROOT / 'spec').glob('*.html'))]
count = 0
for path in paths:
    page = checks.Page(path.read_text())
    for href in page.links:
        url = urlsplit(href)
        public_site = url.netloc == 'obpcdl.org' and url.path.startswith('/variohyve-benchmarks/')
        if (url.scheme or url.netloc) and not public_site:
            continue
        if url.path.startswith('/variohyve-benchmarks/'):
            target = ROOT / unquote(url.path.removeprefix('/variohyve-benchmarks/'))
        else:
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
        if target.is_dir(): target /= 'index.html'
        assert target.is_file(), f'{path}: missing {href}'
        if url.fragment and target.suffix == '.html':
            assert unquote(url.fragment) in checks.Page(target.read_text()).ids, f'{path}: missing fragment {href}'
        count += 1
print(f'Public site checks passed: {len(paths)} entry/specification pages, {count} local links.')
