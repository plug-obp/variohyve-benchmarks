const assert = require('node:assert/strict');
const test = require('node:test');
const { referenceTarget } = require('../scripts/render-reference.cjs');
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
