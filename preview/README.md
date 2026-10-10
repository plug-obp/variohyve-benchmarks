# Public preview page

`index.html` is the public v0.1.0 download page. Release binaries are hosted as
assets on this public repository, not the private language repository. The
manifest records the exact source revision, CI run, checksums and validation.
Do not change an existing release asset in place; use a new version.

The static `learn/` pages and examples must match the public preview runtime. To
regenerate them, supply the extracted starter's `learn` directory or a checked
tutorial staged for that release, an installed `markdown-it` module (14.2.0 was
used for v0.1.0), and the source specification's theme directory.

For the published v0.1.0 starter, first apply
`scripts/learn-v0.1.0-inline.patch` from inside its extracted `learn` directory.
The patch adds the inline examples and download links to the release's Markdown
without changing its API instructions or example files. Check before applying;
an already patched tutorial does not need it again:

```sh
cd /path/to/extracted-starter/learn
git apply --check /path/to/variohyve-benchmarks/scripts/learn-v0.1.0-inline.patch
git apply /path/to/variohyve-benchmarks/scripts/learn-v0.1.0-inline.patch
```

Then render from the public site repository:

```sh
node scripts/render-learn.cjs /path/to/learn /path/to/node_modules/markdown-it /path/to/variohyve/docs/spec/theme
```

The renderer uses the specification's `highlight.js` bundle directly, including
its VarioHyve grammar and Java support. It writes token markup into each code
block and generates `learn/highlight.css` from the deployed mdBook's
`spec/highlight-*.css` palette plus `theme/vh.css`; it does not modify `spec/`.
Fences identify the language with `vh` or `java`. A local link labelled
`Download filename.vh` or `Download filename.java` becomes an accessible download
button; other example links keep their normal appearance.

`learn/learn.css` is maintained here; the renderer preserves it. An optional
fourth argument selects a temporary output directory for checking generated
HTML. Check links and render the page before publishing. Readers need no browser
JavaScript or build tools. GitHub Pages serves the repository's `gh-pages` branch.
