# Learn course consolidation — 0.6.4

The 17 November 2026 release gives Learn VarioHyve consecutive numbering and a
shorter, more welcoming index. Source tag `v0.6.4` pins
`a5373379d438681a7dcee2c4363875820ecc32d6` on `main`. The release integrates only
the tutorial work onto the existing main branch; separate later proof-branch
work is outside this release.

Lessons 1–6 establish a first milestone. Lessons 7–12 build a receipt, stock list,
reorder report and reusable formatter, then connect and test collaborating
objects. Java integration and packaging are optional lessons 13–16. Each path
returns to the index. Four published chapter URLs forward to their new numbers,
and version selection matches chapter topics across numbering changes. Older
instructional content and binary assets are preserved.

The [0.6.4 manifest](preview/versions/0.6.4/manifest.json) records exact artifact
hashes, source identity, commands and platform scope. Validation includes:

- All 1,644 Java tests, 78 extension tests, standalone bootstrap checks and the
  strict assembled ZIP/VSIX documentation and version gate.
- All 22 course cases, 15 native deployment checks and 23 custom-Alien checks
  against extracted archives on macOS arm64 and Linux arm64.
- Ten suggested lesson edits with exact expected output, and 37 isolated
  installed-editor checks in VS Code 1.90 on Linux arm64.
- The full Lean checker, including module structure, proof audits, negative-audit
  regressions and inventory regressions. Main already contained proof changes
  since 0.6.3, so the previous release's Lean results were not reused.
- Eight tutorial versions, 192 preview pages, 16 chapter transitions, exact
  code/download matching and 16 public help destinations from the built artifacts.
  Site regressions cover old URLs and version switching in both directions.

Downloads are local builds from the exact tag. Each OS-named ZIP is explicitly a
byte-identical alias of a universal Java archive. Hosted CI ran no validation
steps: payment/spending limits blocked Linux, Windows and Lean; the macOS runner
configuration was unsupported. Windows and x86_64 execution, the macOS installed
editor, and browser visual review were not performed. Browser access is disabled
in Work settings; HTTP and structural checks are recorded separately.

Specification HTML is rebuilt from the tag. The existing PDF retains its
original bytes, source revision and visual-review evidence: `git diff v0.6.0
v0.6.4 -- docs/spec` is empty. No new PDF build or visual inspection is claimed.

---

# Public preview review follow-up — 0.6.3

The follow-up review keeps Learn VarioHyve focused on small, rewarding programs.
The source release is `v0.6.3`, commit
`873bd8bb0f302e5e82c651bdeaa0bd1c36efa147`.

| Finding | Resolution |
|---|---|
| Generated applications omitted runtime notices | `RuntimeIngredients.vh` now declares `THIRD-PARTY.md` and dependency license files. The manifest admits the root notice; distribution assembly preserves its exact bytes. Native and custom-Alien relocation checks verify contents, inventory pins and rejection of changed notice bytes. |
| Homepage card suggested a first lesson but opened the component demo | Renamed to “See components working together”; the primary learning action still starts the course. |
| Notebook metaphor suggested stored history | Lesson 11 says the component numbers each result; the program remains small and unchanged. |
| Later topics looked mandatory | Lessons 1–6 mark a first milestone. Optional routes cover components, Java integration and packaging without renumbering the course. Lesson 11 welcomes readers after objects and tests. |
| Reference opened with deep rules | Common editing questions come first, with the precise rules retained below. |
| Suggested beginner edits needed predictable results | Changing wording, adding a fourth review and supplying a fresh notebook were run against the released starter and matched expected output. |
| Starter root README bypassed release URL rewriting | Its build filter now uses the shared release-link generator. The assembled-distribution gate checks the root README as well as the remaining archive documentation. |

The source-only v0.6.2 candidate failed the assembled-documentation gate before
public promotion. Its existing source tag is preserved; no v0.6.2 download
release was published. v0.6.3 contains the completed corrections.

