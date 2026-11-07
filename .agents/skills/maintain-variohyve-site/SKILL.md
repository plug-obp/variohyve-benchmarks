---
name: maintain-variohyve-site
description: "Maintain the variohyve-benchmarks public site: versioned previews and tutorials, public release packaging and downloads, benchmark dashboards and history, and published specification HTML/PDF. Use for work in this repository or publication from the VarioHyve source repository."
---

# Maintain the VarioHyve public site

Find the checkout whose remote is `plug-obp/variohyve-benchmarks`; it normally
publishes from `gh-pages`. The sibling `variohyve` repository owns the language
and most content sources. Confirm their paths, branches and local changes before
working. Paths below are relative to the named repository, not this installed
skill. Read only the guides relevant to the requested work.

| Work | Authoritative source | Site output / guide |
|---|---|---|
| Preview and tutorials | Source `docs/Learn VarioHyve/`, `vh-packaging/`, release archives | Site `preview/README.md`, `scripts/render-learn.cjs`, `scripts/render-reference.cjs`, `scripts/stage-preview.py` |
| Benchmarks | Source `vh-benchmarks/README.md`, `docs/benchmarks/README.md`, `scripts/README.md`, `.github/workflows/benchmark.yml` | Site root `README.md`, `dev/bench/` |
| Specification | Source `docs/README.md`, `docs/spec/src/SUMMARY.md`, `docs/spec/highlighting/README.md`, `docs/spec/build-pdf.sh` | Site `spec/` |

## Preview and tutorial work

For a new public release or distribution audit, read
[the release checklist](references/public-release.md). It covers assembled ZIPs
and VSIX, version identity, validation evidence and verification after publication.
For a website-only edit, use the relevant checks below without expanding it into
a full release. Site `PUBLICATION.md` records the audit outcomes; current commands
and manifest fields live in `preview/README.md`.

Learn VarioHyve is a beginner course with a welcoming promotional purpose. Keep
its learning curve smooth: small runnable successes, concrete benefits, then one
new idea at a time. Demonstrate composition through useful components and simple
provider substitution. Do not make tricky publication conflicts, shadowed setters
or failure-replay edge cases prerequisites for understanding the language's value.
Put advanced consequences in the reference/specification and link them optionally.
Keep claims concrete and link hero examples to complete reproducible projects,
including the provider configuration that produces the advertised answer.

Follow site `preview/README.md` for commands, manifests and version conventions.
Distinguish a new software release from an explicitly requested tutorial
correction:

- New release: merge source implementation into `main`, bump the version, pin
  the tag, and build from that exact revision before publishing its tutorial.
  Render from the extracted archive and use `stage-preview.py promote` to retain
  earlier versions and select the new default.
- Tutorial correction: fix the source Markdown and downloadable files first.
  Record the correction's full source commit under `tutorial_revision` in the
  selected version's site manifest and, if it is the default, the latest manifest.
  Re-render the affected tutorials;
  retain the runtime release identity, binary assets and original validation
  evidence. A website-only documentation correction does not require replacing
  binaries.
  If correcting documentation inside a ZIP or VSIX, publish new versioned assets
  with new hashes rather than replacing an existing release.

Keep complete source files inline with a Download button on the lesson using
them. `<!-- example-file: path -->` paths start at the Learn root; their fenced
contents must exactly match the download, including its final newline. Legacy
`example` markers permit checked excerpts relative to `examples/`. JSON launch
files and Markdown contracts are downloads too: a README download must return
raw Markdown, not its HTML page. Complete recipe projects live in `projects/`,
outside the original executable `examples/` manifest.

Maintain Next links between every chapter in that version's index. Check the
version selector's same-chapter behavior and fallback when an older version
lacks the chapter. Render through the shared specification highlighter. Use the
public reference renderer for packaging guides, changelogs and release evidence;
preserve anchors when mapping source links to public URLs. Generate the homepage
and shared specification navigation with `scripts/render-site.py` from the current
manifest (also invoked by preview staging), including the current PDF destination.
Do not hand-edit generated lesson HTML.

Useful checks (run from the indicated repository):

```sh
# Source
python3 scripts/check-learn.py --source-only
python3 scripts/check-docs.py
# Site; use the tutorial's recorded source revision and actual download assets
python3 scripts/check-preview.py --learn /path/to/learn --assets /path/to/assets
python3 scripts/check-site.py
python3 -m unittest discover -s tests -p 'test_*.py'
node --test tests/*.test.cjs
```

