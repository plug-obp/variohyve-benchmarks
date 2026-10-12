# Changelog

User-visible changes to the public VarioHyve preview. Preview versions may change
the Java embedding API. Java 23 is required and is not bundled.

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
