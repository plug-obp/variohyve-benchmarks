# Public release checks

Read for a new VarioHyve release or an audit of its downloadable distributions.
Use the source module guides and site `preview/README.md` for current build and
staging commands. This checklist adds the cross-artifact invariants that a normal
broken-link checker or source test suite cannot establish.

## Build one identifiable release

Pin the release's source revision before building distributable bytes. Check the
repository's tag/version validation and build using the release tag context:
ordinary branch CI may intentionally produce development-suffixed JARs. Bump a
patch version for fixes to already published ZIPs or VSIX; keep old tags, assets
and checksums unchanged. Update project versions deliberately, including package
root metadata, without replacing coincidentally equal dependency versions in
lockfiles.

Track runtime source, documentation source, validation harness and benchmark
revision separately. A later harness fix can validate the same exact artifact,
but does not move its release tag or change its runtime revision. If a
website-only tutorial correction is requested, use `tutorial_revision` as the
site guide describes and retain original binary evidence.

Render Learn pages from the extracted release starter, where links have already
been adapted for distribution. Render public reference pages from the recorded
source revision. Use preview staging and `render-site.py` to make the current
homepage, preview, specification navigation and PDF agree with the manifest.
Archived pages should identify their release and offer a route to current help.

## Inspect the assembled user journey

Run the source checker against all three assembled distribution types:

```sh
python3 scripts/check-public-distribution.py --version VERSION starter.zip packaging.zip extension.vsix
```

The release gate is strict. `--allow-development-build` is for branch CI only;
it permits a matching base version with a development suffix. Do not use it to
accept development runtime JARs into a tagged release. The checker is a baseline,
not a substitute for inspecting newly introduced files and destinations.

| Invariant | Evidence to inspect |
|---|---|
| Version agreement | Page labels, download URLs, lesson examples, runtime JARs, VSIX version and manifest. An old-version link can return HTTP 200 and still be wrong. |
| Public installed help | The VSIX's actual Details README and generated homepage, Learn, Get started and Support metadata. Tutorial/packaging/changelog destinations should be public and version-pinned; support should use the public issue tracker. |
| Self-contained documentation | Extracted Markdown links resolve within the archive or to appropriate public pages. Source-tree siblings absent from the archive are not valid targets. Check fragments and raw Markdown/JSON/source downloads too. |
| Distribution essentials | A root quick-start README, project license and appropriate dependency notices/licenses in starter, packaging tools and extension. Account for bundled production dependencies, including extension JavaScript dependencies. |
| Current syntax | Execute listed examples and inspect designated inline declarations in prose. A runnable code block does not validate obsolete syntax in its explanation. |
| Java requirements | One minimum JDK requirement, separately named tested versions and platforms, and actionable launcher diagnostics explaining `JAVA_HOME` before incompatible bytecode loads. |

Fix transformations at their source: source `gradle/public-distribution.gradle`
handles distribution Markdown, and `vh-lsp-vscode/scripts/bundle-server.js`
assembles extension help and notices. Do not patch only generated site HTML or
only the source README while leaving installed help unchanged. Private contributor
links may remain when clearly labelled and pinned; they must not be the ordinary
beginner support route.

Exercise the actual starter, packaging archive and VSIX outside the source tree.
Use the existing harnesses rather than recreating checks:

- `scripts/check-starter-package.py`: extracted tutorial journey.
- `vh-packaging/scripts/check-user-journey.py`, also with `--custom-alien`:
  authored application, intentional failure, packaging and relocated deployment.
- `vh-lsp-vscode/scripts/smoke-vsix.js`: installed editor journey against the
  exact VSIX, including the extension's minimum supported VS Code version.

Consult `--help` and the module guide for archive/JDK options and prerequisites.
Retain paths-with-spaces coverage and the test that deployment runs after the
producing tools/project are unavailable. Run required source validation for the
changes as well; extracted-archive checks complement the full project suite.
Investigate proof/source disagreements through the semantic workflow rather than
weakening a proof or test to obtain a release pass.

## Report only the evidence obtained

The manifest should distinguish:

- Exact artifact hashes and runtime source from a separate test harness revision.
- Local builds from CI-produced artifacts, and checks that passed from checks that
  never ran. Inspect failed-job steps and annotations to distinguish a test failure
  from billing, runner provisioning or upload failure.
- CLI validation from editor validation, with OS, architecture, JDK and editor
  versions. A universal Java archive copied under platform-specific filenames is
  an alias, not an independently built or validated platform distribution.
- Downloadable Java runtime/tools from the separate Lean implementation and proof
  development. Do not imply that a Lean binary ships unless one is provided.

Put a compact platform status near downloads. Preserve known limitations without
turning unrun checks into passes; do not repeatedly retry a known quota failure.

For public proof evidence, render the release-pinned statements, premises,
coverage boundaries, source hashes, toolchain and validation commands through the
public reference pipeline. Identify private source access and open obligations.
Statements and logs improve traceability but do not enable independent proof
replay by themselves. Do not describe Java test/differential coverage as formal
refinement of Java or extend native proofs to arbitrary foreign libraries.

When using a container for platform checks, verify its filesystem actually
contains the intended source and exact artifacts before accepting the result.
Some Docker contexts do not share host temporary directories; a successful exit
with an empty bind mount is not evidence. If necessary, use `docker cp` into a
named disposable container, pass only required files, inspect test counts and
reports, and remove only task-owned containers. Keep credentials out of the
validation environment. Do not infer x86 validation from an ARM container.

## Publish and verify the public bytes

Use the existing authorization for publication; this checklist grants none by
itself. Keep private source tags and public download-repository tags distinct.
Preserve concurrent benchmark reports when integrating the site branch.

Before publication, run the relevant source and site checks listed in `SKILL.md`,
including `check-preview.py --learn ... --assets ...` and `check-site.py`.
After publication:

1. Confirm Pages deployed the intended site commit, not merely that Git push
   succeeded.
2. Download the published release assets again and compare every published
   checksum with the validated local bytes.
3. Check the live homepage, default and versioned manifests, tutorial, packaging
   guide, changelog, specification/PDF and public support routes. Confirm both
   release identity and link reachability.
4. Fetch representative raw lesson/source/JSON downloads and lazy dashboard
   history resources. Verify payloads rather than accepting a successful HTML
   fallback page as the intended download.
5. Inspect the user journey in an available browser. Report any unavailable
   visual or platform checks explicitly alongside actual successful checks.

For changed dashboard measurements, retain distinct release/measured revisions,
regenerate derived history files and preserve original reports; see the benchmark
section of `SKILL.md`. A presentation release does not require inventing an
exact-release benchmark run.
