# VarioHyve public site

Public preview downloads, language specification and performance history for
VarioHyve, served from the `gh-pages` branch.

- [Public preview](https://obpcdl.org/variohyve-benchmarks/preview/)
- [Learn VarioHyve — latest](https://obpcdl.org/variohyve-benchmarks/preview/learn/)
- [All tutorial versions](https://obpcdl.org/variohyve-benchmarks/preview/versions.html)
- [Performance dashboard](https://obpcdl.org/variohyve-benchmarks/dev/bench/)
- [Language specification](https://obpcdl.org/variohyve-benchmarks/spec/)

Preview installers are public GitHub release assets. See
[preview maintenance](preview/README.md) for the manifest and tutorial rendering.
The [site maintenance skill](.agents/skills/maintain-variohyve-site/SKILL.md)
routes preview, benchmark and specification work to their sources and checks.

The [0.6.1 publication record](PUBLICATION.md) maps the public audit findings to
fixes, validation and remaining access/platform limits.

The performance dashboard separates four timing scopes:

- **Native sessions** compares warmed Java/Lean/CPython/GraalPy session batches,
  including the declared guest, transport, handles and GC costs. It is separate
  from JMH and does not measure isolated VM instructions.

- **Payload · prepared runtime** is the primary JMH series for new measurements. A
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

The dashboard defaults to native sessions when available, then prepared-runtime
payloads, then the existing fresh-world history. Initialization and
fresh-world controls remain selectable. Original archives and sample records are
preserved; the raw download includes both. UI sources are maintained in the
VarioHyve source repository under `scripts/benchmark-dashboard/` and copied here
by report publication.

The project homepage is generated from `preview/manifest.json` and
[its template](templates/home.html) by `python3 scripts/render-site.py`.
Promotion and refresh regenerate it together with specification navigation,
so version and PDF destinations cannot drift independently.
