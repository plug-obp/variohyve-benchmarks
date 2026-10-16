// Render the public conformance map from a pinned source commit, never the working tree.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

function referenceTarget(href, version, commit) {
  if (/^(?:[a-z]+:|\/\/|#)/i.test(href)) return { href, privateSource: false };
  const hash = href.indexOf('#');
  const suffix = hash < 0 ? '' : href.slice(hash);
  const pathname = decodeURIComponent(hash < 0 ? href : href.slice(0, hash));
  const source = path.posix.normalize(path.posix.join('docs', pathname));
  if (source.startsWith('docs/spec/src/')) {
    const chapter = source.slice('docs/spec/src/'.length);
    return { href: '/variohyve-benchmarks/spec/' + (chapter === 'SUMMARY.md' ? 'index.html' : chapter.replace(/\.md$/, '.html')) + suffix, privateSource: false };
  }
  if (source.startsWith('docs/Learn VarioHyve/')) {
    const lesson = source.slice('docs/Learn VarioHyve/'.length).replace(/README\.md$/, 'index.html').replace(/\.md$/, '.html');
    return { href: `/variohyve-benchmarks/preview/versions/${version}/learn/` + lesson + suffix, privateSource: false };
  }
  if (source.startsWith('../') || path.posix.isAbsolute(source)) throw new Error('Reference escapes the source repository');
  return { href: `https://github.com/plug-obp/variohyve/blob/${commit}/` + source.split('/').map(encodeURIComponent).join('/') + suffix, privateSource: true };
}

function render(sourceRepository, commit, version, destination, markdownModule) {
  if (!/^[0-9a-f]{40}$/.test(commit)) throw new Error('Expected the full source commit');
  if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error('Expected the release version');
  const markdown = execFileSync('git', ['-C', sourceRepository, 'show', `${commit}:docs/conformance.md`], { encoding: 'utf8' });
  const MarkdownIt = require(path.resolve(markdownModule));
  const md = new MarkdownIt({ html: false, linkify: false });
  const baseLink = md.renderer.rules.link_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));
  md.renderer.rules.link_open = (tokens, index, options, env, self) => {
    const token = tokens[index];
    const target = referenceTarget(token.attrGet('href'), version, commit);
    token.attrSet('href', target.href);
    if (target.privateSource) token.attrSet('title', 'Private source repository; access required');
    return baseLink(tokens, index, options, env, self);
  };
  const sourceUrl = `https://github.com/plug-obp/variohyve/blob/${commit}/docs/conformance.md`;
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, 'conformance.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Contract and conformance map · VarioHyve v${version}</title><link rel="stylesheet" href="../preview.css"><link rel="stylesheet" href="../learn/learn.css"></head>
<body><a class="skip" href="#reference">Skip to reference</a><header class="site-header wrap"><a class="wordmark" href="../">VarioHyve<span aria-hidden="true">.</span></a><nav aria-label="Release navigation"><a href="../learn/">Tutorial</a><a href="../#downloads">Downloads</a></nav></header>
<main id="reference" class="lesson"><p class="eyebrow">RELEASE REFERENCE · V${version}</p><p>This public reference is rendered from the v${version} source commit <code>${commit}</code>. Code, test and design-note links point to that exact revision in the private source repository and require repository access. Specification and tutorial links are public.</p>${md.render(markdown)}</main>
<footer class="wrap"><p>Supplemental reference · VarioHyve v${version}</p><a href="${sourceUrl}" title="Private source repository; access required">Pinned Markdown source (access required)</a></footer></body></html>
`);
}

if (require.main === module) {
  if (process.argv.length !== 7) {
    console.error('Usage: node scripts/render-reference.cjs <source-repository> <full-commit> <version> <destination-reference-dir> <markdown-it-module>');
    process.exit(1);
  }
  render(...process.argv.slice(2));
}
module.exports = { referenceTarget, render };
