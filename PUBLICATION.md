# Public preview consolidation — 0.6.1

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

Current validation is recorded in [the manifest](preview/manifest.json), with
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
