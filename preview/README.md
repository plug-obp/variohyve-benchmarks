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
`preview.css` and `learn/`. An optional `reference/` directory carries supplemental
public documents with that same version. Write the matching release downloads and checksums in
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
node --test tests/*.test.cjs
```

Promotion verifies that the pinned source commit is on `main`, contains the
bumped version and is exactly the release tag target. It refuses an existing
version, saves the new snapshot and makes it
the default. It does not commit, push, upload assets or publish a release. Review
the generated pages in a browser, commit the coherent update, and publish the
matching assets and Pages update. Preserve benchmark reports and unrelated files.

## Public conformance reference

Render the supplemental contract map directly from the tagged source, so local
source edits cannot enter the release:

```sh
node scripts/render-reference.cjs /path/to/variohyve FULL_SOURCE_COMMIT 0.3.0 /path/to/staged/preview/reference /path/to/node_modules/markdown-it
```

Promotion includes optional `reference/` content in the permanent versioned
snapshot and the latest default. The page names its release and full source
revision. Specification links point to the public book; tutorial links point to
that release's permanent tutorial. Code, tests and other source references link
to the exact source revision on GitHub, with an explicit private-access note.
After building the specification, map its generated conformance link to
`/variohyve-benchmarks/preview/versions/0.3.0/reference/conformance.html` for this
release. This is a publication URL transformation, not a change to tagged source.

## Release assets and evidence

Starting with v0.3.0, publish both starter and packaging distributions. The
`Starter slice` workflow produces one `variohyve-starter-<runner.os>` artifact per
platform containing both ZIPs and the VSIX. Extract these artifacts without
rebuilding or modifying their contents; renaming the outer download files is
fine. Use this public naming convention:

| Contents | Public filename | CI artifact |
|---|---|---|
| macOS starter | `variohyve-<version>-macos.zip` | `variohyve-starter-macOS` |
| Linux starter | `variohyve-<version>-linux.zip` | `variohyve-starter-Linux` |
| Windows starter | `variohyve-<version>-windows.zip` | `variohyve-starter-Windows` |
| macOS tools | `variohyve-packaging-<version>-macos.zip` | `variohyve-starter-macOS` |
| Linux tools | `variohyve-packaging-<version>-linux.zip` | `variohyve-starter-Linux` |
| Windows tools | `variohyve-packaging-<version>-windows.zip` | `variohyve-starter-Windows` |
| Universal extension | `vh-lsp-vscode-<extension-version>.vsix` | `variohyve-starter-Linux` |

The extension version is independent: preview v0.3.0 uses extension v0.4.0.
Include `SHA256SUMS.txt` alongside the seven binaries. Use the actual byte counts
and SHA-256 values of the renamed downloads in `manifest.json`; its `assets`
entries contain `name`, `kind` (`starter`, `packaging`, or `extension`),
`platform`, `bytes`, `sha256` and `ci_artifact`. Never copy an old release's hashes
or validation counts into a new record.

Other manifest fields follow the existing v0.2.0 record:

- `schema_version`, `name`, `version`, release `date`, `java_requirement` and
  `extension_version` identify the user-facing release.
- `source` contains the repository, visibility, tag and full source commit.
- `ci` contains the actual workflow run ID, event, ref, conclusion and one entry
  per platform. Record Java tests, extension tests, extracted starter checks,
  native and custom-Alien archive journeys, VSIX packaging and the real VSIX
  smoke result separately. A platform not smoke-tested must say so.
- `additional_validation` records any local rechecks and documentation evidence
  with their exact `source_commit`. Record the spec PDF path, size and SHA-256,
  rendered tutorial page count, source-excerpt checks and highlighting checks.
- `packaging` explains any outer-filename changes and which job supplied the
  universal VSIX.

The source tag, CI run head, packaged runtime and documentation must all resolve
to the same source revision. Build the specification HTML/PDF from that revision
and render the tutorial from its extracted starter. The current starter archive
contains the whole `learn/` tree, including native `packages/`; its checker
validates all marked excerpts and the original executable lessons. The separate
packaging journey checks execute the new native package and custom-Alien flows.
Run `check-preview.py --learn ... --assets ...` after promotion to validate every
local link, exact code excerpt and downloaded asset hash. The ordinary structure
check also covers all earlier versions. Finally, check the dropdown and matching
downloads in a browser before pushing the Pages commit.

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
