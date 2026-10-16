# Changelog

User-visible changes to the public VarioHyve preview. Preview versions may change
the Java embedding API. Java 23 is required and is not bundled.

## 0.3.2 — 2026-10-16

Public release of the packaging changes below, with VS Code extension **0.4.0**.
Preserve source bytes across Windows checkouts so packaged native libraries
match their frozen provenance digests. The 0.3.0 and 0.3.1 validation candidates
were tagged but not publicly released.

## 0.3.1 — unpublished candidate, 2026-10-16

Packaging validation candidate with VS Code extension **0.4.0**.
The tagged 0.3.0 candidate was not published: Windows validation found test
assertions that assumed Unix line endings and unescaped JSON paths. Correct
those assertions and bound concurrent CI JVM work without changing runtime
behavior or relaxing test deadlines. Installed-user instructions now point to
public downloads.

## 0.3.0 — unpublished candidate, 2026-10-16

Merged native world packaging into `main` before this version bump. Ships with
VS Code extension **0.4.0** and separate starter and packaging archives.

- Construct development and deployment worlds through native recipes. Modules
  receive explicit dependencies; the host supplies bounded source access,
  classloading, stream grants and publication.
- Load independently packaged Alien realizers without registration. Declare JARs
  and resources with pinned digests, compose them natively, and deploy their
  captured bytes. RE2 and the small Learn kernel capabilities use this path.
- Ship the packaging tools and a native project template in the archive and VSIX.
  Run, test, package and launch a relocated deployment through CLI or VS Code.
  Tests report native assertion details and remain outside production packages.
- Ship a tiny native source package and the same `multiply/1` client for native
  and Alien dependencies. Extracted-archive checks cover both journeys without a
  checkout, build tools or credentials, plus direct embedding without sidecars.
- Select immutable execution step budgets before runtime entry. Launch and
  deployment metadata accept `execution.maxSteps`; native policy declares the
  deployment budget through `output.execution`. Nested imports/callbacks share
  the active budget; the default independent-entry limit remains 100000.
- Remove unused OBP3 dependencies and keep ANTLR generator dependencies out of
  installed runtimes. Document the GitHub Packages token needed for source builds.
- Apply conservative recipe editor help throughout marked projects; bind actual
  specification examples to stable IDs and publish a contract conformance map.
- Add two Learn chapters for custom worlds and native packages. Preserve earlier
  public tutorials with a version selector; the latest release is the default.

**Migration:** existing launch/deployment manifests remain valid without an
`execution` field. The project template now supplies a `multiply/1` capability
instead of the earlier example's `factor` object. This is template policy, not a
language-level API. Existing applications and recipes keep their own protocols.

## 0.2.0 — 2026-10-12

Includes the changes on `main` since `v0.1.0`. Ships with VS Code extension
**0.3.0** (the previous preview shipped extension 0.2.0).

### Foreign lifetimes and Java embedding

- Native arguments and callback results attach to the enclosing foreign
  invocation. Retaining them beyond that invocation requires declared detach
  permission and an explicitly acquired receipt.
- Independent native exports use `ExpatReceipt`: send through the receipt,
  `retain()` for an independent holder, and `close()` when finished. Closed
  receipts and expired attachments fail explicitly. Canonical Expat identity
  remains separate from each holder's lifetime.
- Native GC can reclaim unreachable Alien wrappers without identity caches
  retaining them permanently. Reimport preserves foreign identity and identity
  hashes. Releasing an adapter's hold does not close an unrelated foreign resource.
- Host lists and maps acquire receipts for retained native entries, release
  replaced entries, and provide explicit `close()`. Snapshot callbacks protect
  their entries until completion.
- Cross-boundary cycles remain legal and conservatively retained; this release
  does not provide automatic collection of arbitrary foreign/native cycles.

**Java migration:** keep module/evaluation results that are native references in
try-with-resources blocks and use their receipts for sends and transport. A saved
`VHExpat` alone is no longer a durable hold. Adapters storing native arguments must
declare `ForeignOperation.detachable(...)` and acquire a receipt with
`CallbackContext.detachArgument(...)` or `ForeignOperation.retainArgument(...)`
before storing them. Callback-result detachment has a separate permission.
Close each owned receipt when its use ends; compare `receipt.expat()` for canonical
identity. Scalar results such as Java numbers need no receipt. The bundled
embedding tutorial uses the updated API.

### Frontend and editor

- Shared UTF-16 source coordinates improve diagnostics, including Unicode,
  multiline text and individual cascade arms. Runtime source metadata is optional
  and remains separate from executable core trees.
- Descriptors are opaque, inert tooling text, with verbatim fences for arbitrary
  payloads. Method-header and trailing descriptors are supported and receive
  distinct metadata highlighting. Tools explicitly opt into interpreting them.
- Bounded, cancellable analysis coalesces editor updates and distinguishes
  incomplete analysis from invalid source. API help reports conditional evidence
  rather than promising dynamic message resolution.
- Improve literal and starter API help, untitled documents, assistance status,
  folding, selection ranges, server shutdown and restart.
- Fix Run/Test selection and cancellation races, stale runtime diagnostics,
  terminal navigation sequences and multiline input.
- Add **Evaluate Selection in Scratch** and **Evaluate Scratch**. These execute
  an independent expression in a fresh tooling context; they do not capture the
  original method's locals or resume a failed execution.
- Refresh the tutorial with inline, downloadable examples matching the runtime.
- Use the same VarioHyve and Java highlighting engine and token palette in the
  web specification, PDF specification and deployed tutorial.

### Runtime and packaging

- Finalize class definitions before publication and make initialization routes
  and member realization transitions explicit.
- Reuse complete layouts and selected contribution metadata, and lazily prepare
  reusable declaration/function metadata to reduce repeated runtime work and
  allocation. Performance depends on the workload; no universal speedup is claimed.
- Fix Windows starter CI failures caused by a five-second frontend deadline
  rejecting valid programs under load. Batch reads retain structural/work limits
  and cancellation without a wall-clock deadline; interactive reads retain theirs.
  Correct platform-specific paths in the extension test harness so Windows runs
  the same launch, cancellation and scratch regressions.
- Keep the extracted starter self-contained apart from its required JDK, and
  package the matching language server and runner in the extension.

## 0.1.0 — 2026-10-09

- First public preview: starter archives for macOS, Linux and Windows, and
  VS Code extension 0.2.0 with the matching runner and language server.
- JavaHostKernel console, scalar and collection protocols, SUnit, and explicit
  Run/Test/Stop commands.
- Eight tutorial lessons, executable examples and Java interoperability clients.

Downloads and per-release checksums:
[public preview releases](https://github.com/plug-obp/variohyve-benchmarks/releases).