Use `check-learn.py --help` for installed distribution checks. Exercise changed
examples from extracted published tools outside the checkout. Verify navigation,
code rendering and actual file downloads in a browser, then check the live site
after publication. If browser access is unavailable, record that visual review
was not performed; HTTP and structural checks do not replace it. Keep prior
versions' instructional content intact unless the user's correction includes them;
shared navigation may be refreshed.

Release manifests must describe the actual bytes, source revision and validation.
Separate passing tests from failed artifact uploads and unrun platform checks.
Follow the guide's local-build provenance fields if CI assets are unavailable;
do not label local builds as CI artifacts. Published binaries and checksums are
immutable. Respect any user-accepted validation limitation without inventing a
pass or repeatedly retrying a billing/quota failure. Release work does not itself
authorize artifact deletion, billing changes or repository visibility changes.

## Benchmark work

Edit dashboard sources in source `scripts/benchmark-dashboard/`, then use the
documented publication path. Inspect `scripts/publish-test-report.py` before
running it: it resets its results checkout to the fetched branch, changes its
Git identity configuration, commits and pushes. Give it a disposable results
checkout, never the shared site checkout containing work or user changes. Do not
treat it as a local renderer. Presentation-only changes can copy the dashboard
assets and preserve existing measurement files; they do not require a new
benchmark run or a fabricated report.

Keep prepared-runtime payload, runtime initialization and fresh-world-plus-payload
histories separate. Untagged historical measurements remain fresh-world results.
Never subtract initialization timings from payload scores or relabel old records
to populate a new series. Timing scope, batch size, workload parameters and GC
profile define comparable histories; preserve runtime, JDK and source provenance.
Check the comparison model when altering filters, ratios or aggregation. Preserve
raw reports and samples; update presentation without silently rewriting evidence.

Show the downloadable release revision separately from the latest measured
revision, and say when no exact-release measurement exists. Keep JUnit report
revision and module scope visible too. Carry material conditions such as
“GraalPy, guest JIT off” into tables, ratios, legends and exports. Show available
sample counts and batch/iteration-mean spread with central estimates; observed
ranges are not confidence intervals or individual-operation latency distributions.
Use modest ratio precision and avoid ranking near-parity results without an
analysis that respects forks and batches.

The dashboard loads a summary index and selected recent/full workload history on
demand. Regenerate those derived files with source
`scripts/benchmark-dashboard/build-history.cjs <site>/dev/bench` when measurement
data changes; the publication pipeline invokes it. Preserve original archives as
explicit downloads. Check initial loading, filter changes, empty results and
loading older history when changing the loader; do not restore eager raw-history
loading just to simplify a view.

## Specification work

Edit source `docs/spec/src/` and shared theme/highlighting, then build mdBook HTML
and the dated PDF from the intended source revision. Source `docs/README.md`
routes semantic edits to guardrails and executable specification tests. A site
publication alone must not change language semantics to make an example pass.

The PDF pipeline uses `prepare-pdf.py`, the shared Node highlighter, Pandoc and
XeLaTeX. Inspect rendered PDF pages, especially code, tables and chapter breaks;
successful compilation alone does not establish readable output. Build in a
temporary export or preserve historical PDFs before mdBook clears `book/`.
Keep historical dated PDFs in the site. An unchanged PDF may be retained only
when specification inputs are proven identical, with its original source revision,
hash and input-equality evidence recorded in the manifest. Do not claim a fresh
build or visual review. Changed inputs require a newly identified PDF; avoid
silently overwriting a dated filename during a second release on the same day.
Use site `scripts/publish-spec.py` for publication and source-only link mapping.
Check local links and fragments; source-only destinations must become appropriate
public references or pinned GitHub source URLs with private-access limits stated.

## Commit and publish

Use small coherent commits and preserve unrelated local changes. Benchmark
automation can push to `gh-pages` while you work: fetch and integrate those
reports before pushing, without force-pushing history. Continue within existing
user authorization; this skill adds no separate approval gate. When publication
is in scope, inspect the Pages result and live URLs before calling it complete.

The canonical skill is site `.agents/skills/maintain-variohyve-site/`. If changing
the skill, update that copy and synchronize any installed copy; validate with
the skill-creator validator when available.
