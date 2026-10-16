const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const script = fs.readFileSync(path.join(__dirname, '../preview/versions.js'), 'utf8');

class Element {
  constructor(tag) { this.tag = tag; this.children = []; this.listeners = {}; }
  append(...children) { this.children.push(...children); }
  prepend(child) { this.children.unshift(child); }
  addEventListener(event, callback) { this.listeners[event] = callback; }
  querySelector(tag) { return this.children.find(child => child.tag === tag); }
  remove() { this.removed = true; }
  get value() { return this.tag === 'select' ? this.children.find(child => child.selected)?.value : this._value; }
  set value(value) { this._value = value; }
}
const versions = {
  latest: '0.3.0',
  versions: [
    {version: '0.3.0', path: 'versions/0.3.0/', pages: ['index.html', 'learn/index.html', 'learn/01-install.html', 'learn/09-worlds.html']},
    {version: '0.2.0', path: 'versions/0.2.0/', pages: ['index.html', 'learn/index.html', 'learn/01-install.html']}
  ]
};
async function run(page, reject = false) {
  const panel = new Element('div');
  panel.dataset = {version: '0.3.0', page};
  panel.append(new Element('span'), new Element('a'));
  let assigned;
  vm.runInNewContext(script, {
    URL,
    document: {currentScript: {src: 'https://example.test/preview/versions.js'}, querySelector: () => panel, createElement: tag => new Element(tag)},
    window: {location: {assign: value => { assigned = value; }}},
    fetch: async url => {
      assert.equal(url.href, 'https://example.test/preview/versions.json');
      if (reject) throw new Error('Offline');
      return {ok: true, json: async () => versions};
    }
  });
  await new Promise(resolve => setImmediate(resolve));
  return {panel, assigned: () => assigned};
}

test('selecting a version preserves an existing chapter and requires explicit View', async () => {
  const {panel, assigned} = await run('learn/01-install.html');
  const form = panel.querySelector('form');
  const select = form.querySelector('label').querySelector('select');
  assert.equal(select.children[0].textContent, 'v0.3.0 (latest)');
  assert.equal(select.children[1].value, 'https://example.test/preview/versions/0.2.0/learn/01-install.html');
  assert.equal(assigned(), undefined);
  select.children[0].selected = false;
  select.children[1].selected = true;
  let prevented = false;
  form.listeners.submit({preventDefault() { prevented = true; }});
  assert.equal(prevented, true);
  assert.equal(assigned(), select.children[1].value);
});

test('new chapters fall back to the selected older tutorial index', async () => {
  const {panel} = await run('learn/09-worlds.html');
  const select = panel.querySelector('form').querySelector('label').querySelector('select');
  assert.equal(select.children[1].value, 'https://example.test/preview/versions/0.2.0/learn/index.html');
});

test('failed version loading keeps the ordinary version-list link', async () => {
  const {panel} = await run('learn/09-worlds.html', true);
  assert.equal(panel.querySelector('form'), undefined);
  assert.ok(panel.querySelector('a'));
  assert.equal(panel.querySelector('span').removed, undefined);
});
