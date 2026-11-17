const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { writeLessonAliases } = require('../scripts/render-learn.cjs');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'vh-lesson-aliases-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const source = path.join(root, 'source');
  const destination = path.join(root, 'rendered');
  fs.mkdirSync(source);
  fs.mkdirSync(destination);
  return { source, destination };
}

test('published lesson URLs forward to the corresponding renumbered chapter', t => {
  const { source, destination } = fixture(t);
  const renamed = {
    '07-java-capability': '13-java-capability',
    '08-embedding': '14-embedding',
    '09-worlds': '15-worlds',
    '10-native-packages': '16-native-packages'
  };
  for (const target of Object.values(renamed)) fs.writeFileSync(path.join(source, target + '.md'), '# Lesson\n');
  writeLessonAliases(source, destination, '0.6.4');
  for (const [oldName, target] of Object.entries(renamed)) {
    const html = fs.readFileSync(path.join(destination, oldName + '.html'), 'utf8');
    assert.ok(html.includes(`content="0; url=${target}.html"`));
    assert.ok(html.includes(`<a href="${target}.html">Continue to the lesson</a>`));
    assert.ok(html.includes('window.location.search + window.location.hash'));
    assert.ok(html.includes('V0.6.4'));
    assert.ok(html.includes('</header>'), 'version navigation needs a header');
  }
});

test('historical source chapters are never replaced and absent targets add no aliases', t => {
  const { source, destination } = fixture(t);
  fs.writeFileSync(path.join(source, '07-java-capability.md'), '# Historical Java lesson\n');
  fs.writeFileSync(path.join(source, '13-java-capability.md'), '# New Java lesson\n');
  const historical = path.join(destination, '07-java-capability.html');
  fs.writeFileSync(historical, 'Historical lesson bytes');
  writeLessonAliases(source, destination, '0.6.4');
  assert.equal(fs.readFileSync(historical, 'utf8'), 'Historical lesson bytes');
  assert.deepEqual(fs.readdirSync(destination), ['07-java-capability.html']);
});
