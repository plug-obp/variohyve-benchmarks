/* Shared by the browser and dependency-free Node regression checks. */
(function (root) {
  'use strict';
  const GC = {nativeGc: 'tracing', nativeHeapCapacity: '16384', nativeGcThreshold: '0.75'};
  const TIMING_SCOPES = {
    'prepared-runtime-v1': 'Payload · prepared runtime',
    'runtime-setup-v1': 'Runtime initialization',
    'fresh-world-v1': 'Fresh world + payload'
  };
  const positive = value => Number.isFinite(value) && value > 0;
  const paramsKey = params => Object.entries(params).sort(([a], [b]) => a.localeCompare(b)).map(([k,v]) => `${k}=${v}`).join(', ');
  const keyOf = (name, params, profile, timingScope = 'fresh-world-v1', batchSize = null) => `${timingScope}|batch=${batchSize ?? 'none'}|${profile}|${name}|${paramsKey(params)}`;
  const timingScopeOf = scope => scope === undefined ? 'fresh-world-v1' : Object.hasOwn(TIMING_SCOPES, scope) ? scope : null;
  const batchSizeOf = value => Number.isInteger(Number(value)) && Number(value) > 0 ? Number(value) : null;
  const defaultTimingScope = cases => ['prepared-runtime-v1','fresh-world-v1','runtime-setup-v1'].find(scope => cases.some(c => c.timingScope === scope && c.runs.length)) || 'prepared-runtime-v1';
  function profileOf(params) {
    const fields = Object.keys(GC).filter(k => k in params);
    if (!fields.length) return 'legacy';
    return Object.entries(GC).every(([k,v]) => String(params[k]) === v) ? 'tracing' : `other: ${paramsKey(Object.fromEntries(fields.map(k => [k, params[k]])))}`;
  }
  function workloadParams(params) {
    return Object.fromEntries(Object.entries(params).filter(([key]) => !Object.hasOwn(GC, key) && !['timingScope','payloadBatchSize'].includes(key)));
  }
  function normalize(data, richRuns = []) {
    const cases = new Map();
    function getCase(name, params, profile, timingScope, batchSize = null) {
      const key = keyOf(name, params, profile, timingScope, batchSize);
      const details = [paramsKey(params), batchSize ? `batch=${batchSize}` : ''].filter(Boolean).join(' · ');
      if (!cases.has(key)) cases.set(key, {key, name, params, profile, timingScope, batchSize,
        family: timingScope === 'runtime-setup-v1' ? 'setup' : ['literal','methodSend','closureSend'].includes(name) ? 'core' : ['manyArguments','mixinContributions','classContributions','receiverShapes'].includes(name) ? 'dispatch' : 'recursion',
        label: name + (details ? ` · ${details}` : ''), runs: []});
      return cases.get(key);
    }
    const ratios = [];
    for (const [group, entries] of Object.entries(data.entries || {})) {
      const branch = group.replace(/^VarioHyve \/ /, '');
      for (const entry of entries) {
        const base = {branch, commit: entry.commit, date: Number(entry.date), id: `${branch}:${entry.commit.id}:${entry.date}`, legacy: true};
        for (const bench of entry.benches || []) {
          if (entry.tool === 'jmh' && bench.unit === 'us/op' && positive(bench.value)) {
            const match = bench.name.match(/^vh\.benchmarks\.(PreparedVisitorSemanticsBenchmark|PreparedRecursionBenchmark|PreparedDispatchBenchmark|VisitorSemanticsBenchmark|RecursionBenchmark)\.(\w+)(?: \( (\{.*\}) \))?$/);
            if (!match) continue;
            let params;
            try { params = match[3] ? JSON.parse(match[3]) : {}; } catch { continue; }
            const prepared = match[1].startsWith('Prepared');
            const timingScope = timingScopeOf(params.timingScope);
            const batchSize = prepared ? batchSizeOf(params.payloadBatchSize) : null;
            // New classes must declare their timing boundary and batch. Old,
            // untagged archives always mean fresh-world execution.
            if (timingScope !== (prepared ? 'prepared-runtime-v1' : 'fresh-world-v1') || (prepared && !batchSize)) continue;
            const profile = profileOf(params);
            getCase(match[2], workloadParams(params), profile, timingScope, batchSize).runs.push({...base, timingScope, batchSize,
              runtimes: {VarioHyve: {mean: bench.value, extra: bench.extra, recordedRange: bench.range}}, ratios: {}});
          } else if (entry.tool === 'customSmallerIsBetter') ratios.push({base, bench});
        }
      }
    }
    for (const {base, bench} of ratios) {
      const match = bench.name.match(/^VarioHyve(\+GC)?( prepared)? \/ (CPython|GraalPy no guest JIT) \| (\w+)(?: \((.*)\))?$/);
      if (!match || !positive(bench.value)) continue;
      const values = (bench.extra || '').match(/^VarioHyve(?:\+GC)?(?: prepared)? ([\d.eE+-]+) us\/op; CPython ([\d.eE+-]+) us\/op .*; GraalPy ([\d.eE+-]+) us\/op /);
      if (!values) continue;
      const means = values.slice(1).map(Number);
      if (!means.every(positive)) continue;
      const params = Object.fromEntries((match[5] || '').split(', ').filter(Boolean).map(p => p.split('=')));
      const timingScope = match[2] ? 'prepared-runtime-v1' : 'fresh-world-v1';
      const batchSize = match[2] ? batchSizeOf(params.payloadBatchSize) : null;
      if ((match[2] && !batchSize) || (params.timingScope !== undefined && params.timingScope !== timingScope)) continue;
      const scenario = getCase(match[4], workloadParams(params), match[1] ? 'tracing' : 'legacy', timingScope, batchSize);
      // Pair only with the same scope, batch, branch, revision and rounded VH
      // score. Reruns stay separate; date proximity chooses among equal scores.
      const candidates = scenario.runs.filter(r => r.branch === base.branch && r.commit.id === base.commit.id && Math.abs(r.runtimes.VarioHyve.mean - means[0]) <= .000501);
      candidates.sort((a,b) => Math.abs(a.date-base.date) - Math.abs(b.date-base.date));
      let run = candidates[0];
      if (!run) {
        run = {...base, timingScope, batchSize, runtimes: {VarioHyve: {mean: means[0], approximate: true}}, ratios: {}};
        scenario.runs.push(run);
      }
      for (const [i, label] of ['CPython', 'GraalPy'].entries()) run.runtimes[label] = {mean: means[i+1], approximate: true, extra: bench.extra};
      run.ratios[match[3] === 'CPython' ? 'CPython' : 'GraalPy'] = bench.value;
    }
    for (const rich of richRuns) {
      if (![1,2].includes(rich.schema) || !Number.isFinite(Date.parse(rich.date))
        || (rich.schema === 2 && rich.timing_scope === undefined) || !timingScopeOf(rich.timing_scope)) continue;
      const profile = profileOf(rich.native_gc || {});
      const rows = [
        ...(rich.cases || []).map(row => ({row, diagnostic: false, timingScope: timingScopeOf(rich.timing_scope)})),
        ...(rich.diagnostics || []).map(row => ({row, diagnostic: true, timingScope: ['runtime-setup-v1','fresh-world-v1'].includes(row.timing_scope) ? row.timing_scope : null}))
      ];
      for (const {row, diagnostic, timingScope} of rows) {
        if (!timingScope || !positive(row.runtimes?.VarioHyve?.mean)) continue;
        const batchSize = timingScope === 'prepared-runtime-v1' ? batchSizeOf(row.payload_batch_size ?? row.runtimes.VarioHyve.runtime?.payloadBatchSize) : null;
        if (timingScope === 'prepared-runtime-v1' && !batchSize) continue;
        const rowProfile = diagnostic && Object.hasOwn(row, 'native_gc')
          ? row.native_gc === null ? 'not-applicable' : profileOf(row.native_gc) : profile;
        const scenario = getCase(row.name, workloadParams(row.params || {}), rowProfile, timingScope, batchSize);
        const matches = scenario.runs.filter(r => r.legacy && r.branch === rich.branch && r.commit.id === rich.commit.id && Math.abs(r.runtimes.VarioHyve.mean - row.runtimes.VarioHyve.mean) < 1e-9);
        matches.sort((a,b) => Math.abs(a.date-Date.parse(rich.date)) - Math.abs(b.date-Date.parse(rich.date)));
        if (matches.length) scenario.runs.splice(scenario.runs.indexOf(matches[0]), 1);
        const runtimes = diagnostic || timingScope === 'runtime-setup-v1' ? {VarioHyve: row.runtimes.VarioHyve} : row.runtimes;
        const run = {id: rich.id, branch: rich.branch, commit: rich.commit, date: Date.parse(rich.date), run_url: rich.run_url,
          timingScope, batchSize, profile: rowProfile, runtimes, ratios: {}, legacy: false};
        for (const label of ['CPython','GraalPy']) if (positive(runtimes[label]?.mean)) run.ratios[label] = runtimes.VarioHyve.mean / runtimes[label].mean;
        scenario.runs.push(run);
      }
    }
    for (const scenario of cases.values()) scenario.runs.sort((a,b) => a.date-b.date || a.id.localeCompare(b.id));
    return [...cases.values()].sort((a,b) => a.label.localeCompare(b.label, undefined, {numeric:true}));
  }
  const api = {normalize, paramsKey, profileOf, keyOf, timingScopeOf, defaultTimingScope, TIMING_SCOPES};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.BenchmarkModel = api;
})(typeof window !== 'undefined' ? window : globalThis);
