// Render the checked tutorial; syntax highlighting is baked into the HTML.
// Usage: node scripts/render-learn.cjs /path/to/learn /path/to/node_modules/markdown-it /path/to/docs/spec/theme [destination] [release-manifest]
const fs = require('node:fs');
const path = require('node:path');
if (process.argv.length < 5) {
  console.error('Usage: node scripts/render-learn.cjs <learn> <markdown-it> <spec-theme> [destination] [release-manifest]');
  process.exit(1);
}
const MarkdownIt = require(path.resolve(process.argv[3]));
const source = path.resolve(process.argv[2]);
const theme = path.resolve(process.argv[4]);
const destination = process.argv[5] ? path.resolve(process.argv[5]) : path.resolve(__dirname, '../preview/learn');
const manifest = process.argv[6] ? path.resolve(process.argv[6]) : path.resolve(__dirname, '../preview/manifest.json');
const { version } = JSON.parse(fs.readFileSync(manifest, 'utf8'));
if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error('Expected a preview release version in manifest.json');
// Use the specification's bundle directly: it includes Java and the vh grammar.
const hljs = require(path.join(theme, 'highlight.js'));
const sharedHighlight = require(path.join(theme, '../highlighting/render.cjs'));
for (const language of ['vh', 'java']) {
  if (!hljs.getLanguage(language)) throw new Error(`The specification highlighter must include ${language}`);
}
const md = new MarkdownIt({
  html: false,
  linkify: false,
  highlight(code, language) {
    if (!language || !hljs.getLanguage(language)) return '';
    const highlighted = ['vh', 'java'].includes(language)
      ? sharedHighlight.html(code, language) : hljs.highlight(language, code, true).value;
    return `<pre><code class="hljs language-${md.utils.escapeHtml(language)}">${highlighted}</code></pre>\n`;
  }
});
const htmlName = name => path.basename(name) === 'README.md'
  ? path.join(path.dirname(name), 'index.html') : name.replace(/\.md$/, '.html');
const escaped = text => md.utils.escapeHtml(text);
const baseLink = md.renderer.rules.link_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options));
md.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const token = tokens[index];
  let href = token.attrGet('href');
  if (href && !/^(?:[a-z]+:|\/\/)/i.test(href)) {
    const close = tokens.findIndex((child, position) => position > index && child.type === 'link_close');
    const label = tokens.slice(index + 1, close).map(child => child.content).join('');
    const download = /^Download\s+.+\.(?:vh|java|json|md)$/.test(label)
      && /\.(?:vh|java|json|md)$/.test(href);
    // Source-checkout links to the public packaging guides become release-local
    // supplement links; the tagged Markdown and its code remain unchanged.
    const [, relativePath, suffix] = href.match(/^([^?#]*)(.*)$/);
    const sourceTarget = path.posix.normalize(path.posix.join('docs/Learn VarioHyve',
      path.dirname(env.relative).split(path.sep).join('/'), decodeURIComponent(relativePath)));
    const publicGuides = {
      'vh-packaging/GETTING-STARTED.md': 'getting-started.html',
      'vh-packaging/CUSTOM-ALIENS.md': 'custom-aliens.html'
    };
    if (publicGuides[sourceTarget]) {
      href = path.posix.relative(path.posix.dirname('learn/' + env.relative.split(path.sep).join('/')),
        'reference/' + publicGuides[sourceTarget]) + suffix;
    }
    if (!download) href = href.replace(/README\.md(?=[?#]|$)/, 'index.html').replace(/\.md(?=[?#]|$)/, '.html');
    token.attrSet('href', href);
    if (download) {
      token.attrJoin('class', 'button example-download');
      token.attrSet('download', path.posix.basename(href));
    }
  }
  return baseLink(tokens, index, options, env, self);
};
// Keep the same default token colors and VarioHyve emphasis as the mdBook.
const spec = path.resolve(__dirname, '../spec');
const palettes = fs.readdirSync(spec).filter(name => /^highlight-[^.]+\.css$/.test(name));
if (palettes.length !== 1) throw new Error('Expected exactly one deployed mdBook highlight-*.css palette');
fs.mkdirSync(destination, { recursive: true });
const lessonStyle = path.join(destination, 'learn.css');
if (!fs.existsSync(lessonStyle)) {
  fs.copyFileSync(path.resolve(__dirname, '../preview/learn/learn.css'), lessonStyle);
}
fs.writeFileSync(path.join(destination, 'highlight.css'),
  '/* Generated from the specification mdBook palette and theme/vh.css. */\n' +
  fs.readFileSync(path.join(spec, palettes[0]), 'utf8') + '\n' +
  fs.readFileSync(path.join(theme, 'vh.css'), 'utf8'));
function visit(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, item.name);
    if (item.isDirectory()) { visit(filename); continue; }
    const relative = path.relative(source, filename);
    const target = path.join(destination, item.name.endsWith('.md') ? htmlName(relative) : relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (!item.name.endsWith('.md')) { fs.copyFileSync(filename, target); continue; }
    // A README download must deliver the original file, alongside its HTML page.
    fs.copyFileSync(filename, path.join(destination, relative));
    const markdown = fs.readFileSync(filename, 'utf8').replace(/<!-- example(?:-file)?: [^\n]+ -->\n/g, '');
    const title = /^# (.+)$/m.exec(markdown)?.[1] || 'Learn VarioHyve';
    const back = path.relative(path.dirname(target), path.dirname(destination)).split(path.sep).join('/') || '.';
    const toc = path.relative(path.dirname(target), destination).split(path.sep).join('/') || '.';
    fs.writeFileSync(target, `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escaped(title)} · Learn VarioHyve</title><link rel="stylesheet" href="${back}/preview.css"><link rel="stylesheet" href="${toc}/highlight.css"><link rel="stylesheet" href="${toc}/learn.css"></head>
<body><a class="skip" href="#lesson">Skip to lesson</a><header class="site-header wrap"><a class="wordmark" href="${back}/">VarioHyve<span aria-hidden="true">.</span></a><nav aria-label="Tutorial navigation"><a href="${toc}/">All lessons</a><a href="${back}/#downloads">Downloads</a></nav></header>
<main id="lesson" class="lesson"><p class="eyebrow">LEARN VARIOHYVE · V${version}</p>${md.render(markdown, { relative })}</main>
<footer class="wrap"><p>Public preview v${version} · Download the files shown in each lesson. Recipe projects use the packaging tools.</p><a href="${back}/">Back to the preview</a></footer></body></html>\n`);
  }
}
visit(source);
console.log(`Rendered ${source} into ${destination}`);
