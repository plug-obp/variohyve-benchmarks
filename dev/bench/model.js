/* Shared by the browser and dependency-free Node regression checks. */
(function (root) {
  'use strict';
  const GC = {nativeGc: 'tracing', nativeHeapCapacity: '16384', nativeGcThreshold: '0.75'};
  const positive = value => Number.isFinite(value) && value > 0;
  const paramsKey = params => Object.entries(params).sort(([a], [b]) => a.localeCompare(b)).map(([k,v]) => `${k}=${v}`).join(', ');
  const keyOf = (name, params, profile) => `${profile}|${name}|${paramsKey(params)}`;
  function profileOf(params) {
    const fields = Object.keys(GC).filter(k => k in params);
    if (!fields.length) return 'legacy';
    return Object.entries(GC).every(([k,v]) => String(params[k]) === v) ? 'tracing' : `other: ${paramsKey(Object.fromEntries(fields.map(k => [k, params[k]])))}`;
  }
  function normalize(data, richRuns = []) {
    const cases = new Map();
    function getCase(name, params, profile) {
      const key = keyOf(name, params, profile);
      if (!cases.has(key)) cases.set(key, {key, name, params, profile, label: name + (Object.keys(params).length ? ` · ${paramsKey(params)}` : ''), runs: []});
      return cases.get(key);
    }
    const ratios = [];
    for (const [group, entries] of Object.entries(data.entries || {})) {
      const branch = group.replace(/^VarioHyve \/ /, '');
      for (const entry of entries) {
        const base = {branch, commit: entry.commit, date: Number(entry.date), id: `${branch}:${entry.commit.id}:${entry.date}`, legacy: true};
        for (const bench of entry.benches || []) {
          if (entry.tool === 'jmh' && bench.unit === 'us/op' && positive(bench.value)) {
            const match = bench.name.match(/^vh\.benchmarks\.(VisitorSemanticsBenchmark|RecursionBenchmark)\.(\w+)(?: \( (\{.*\}) \))?$/);
            if (!match) continue;
            let params;
            try { params = match[3] ? JSON.parse(match[3]) : {}; } catch { continue; }
            const profile = profileOf(params);
            for (const field of Object.keys(GC)) delete params[field];
            getCase(match[2], params, profile).runs.push({...base, runtimes: {VarioHyve: {mean: bench.value, extra: bench.extra, recordedRange: bench.range}}, ratios: {}});
          } else if (entry.tool === 'customSmallerIsBetter') ratios.push({base, bench});
        }
      }
    }
    for (const {base, bench} of ratios) {
      const match = bench.name.match(/^VarioHyve(\+GC)? \/ (CPython|GraalPy no guest JIT) \| (\w+)(?: \((.*)\))?$/);
      if (!match || !positive(bench.value)) continue;
      const values = (bench.extra || '').match(/^VarioHyve(?:\+GC)? ([\d.eE+-]+) us\/op; CPython ([\d.eE+-]+) us\/op .*; GraalPy ([\d.eE+-]+) us\/op /);
      if (!values) continue;
      const means = values.slice(1).map(Number);
      if (!means.every(positive)) continue;
      const params = Object.fromEntries((match[4] || '').split(', ').filter(Boolean).map(p => p.split('=')));
      const scenario = getCase(match[3], params, match[1] ? 'tracing' : 'legacy');
      // Pair only with the same branch, revision, and rounded VH score. Reruns
      // stay separate; proximity chooses among equal scores from the same SHA.
      const candidates = scenario.runs.filter(r => r.branch === base.branch && r.commit.id === base.commit.id && Math.abs(r.runtimes.VarioHyve.mean - means[0]) <= .000501);
      candidates.sort((a,b) => Math.abs(a.date-base.date) - Math.abs(b.date-base.date));
      let run = candidates[0];
      if (!run) {
        run = {...base, runtimes: {VarioHyve: {mean: means[0], approximate: true}}, ratios: {}};
        scenario.runs.push(run);
      }
      for (const [i, label] of ['CPython', 'GraalPy'].entries()) run.runtimes[label] = {mean: means[i+1], approximate: true, extra: bench.extra};
      run.ratios[match[2] === 'CPython' ? 'CPython' : 'GraalPy'] = bench.value;
    }
    for (const rich of richRuns) {
      if (rich.schema !== 1 || !Number.isFinite(Date.parse(rich.date))) continue;
      const profile = profileOf(rich.native_gc || {});
      for (const row of rich.cases) {
        if (!positive(row.runtimes?.VarioHyve?.mean)) continue;
        const scenario = getCase(row.name, row.params, profile);
        const matches = scenario.runs.filter(r => r.legacy && r.branch === rich.branch && r.commit.id === rich.commit.id && Math.abs(r.runtimes.VarioHyve.mean - row.runtimes.VarioHyve.mean) < 1e-9);
        matches.sort((a,b) => Math.abs(a.date-Date.parse(rich.date)) - Math.abs(b.date-Date.parse(rich.date)));
        if (matches.length) scenario.runs.splice(scenario.runs.indexOf(matches[0]), 1);
        const run = {id: rich.id, branch: rich.branch, commit: rich.commit, date: Date.parse(rich.date), run_url: rich.run_url, runtimes: row.runtimes, ratios: {}, legacy: false};
        for (const label of ['CPython','GraalPy']) if (positive(row.runtimes[label]?.mean)) run.ratios[label] = row.runtimes.VarioHyve.mean / row.runtimes[label].mean;
        scenario.runs.push(run);
      }
    }
    for (const scenario of cases.values()) scenario.runs.sort((a,b) => a.date-b.date || a.id.localeCompare(b.id));
    return [...cases.values()].sort((a,b) => a.label.localeCompare(b.label, undefined, {numeric:true}));
  }
  const api = {normalize, paramsKey, profileOf, keyOf};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.BenchmarkModel = api;
})(typeof window !== 'undefined' ? window : globalThis);
