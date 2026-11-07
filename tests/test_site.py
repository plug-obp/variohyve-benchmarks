import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).parents[1]
SPEC = importlib.util.spec_from_file_location('render_site', ROOT / 'scripts/render-site.py')
renderer = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(renderer)

class SiteTests(unittest.TestCase):
    def test_release_record_controls_homepage_pdf_and_idempotent_book_navigation(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            for directory in ['preview','templates','spec']: (root/directory).mkdir()
            (root/'templates/home.html').write_text('Preview v$version $spec_pdf $spec_date $date')
            (root/'spec/current.pdf').write_bytes(b'fixture')
            (root/'spec/index.html').write_text('<html><body><main><h1>Specification</h1></main></body></html>')
            record = {'version':'0.6.1','date':'2026-11-07','source':{'commit':'a'*40},'additional_validation':{'documentation':{'spec_pdf':{'path':'spec/current.pdf'}}}}
            (root/'preview/manifest.json').write_text(json.dumps(record))
            renderer.render(root)
            before=(root/'spec/index.html').read_text()
            renderer.render(root)
            self.assertEqual(before,(root/'spec/index.html').read_text())
            self.assertEqual(before.count(renderer.START),1)
            record['version']='0.7.0';(root/'preview/manifest.json').write_text(json.dumps(record))
            renderer.render(root)
            self.assertIn('v0.7.0',(root/'index.html').read_text())
            self.assertNotIn('v0.6.1',(root/'index.html').read_text())
