# VarioHyve public site

Public preview downloads, language specification and performance history for
VarioHyve, served from the `gh-pages` branch.

- [First public preview](https://obpcdl.org/variohyve-benchmarks/preview/)
- [Learn VarioHyve](https://obpcdl.org/variohyve-benchmarks/preview/learn/)
- [Performance dashboard](https://obpcdl.org/variohyve-benchmarks/dev/bench/)
- [Language specification](https://obpcdl.org/variohyve-benchmarks/spec/)

Preview installers are public GitHub release assets. See
[preview maintenance](preview/README.md) for the manifest and tutorial rendering.

The performance dashboard separates three timing scopes:

- **Payload · prepared runtime** is the primary series for new measurements. A
  fresh independent runtime is prepared outside the timer for each payload and
  used once. The timed work includes workload class/object construction,
  execution, boundary calls, correctness checks and execution-time GC. Parsing,
  warmup, seed construction/installation, initialization GC, platform assembly
  and VM creation are excluded.
- **Runtime initialization** keeps warmed world/VM setup visible as independent
  diagnostics. JVM/process startup is outside all JMH timings.
- **Fresh world + payload** preserves the original complete-workload history and
  new controls. Old untagged records belong here; they are never reclassified as
  prepared-runtime measurements.

Prepared payloads are timed in batches (256 for core workloads, 16 for recursion)
using independent worlds to amortize clock overhead without retaining exports
across repeated executions. Scores are normalized per payload operation. Timing
scope, batch size, workload parameters and GC profile define separate histories;
the new methodology starts a new baseline. Initialization scores are never
subtracted from payload or full-workload scores. Setup allocation can still
influence GC and caches, and allocation-profiler values are not payload-only
allocation figures. Python context/interpreter initialization is already outside
its workload timer.

The dashboard defaults to prepared-runtime payloads once published measurements
exist, and otherwise shows the existing fresh-world history. Initialization and
fresh-world controls remain selectable. Original archives and sample records are
preserved; the raw download includes both. UI sources are maintained in the
VarioHyve source repository under `scripts/benchmark-dashboard/` and copied here
by report publication.
