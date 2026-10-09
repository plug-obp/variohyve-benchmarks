# Public preview page

`index.html` is the public v0.1.0 download page. Release binaries are hosted as
assets on this public repository, not the private language repository. The
manifest records the exact source revision, CI run, checksums and validation.
Do not change an existing release asset in place; use a new version.

The static `learn/` pages and examples come from the release's checked tutorial.
To regenerate them, supply the extracted starter's `learn` directory and an
installed `markdown-it` module (14.2.0 was used for v0.1.0):

```sh
node scripts/render-learn.cjs /path/to/learn /path/to/node_modules/markdown-it
```

`learn/learn.css` is maintained here; the renderer preserves it. Check links and
render the page before publishing. Readers need no browser JavaScript or build
tools. GitHub Pages serves the repository's `gh-pages` branch.
