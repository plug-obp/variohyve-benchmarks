# Public preview and tutorial versions

`index.html` and `learn/` show the newest published release by default. Every
published tutorial has a permanent snapshot at `versions/<version>/learn/`, next
to its original download page and build manifest. `versions.json` records all
versions in descending numeric order. The selector keeps the current chapter
when the selected release has it, and otherwise opens that release's lesson
index. [All versions](versions.html) works without browser JavaScript.

The recovered v0.1.0 snapshot comes from public-site commit
`dfe2b814f7440a98732d81495d9b1c0eea980e1e` (including its checked inline examples);
v0.2.0 comes from `f93d29f361b4dc83d64a2c9608f75ed321d7677d`. Their examples,
release manifests and instructional content are preserved. Shared navigation may
be refreshed; published lesson content and assets must not be overwritten.

Release binaries are assets on this public repository, not the private language
repository. Each manifest records the exact source revision, CI run, checksums
and validation. Do not change an existing release asset in place.

## Prepare a release

Merge the implementation into the source repository's `main` branch, then bump
its release version before publishing the new tutorial. Build and validate the
release from that exact source revision. Match the tutorial, source, CLI tools,
VS Code extension, specification and release manifest to that revision. Keep
actual platform validation distinct from checks not yet run.

Stage a directory outside this checkout with `index.html`, `manifest.json`,
`preview.css` and `learn/`. Write the matching release downloads and checksums in
its manifest and download page. Render the tutorial from the extracted starter's
`learn/` directory, supplying the staged manifest explicitly:

```sh
node scripts/render-learn.cjs /path/to/extracted/learn /path/to/node_modules/markdown-it /path/to/source/docs/spec/theme /path/to/staged/preview/learn /path/to/staged/preview/manifest.json
```

The renderer traverses every lesson and copies every supporting file, including
`examples/` and `packages/`. It imports the specification's shared
`highlighting/render.cjs`: VarioHyve has its own grammar and Java retains the
bundled Java grammar. Generated highlighting uses the deployed mdBook palette
and `theme/vh.css`. `learn.css` is carried into a new output directory. Local
links labelled `Download filename.vh` or `Download filename.java` become download
buttons. The renderer does not change `spec/`.

Promote the staged release locally after validation:

```sh
python3 scripts/stage-preview.py promote --release /path/to/staged/preview --source-repository /path/to/variohyve
python3 scripts/check-preview.py --learn /path/to/extracted/learn --assets /path/to/release-assets
python3 -m unittest discover -s tests -p 'test_*.py'
node --test tests/version-selector.test.cjs
```

Promotion verifies that the pinned source commit is on `main` and contains the
bumped version, refuses an existing version, saves the new snapshot and makes it
the default. It does not commit, push, upload assets or publish a release. Review
the generated pages in a browser, commit the coherent update, and publish the
matching assets and Pages update. Preserve benchmark reports and unrelated files.

## Historical releases and maintenance

An existing published release can be recovered once from a full public-site
revision. Archive the current release before replacing it:

```sh
python3 scripts/stage-preview.py archive --revision <public-site-commit>
python3 scripts/stage-preview.py refresh
python3 scripts/check-preview.py
```

`refresh` updates the version index and shared navigation. The checker validates
links for the default and every archived version. Add `--version 0.1.0 --learn
/path/to/old/learn --assets /path/to/old/assets` to compare a historical tutorial
and its downloads with the corresponding release. Without `--learn`, only site
structure and links are checked; no source comparison is claimed.

Only when reproducing the original v0.1.0 tutorial from its starter, first apply
`scripts/learn-v0.1.0-inline.patch` inside the extracted `learn/` directory. The
patch adds inline examples and download links without changing its API or
example files. Check before applying; an already patched tutorial needs no patch.
