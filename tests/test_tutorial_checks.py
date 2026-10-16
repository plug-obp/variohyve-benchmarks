"""Regressions for the promised tutorial files and chapter navigation."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location('check_preview', Path(__file__).resolve().parents[1] / 'scripts/check-preview.py')
preview = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(preview)


class TutorialChecks(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.learn = self.root / 'learn'
        self.rendered = self.root / 'rendered'
        self.learn.mkdir()
        self.rendered.mkdir()
        self.source = self.learn / '09-worlds.md'
        self.html = self.rendered / '09-worlds.html'

    def tearDown(self):
        self.temp.cleanup()

    def download(self, name, content=b'{}\n'):
        for root in (self.learn, self.rendered):
            (root / 'projects').mkdir(exist_ok=True)
            (root / 'projects' / name).write_bytes(content)
        markdown = f'[Download {name}](projects/{name})\n'
        self.source.write_text(markdown)
        return markdown

    def check_download(self, markdown, html):
        return preview.check_downloads(markdown, self.source, self.learn, self.html,
                                       self.rendered, preview.Page(html))

    def test_json_download_requires_both_a_button_and_download_action(self):
        markdown = self.download('Main.vh.launch.json')
        for attrs in ['', 'class="button"', 'download="Main.vh.launch.json"']:
            with self.subTest(attrs=attrs), self.assertRaisesRegex(AssertionError, 'download attribute and button'):
                self.check_download(markdown, f'<a {attrs} href="projects/Main.vh.launch.json">Download Main.vh.launch.json</a>')
        self.assertEqual(self.check_download(markdown, '<a class="button example-download" download="Main.vh.launch.json" href="projects/Main.vh.launch.json">Download <code>Main.vh.launch.json</code></a>'), 1)

    def test_downloaded_file_must_match_source_bytes(self):
        markdown = self.download('World.vh', b'{ answer { 42 } }\n')
        (self.rendered / 'projects/World.vh').write_bytes(b'{ answer { 41 } }\n')
        with self.assertRaisesRegex(AssertionError, 'downloaded bytes differ'):
            self.check_download(markdown, '<a class="button" download href="projects/World.vh">Download World.vh</a>')

    def test_markdown_download_targets_raw_document_not_rendered_page(self):
        markdown = self.download('README.md', b'# Contract\n')
        (self.rendered / 'projects/index.html').write_text('<h1>Contract</h1>')
        with self.assertRaisesRegex(AssertionError, 'original download target'):
            self.check_download(markdown, '<a class="button" download href="projects/index.html">Download README.md</a>')
        self.assertEqual(self.check_download(markdown, '<a class="button" download href="projects/README.md">Download README.md</a>'), 1)

    def test_complete_file_marker_rejects_excerpt_and_missing_final_newline(self):
        (self.learn / 'Main.vh').write_bytes(b'class Main {\n    answer { 42 }\n}\n')
        full = '<!-- example-file: Main.vh -->\n```vh\nclass Main {\n    answer { 42 }\n}\n```\n'
        self.assertEqual(preview.check_full_files(full, self.source, self.learn), 1)
        excerpt = '<!-- example-file: Main.vh -->\n```vh\n    answer { 42 }\n```\n'
        with self.assertRaisesRegex(AssertionError, 'complete-file fence differs'):
            preview.check_full_files(excerpt, self.source, self.learn)
        (self.learn / 'Main.vh').write_bytes(b'class Main {\n    answer { 42 }\n}')
        with self.assertRaisesRegex(AssertionError, 'complete-file fence differs'):
            preview.check_full_files(full, self.source, self.learn)

    def test_complete_file_marker_does_not_silently_allow_intervening_content(self):
        with self.assertRaisesRegex(AssertionError, 'directly precede'):
            preview.check_full_files('<!-- example-file: Main.vh -->\nSome other text.\n```vh\nanswer\n```\n', self.source, self.learn)

    def chapters(self, names):
        (self.learn / 'README.md').write_text(''.join(f'{index}. [Chapter]({name})\n' for index, name in enumerate(names, 1)))
        for name in names:
            (self.learn / name).write_text('# Chapter\n')
        return {self.rendered / Path(name).with_suffix('.html'): preview.Page('<p>Back to all lessons.</p>') for name in names}

    def test_ten_chapter_tutorial_requires_eight_to_nine_then_nine_to_ten(self):
        names = ['08-embedding.md', '09-worlds.md', '10-native-packages.md']
        pages = self.chapters(names)
        pages[self.rendered / '09-worlds.html'] = preview.Page('<p>Next: <a href="10-native-packages.html">Native packages</a>.</p>')
        with self.assertRaisesRegex(AssertionError, '08-embedding.md: missing Next link to 09-worlds.md'):
            preview.check_chapter_navigation(self.learn, self.rendered, pages)
        pages[self.rendered / '08-embedding.html'] = preview.Page('<p>Next: <a href="09-worlds.html">Native worlds</a>.</p>')
        self.assertEqual(preview.check_chapter_navigation(self.learn, self.rendered, pages), 2)

    def test_historical_eight_chapter_tutorial_does_not_require_a_ninth_chapter(self):
        pages = self.chapters(['07-java-capability.md', '08-embedding.md'])
        pages[self.rendered / '07-java-capability.html'] = preview.Page('<p>Next: <a href="08-embedding.html">Embedding</a>.</p>')
        self.assertEqual(preview.check_chapter_navigation(self.learn, self.rendered, pages), 1)


if __name__ == '__main__':
    unittest.main()
