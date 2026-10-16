const assert = require('node:assert/strict');
const test = require('node:test');
const { referenceTarget, assignHeadingIds } = require('../scripts/render-reference.cjs');
const commit = 'a'.repeat(40);

test('specification and tutorial references resolve to public pages', () => {
  assert.deepEqual(referenceTarget('spec/src/SUMMARY.md', '0.3.0', commit), { href: '/variohyve-benchmarks/spec/index.html', privateSource: false });
  assert.equal(referenceTarget('spec/src/tooling-architecture.md#optional-metadata-and-source-coordinates', '0.3.0', commit).href, '/variohyve-benchmarks/spec/tooling-architecture.html#optional-metadata-and-source-coordinates');
  assert.equal(referenceTarget('Learn%20VarioHyve/packages/multiplier/README.md', '0.3.0', commit).href, '/variohyve-benchmarks/preview/versions/0.3.0/learn/packages/multiplier/index.html');
});

test('source references pin the full revision and identify private access', () => {
  assert.deepEqual(referenceTarget('../vh-core/src/test/java/boundaryclient/ModuleEntryTest.java', '0.3.0', commit), { href: `https://github.com/plug-obp/variohyve/blob/${commit}/vh-core/src/test/java/boundaryclient/ModuleEntryTest.java`, privateSource: true });
  assert.equal(referenceTarget('design-notes/README.md#accepted', '0.3.0', commit).href, `https://github.com/plug-obp/variohyve/blob/${commit}/docs/design-notes/README.md#accepted`);
  assert.throws(() => referenceTarget('../../outside', '0.3.0', commit), /escapes/);
});


test('packaging guides stay public and link to each other', () => {
  assert.deepEqual(referenceTarget('../vh-packaging/GETTING-STARTED.md', '0.3.1', commit), { href: 'getting-started.html', privateSource: false });
  assert.deepEqual(referenceTarget('CUSTOM-ALIENS.md', '0.3.1', commit, 'vh-packaging/GETTING-STARTED.md'), { href: 'custom-aliens.html', privateSource: false });
  assert.deepEqual(referenceTarget('GETTING-STARTED.md', '0.3.1', commit, 'vh-packaging/CUSTOM-ALIENS.md'), { href: 'getting-started.html', privateSource: false });
  assert.equal(referenceTarget('CUSTOM-ALIENS.md#build-a-provider', '0.3.2', commit,
    'vh-packaging/GETTING-STARTED.md').href, 'custom-aliens.html#build-a-provider');
});

function headingTokens(children) {
  return [{ type: 'heading_open', attrSet(name, value) { this[name] = value; } },
    { type: 'inline', children }, { type: 'heading_close' }];
}

test('reference headings expose stable anchors using formatted text and Unicode', () => {
  const provider = headingTokens([{ type: 'text', content: 'Build a provider' }]);
  const formatted = headingTokens([
    { type: 'text', content: 'Été: ' }, { type: 'em_open' },
    { type: 'text', content: 'Native' }, { type: 'em_close' },
    { type: 'text', content: ' ' }, { type: 'code_inline', content: 'loadAlien/1' },
    { type: 'text', content: ' & ' }, { type: 'link_open', content: 'ignored-url' },
    { type: 'text', content: 'Packages!' }, { type: 'link_close' }
  ]);
  assignHeadingIds([...provider, ...formatted]);
  assert.equal(provider[0].id, 'build-a-provider');
  assert.equal(formatted[0].id, 'été-native-loadalien1--packages');
});

test('heading anchors deduplicate collisions per document and preserve the skip target', () => {
  const headings = ['Build a provider', 'Build a provider', 'Build a provider-1',
    'Build a provider', 'Reference'].map(content => headingTokens([{ type: 'text', content }]));
  assignHeadingIds(headings.flat());
  assert.deepEqual(headings.map(tokens => tokens[0].id), [
    'build-a-provider', 'build-a-provider-1', 'build-a-provider-1-1',
    'build-a-provider-2', 'reference-1'
  ]);
  const nextPage = headingTokens([{ type: 'text', content: 'Build a provider' }]);
  assignHeadingIds(nextPage);
  assert.equal(nextPage[0].id, 'build-a-provider');
});
