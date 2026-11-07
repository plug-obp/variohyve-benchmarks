#!/usr/bin/env python3
"""Render the project front door and specification navigation from the release record."""
import html
import json
from pathlib import Path
import re
from string import Template

ROOT = Path(__file__).resolve().parents[1]
START = '<!-- public project navigation -->'
END = '<!-- /public project navigation -->'


def render(root=ROOT):
    manifest = json.loads((root / 'preview/manifest.json').read_text())
    pdf = manifest['additional_validation']['documentation']['spec_pdf']['path']
    if not (root / pdf).is_file():
        raise ValueError('Current specification PDF is missing')
    values = dict(version=manifest['version'], date=manifest['date'], spec_pdf=pdf,
                  spec_date=Path(pdf).stem.removeprefix('variohyve-spec-'))
    template = Template((root / 'templates/home.html').read_text())
    (root / 'index.html').write_text(template.substitute({key:html.escape(value, quote=True) for key,value in values.items()}))
    navigation = (START + '<aside aria-label="Public project navigation" style="border:1px solid currentColor;padding:.8rem 1rem;margin:0 0 2rem;font-size:.85em">'
        '<nav aria-label="Project"><a href="../">VarioHyve</a> · <a href="../preview/">Downloads</a> · '
        '<a href="../preview/learn/">Learn</a> · <a href="../dev/bench/">Benchmarks</a> · '
        f'<a href="../{html.escape(pdf, quote=True)}">PDF</a> · <a href="../preview/reference/evidence.html">Evidence</a></nav>'
        f'<p>Specification published with preview v{manifest["version"]}. '
        f'Source <code>{manifest["source"]["commit"][:12]}</code>. '
        'Implementation chapters and future directions state their own scope.</p></aside>' + END)
    count = 0
    for path in (root / 'spec').glob('*.html'):
        text = re.sub(re.escape(START) + '.*?' + re.escape(END), '', path.read_text(), flags=re.S)
        if '<main>' in text:
            path.write_text(text.replace('<main>', '<main>' + navigation, 1))
            count += 1
    print(f'Rendered homepage and {count} specification navigation bars for v{manifest["version"]}')


if __name__ == '__main__':
    render()
