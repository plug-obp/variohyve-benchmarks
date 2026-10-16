"""Publication checks without network, release upload or changes to the real site."""
import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location('stage_preview', Path(__file__).resolve().parents[1] / 'scripts/stage-preview.py')
stage = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(stage)


class PreviewTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.old_root = stage.ROOT
        stage.ROOT = self.root
        self.preview = self.root / 'preview'
        self.preview.mkdir()

    def tearDown(self):
        stage.ROOT = self.old_root
        self.temp.cleanup()

    def release(self, target, version):
        target.mkdir(parents=True, exist_ok=True)
        (target / 'learn').mkdir()
        manifest = {'version': version, 'date': '2026-10-16', 'source': {'tag': 'v' + version, 'commit': 'a' * 40}}
        (target / 'manifest.json').write_text(json.dumps(manifest))
        (target / 'preview.css').write_text('body { color: green; }')
        (target / 'index.html').write_text('<html><head></head><body><header></header><a href="../spec/">Spec</a><a href="learn/">Learn</a></body></html>')
        (target / 'learn/index.html').write_text('<html><head></head><body><header></header><a href="../">Preview</a><pre><code>class Answer { answer { 42 } }</code></pre></body></html>')
        (target / 'learn/answer.vh').write_text('class Answer { answer { 42 } }\n')
        return manifest

    def test_archive_keeps_examples_and_external_links_and_rejects_overwrite(self):
        self.release(self.preview, '0.2.0')
        archived = stage.archive(self.preview, self.preview)
        self.assertEqual((archived / 'learn/answer.vh').read_bytes(), (self.preview / 'learn/answer.vh').read_bytes())
        self.assertIn('href="../../../spec/"', (archived / 'index.html').read_text())
        self.assertIn('href="learn/"', (archived / 'index.html').read_text())
        with self.assertRaisesRegex(ValueError, 'immutable'):
            stage.archive(self.preview, self.preview)

    def test_optional_reference_is_archived_and_indexed(self):
        self.release(self.preview, '0.3.0')
        reference = self.preview / 'reference'
        reference.mkdir()
        (reference / 'conformance.html').write_text('<html><head></head><body><header></header>Release contract</body></html>')
        archived = stage.archive(self.preview, self.preview)
        self.assertEqual((archived / 'reference/conformance.html').read_bytes(), (reference / 'conformance.html').read_bytes())
        stage.refresh(self.preview)
        index = json.loads((self.preview / 'versions.json').read_text())
        self.assertIn('reference/conformance.html', index['versions'][0]['pages'])
        self.assertIn('data-page="reference/conformance.html"', (archived / 'reference/conformance.html').read_text())

    def test_numeric_version_order_latest_default_and_idempotent_navigation(self):
        self.release(self.preview, '0.10.0')
        old = self.root / 'old'
        self.release(old, '0.9.0')
        stage.archive(old, self.preview)
        stage.archive(self.preview, self.preview)
        stage.refresh(self.preview)
        index = json.loads((self.preview / 'versions.json').read_text())
        self.assertEqual([entry['version'] for entry in index['versions']], ['0.10.0', '0.9.0'])
        self.assertEqual(index['latest'], '0.10.0')
        before = (self.preview / 'versions/0.9.0/learn/index.html').read_text()
        stage.refresh(self.preview)
        self.assertEqual(before, (self.preview / 'versions/0.9.0/learn/index.html').read_text())
        self.assertEqual(before.count('class="version-navigation wrap"'), 1)
        self.assertIn('../../../versions.js', before)
        self.assertIn('class Answer { answer { 42 } }', before)

    def test_main_ancestry_and_pinned_version_are_required(self):
        repo = self.root / 'source'
        repo.mkdir()
        def git(*args):
            return subprocess.check_output(['git', '-C', str(repo), *args], text=True, stderr=subprocess.DEVNULL).strip()
        git('init', '-b', 'main')
        git('config', 'user.name', 'Preview test')
        git('config', 'user.email', 'preview-test@example.invalid')
        (repo / 'gradle.properties').write_text('version=0.2.0\n')
        git('add', 'gradle.properties')
        git('commit', '-m', 'Initial version')
        git('checkout', '-b', 'feature')
        (repo / 'gradle.properties').write_text('version=0.3.0\n')
        git('commit', '-am', 'Bump version')
        commit = git('rev-parse', 'HEAD')
        manifest = {'version': '0.3.0', 'source': {'commit': commit, 'tag': 'v0.3.0'}}
        git('tag', 'v0.3.0')
        with self.assertRaises(subprocess.CalledProcessError):
            stage.validate_source(manifest, repo)
        git('checkout', 'main')
        git('merge', '--ff-only', 'feature')
        stage.validate_source(manifest, repo)
        git('tag', '-f', 'v0.3.0', 'HEAD^')
        with self.assertRaisesRegex(ValueError, 'tag must resolve'):
            stage.validate_source(manifest, repo)
        with self.assertRaisesRegex(ValueError, 'bumped release version'):
            stage.validate_source({'version': '0.4.0', 'source': {'commit': commit}}, repo)


if __name__ == '__main__':
    unittest.main()