The [0.6.3 manifest](preview/versions/0.6.3/manifest.json) records exact bytes, commands and
platform scope. Local validation is separate from hosted CI, which again ran no
validation steps because of billing and runner configuration failures. Browser
access remains disabled. The specification PDF is retained with its original
source and hash after verifying unchanged inputs; unchanged Lean development
retains its historical evidence without claiming a fresh build.

The maintained release skill now covers generated-deployment notices as well as
the producing archives, candidate checks before tagging, predictable beginner
exercises, optional learning paths and labels that match their destinations.

---

# Previous consolidation — 0.6.1

The 7 November 2026 public-preview review was addressed through a new patch
release. The runtime tag is `v0.6.1`, source
`8232f4876b00485e56ef457f62b2016154a538d1`. Prior binary assets and measurement
records remain unchanged.

| Finding | Resolution |
|---|---|
| Packaging walkthrough linked 0.3.2 | Source link corrected; build-time release metadata rewrites guide destinations; assembled-archive gate rejects wrong-version help links. |
| Extension help/support was private | Versioned public tutorial, packaging and changelog destinations, public homepage/issues, generated installed README; contributor source is separately labelled access-limited. |
| Starter Markdown assumed a checkout | Publication mapping runs during distribution assembly; actual ZIP/VSIX relative links are checked. |
| Homepage version and PDF drifted | Homepage and specification navigation are generated from the current manifest, including the current PDF destination. |
| Starter lacked usage terms and a first step | Root README, project license and upstream dependency notices included; VSIX includes resolved JavaScript license texts. |
| Lesson 7 used obsolete constructor prose | Corrected to brackets; a regression rejects that obsolete declaration in packaged Markdown. |
| Java requirements/startup | JDK 23 minimum distinguished from tested versions; generated POSIX/Windows launchers check Java before application class loading. Windows execution remains unvalidated. |
| Purpose and learning curve | Added a small, progressive review-desk lesson with a replaceable checker and a shared notebook; linked the complete hero example. Advanced wiring/failure and surprising lookup exercises were deliberately kept out of the beginner course at the owner's request. |
| Proof evidence and shipped runtimes | Public evidence summary plus five exact theorem declarations with premises, namespaces, toolchain and source hashes. Java downloads and separately maintained Lean development are clearly distinguished. Full independent proof replay remains access-limited. |
| Benchmark interpretation | Release/measured revision status, scoped JUnit wording, consistent guest-JIT qualification, sample counts/ranges and reduced ratio precision. No near-parity ranking or new benchmark measurement claimed. |
| Eager history loading | Derived summary first, selected recent/full workload history on demand, raw archive fetched only on explicit download. Original measurement bytes retained. |

The source release also synchronizes `ListConstruction.consSource` with the
already implemented `Cons.match` method, discovered by the release's full Lean
check. This restores exact source-declaration alignment without weakening a
proof or changing runtime behavior.

That release's validation is recorded in [its manifest](preview/versions/0.6.1/manifest.json), with
commands, hashes and platform scope. Hosted CI performed no validation steps;
local checks are not labelled as CI artifacts. Browser review is unavailable
because local browser access is disabled. Automated site checks cover links,
fragments, release identity, selectors, exact tutorial code and downloads.

## Repeatable publication checks

```sh
python3 scripts/stage-preview.py refresh
python3 scripts/check-preview.py --learn /path/to/extracted/learn --assets /path/to/assets
python3 scripts/check-site.py
python3 -m unittest discover -s tests -p 'test_*.py'
node --test tests/*.test.cjs
```

Regenerate the benchmark summary after any measurement update with the source
repository's `scripts/benchmark-dashboard/build-history.cjs`; the normal report
publisher already does this. Build the mdBook from the pinned source, then use
`scripts/publish-spec.py` for source-only link mapping and `render-site.py` for
project navigation. Neither transformation changes specification semantics.
