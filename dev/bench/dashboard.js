(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const raw = window.BENCHMARK_DATA;
  if (!raw) { $('status').textContent = 'Benchmark history could not be loaded. Please reload this page.'; return; }
  const rich = window.BENCHMARK_RUNS || [];
  const cases = BenchmarkModel.normalize(raw, rich);
  const colors = {VarioHyve:'#007f73', CPython:'#5264d9', GraalPy:'#bd6720'};
  const labels = {VarioHyve:'VarioHyve', CPython:'CPython', GraalPy:'GraalPy · no guest JIT'};
  const state = {view:'comparison', key:cases.find(c => c.profile === 'tracing' && c.name === 'methodSend')?.key};
  const number = value => Number.isFinite(value) ? value.toLocaleString(undefined, {maximumSignificantDigits:4}) : '—';
  const mean = metric => metric ? `${metric.approximate ? '≈ ' : ''}${number(metric.mean)}` : '—';
  const short = commit => commit.id.slice(0,7);
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function link(text, url) {
    const node = element('a', text);
    try { if (new URL(url, location.href).protocol === 'https:') node.href = url; } catch { /* Keep label only. */ }
    node.target = '_blank'; node.rel = 'noopener'; return node;
  }
  function option(select, value, label) { const node = element('option',label); node.value = value; select.append(node); }
  const branches = [...new Set(cases.flatMap(c => c.runs.map(r => r.branch)))].sort();
  for (const branch of branches) option($('branch'),branch,branch);
  for (const profile of new Set(cases.map(c => c.profile))) if (!['tracing','legacy'].includes(profile)) option($('profile'),profile,profile);
  if (!cases.some(c => c.profile === 'tracing')) $('profile').value = cases[0]?.profile || 'legacy';
  const totalRuns = new Set(cases.flatMap(c => c.runs.map(r => r.id))).size;
  $('status').textContent = `${totalRuns} runs · ${branches.length} branches · CPython and GraalPy comparisons · lower is faster`;
  $('updated').textContent = `Last published ${new Date(Math.max(Number(raw.lastUpdate) || 0, ...rich.map(r => Date.parse(r.date)))).toLocaleString()}`;
  $('download').onclick = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify({archive:raw, measurements:rich},null,2)],{type:'application/json'}));
    const anchor = element('a'); anchor.href = url; anchor.download = 'variohyve-performance.json'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url),1000);
  };
  function filteredCases() {
    const query = $('search').value.toLowerCase().trim();
    return cases.filter(c => c.profile === $('profile').value
      && ($('family').value === 'all' || (['literal','methodSend','closureSend'].includes(c.name) ? 'core' : 'recursion') === $('family').value)
      && c.label.toLowerCase().includes(query))
      .map(c => ({...c, runs:c.runs.filter(r => $('branch').value === 'all' || r.branch === $('branch').value)})).filter(c => c.runs.length);
  }
  function refresh() {
    const filtered = filteredCases();
    if (!filtered.some(c => c.key === state.key)) state.key = filtered[0]?.key;
    $('workload').replaceChildren();
    for (const c of filtered) option($('workload'),c.key,c.label);
    $('workload').value = state.key || '';
    $('workload').disabled = !filtered.length;
    const body = $('overview'); body.replaceChildren();
    for (const c of filtered) {
      const run = c.runs.at(-1), row = element('tr');
      row.className = c.key === state.key ? 'selected' : '';
      const title = element('td'), button = element('button',c.name);
      button.onclick = () => { state.key = c.key; refresh(); $('chart-title').scrollIntoView({behavior:'smooth',block:'center'}); };
      title.append(button,element('small',BenchmarkModel.paramsKey(c.params) || 'Core workload'));
      row.append(title);
      for (const runtime of ['VarioHyve','CPython','GraalPy']) row.append(element('td',mean(run.runtimes[runtime])));
      for (const runtime of ['CPython','GraalPy']) {
        const cell = element('td'); cell.append(element('span',run.ratios[runtime] ? `${number(run.ratios[runtime])}×` : '—','ratio')); row.append(cell);
      }
      const revision = element('td'); revision.append(element('span',run.branch),element('small',`${short(run.commit)} · ${new Date(run.date).toLocaleDateString()}`));
      revision.title = `${run.branch}\n${run.commit.message || ''}`; row.append(revision); body.append(row);
    }
    if (!filtered.length) { const row = element('tr'), cell = element('td','No workloads match these filters.'); cell.colSpan = 7; row.append(cell); body.append(row); }
    draw(filtered.find(c => c.key === state.key));
  }
  const svgNS = 'http://www.w3.org/2000/svg';
  function svgElement(tag, attrs = {}, text) {
    const node = document.createElementNS(svgNS,tag);
    for (const [key,value] of Object.entries(attrs)) node.setAttribute(key,String(value));
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function detailLines(run, runtime) {
    const metric = run.runtimes[runtime];
    const lines = [`${labels[runtime]} · ${run.branch}`, `${short(run.commit)} · ${new Date(run.date).toLocaleString()}`, (run.commit.message || '').split('\n')[0]];
    if (state.view === 'ratio') lines.push(`VarioHyve / ${runtime}: ${number(run.ratios[runtime])}×`);
    lines.push(`Mean: ${mean(metric)} µs/op`);
    if (metric.samples?.length) {
      lines.push(`Min – max: ${number(metric.min)} – ${number(metric.max)} µs/op`, `Median: ${number(metric.median)} · middle 50%: ${number(metric.q1)} – ${number(metric.q3)}`, `${metric.samples.length} measured iteration means`);
    } else lines.push('Samples unavailable in this historical record');
    if (metric.confidence99_9) lines.push(`JMH 99.9% CI: ${metric.confidence99_9.map(number).join(' – ')} µs/op`);
    if (metric.approximate) lines.push('≈ Recovered from archive; rounded to 0.001 µs/op');
    if (metric.extra) lines.push(metric.extra);
    return lines;
  }
  function pin(run, runtime) {
    const panel = $('selection'); panel.replaceChildren();
    const meta = element('div',undefined,'run-meta');
    meta.append(element('strong',`${run.branch} · ${short(run.commit)}`),link('Source commit ↗',run.commit.url));
    if (run.run_url) meta.append(link('Actions run ↗',run.run_url));
    panel.append(meta,element('pre',detailLines(run,runtime).slice(2).join('\n')));
    if (run.runtimes[runtime].runtime) {
      const details = element('details'); details.append(element('summary','Runtime & measurement settings'),element('pre',JSON.stringify(run.runtimes[runtime].runtime,null,2))); panel.append(details);
    }
  }
  function draw(scenario) {
    $('plot').replaceChildren(); $('legend').replaceChildren(); $('tooltip').hidden = true;
    $('selection').textContent = 'Hover or focus a point for details. Click a point to pin its run below.';
    $('chart-title').textContent = scenario?.label || 'No matching workloads';
    $('chart-note').textContent = '';
    if (!scenario) { $('plot').append(element('p','Choose another branch, profile, or search.','empty')); return; }
    const limit = $('limit').value === 'all' ? Infinity : Number($('limit').value);
    const runs = scenario.runs.slice(-limit);
    const series = state.view === 'distribution' ? ['VarioHyve'] : state.view === 'ratio' ? ['CPython','GraalPy'] : ['VarioHyve','CPython','GraalPy'];
    for (const runtime of series) {
      const label = element('span',state.view === 'ratio' ? `VH / ${runtime}` : runtime === 'VarioHyve' && scenario.profile === 'tracing' ? 'VarioHyve + GC' : labels[runtime]);
      label.style.setProperty('--color',colors[runtime]); $('legend').append(label);
    }
    const getValue = (run,runtime) => state.view === 'ratio' ? run.ratios[runtime] : run.runtimes[runtime]?.mean;
    const values = runs.flatMap(run => series.flatMap(runtime => {
      const value = getValue(run,runtime), metric = run.runtimes[runtime];
      return value > 0 ? state.view === 'distribution' && metric.samples?.length ? [value,metric.min,metric.max] : [value] : [];
    }));
    const missing = state.view === 'ratio' ? 'This workload has no matching Python baseline in the selected history.' : 'No measured values in this selection.';
    if (!values.length) { $('plot').append(element('p',missing,'empty')); return; }
    const width = Math.max(340,$('plot').clientWidth), height = width < 550 ? 280 : 335;
    const margin = {left:66,right:20,top:26,bottom:48}, w = width-margin.left-margin.right, h = height-margin.top-margin.bottom;
    const log = $('log').checked;
    const low = Math.min(...values, ...(state.view === 'ratio' ? [1] : []));
    const high = Math.max(...values, ...(state.view === 'ratio' ? [1] : []));
    let min = log ? Math.log10(low) : 0, max = log ? Math.log10(high) : high;
    const span = max-min || (log ? 1 : high || 1); min -= log ? span*.12 : 0; max += span*.12;
    const y = value => margin.top+h-( (log ? Math.log10(value) : value)-min)/(max-min)*h;
    const x = index => margin.left + (runs.length === 1 ? w/2 : index*w/(runs.length-1));
    const svg = svgElement('svg',{viewBox:`0 0 ${width} ${height}`,role:'group','aria-label':`${scenario.label}: ${state.view} chart. Use Tab to inspect measurement points.`});
    svg.append(svgElement('text',{x:0,y:13},state.view === 'ratio' ? 'VH / Python (×)' : 'µs / operation'));
    for (let tick=0; tick<=5; tick++) {
      const value = log ? Math.pow(10,min+(max-min)*tick/5) : min+(max-min)*tick/5;
      const yy = y(value);
      svg.append(svgElement('line',{x1:margin.left,x2:width-margin.right,y1:yy,y2:yy,class:'grid'}),svgElement('text',{x:margin.left-10,y:yy+4,'text-anchor':'end'},number(value)));
    }
    if (state.view === 'ratio') svg.append(svgElement('line',{x1:margin.left,x2:width-margin.right,y1:y(1),y2:y(1),stroke:'#87959f','stroke-dasharray':'5 4'}),svgElement('text',{x:width-margin.right,y:y(1)-6,'text-anchor':'end'},'1× parity'));
    const ticks = Math.max(2,Math.floor(w/110));
    const indexes = new Set(Array.from({length:Math.min(ticks,runs.length)},(_,i) => Math.round(i*(runs.length-1)/Math.max(1,Math.min(ticks,runs.length)-1))));
    for (const i of indexes) svg.append(svgElement('text',{x:x(i),y:height-23,'text-anchor':'middle'},short(runs[i].commit)),svgElement('text',{x:x(i),y:height-7,'text-anchor':'middle'},new Date(runs[i].date).toLocaleDateString(undefined,{month:'short',day:'numeric'})));
    for (const runtime of series) {
      let path = '';
      for (let i=0;i<runs.length;i++) {
        const value = getValue(runs[i],runtime);
        if (!(value>0)) { path += ' '; continue; }
        const previous = i && getValue(runs[i-1],runtime)>0;
        path += `${previous ? 'L' : 'M'}${x(i)},${y(value)} `;
      }
      if (state.view !== 'distribution') svg.append(svgElement('path',{d:path,class:'series-line',stroke:colors[runtime]}));
      for (let i=0;i<runs.length;i++) {
        const run = runs[i], metric = run.runtimes[runtime], value = getValue(run,runtime);
        if (!(value>0) || !metric) continue;
        const xx = x(i), yy = y(value), color = colors[runtime];
        const group = svgElement('g',{class:'point',tabindex:0,role:'button','aria-label':detailLines(run,runtime).join('. ')});
        if (state.view === 'distribution' && metric.samples?.length) {
          const half = Math.max(2,Math.min(12,w/(Math.max(runs.length,2)*3)));
          group.append(svgElement('line',{x1:xx,x2:xx,y1:y(metric.min),y2:y(metric.max),stroke:color,'stroke-width':1.5}));
          for (const v of [metric.min,metric.max]) group.append(svgElement('line',{x1:xx-half,x2:xx+half,y1:y(v),y2:y(v),stroke:color}));
          group.append(svgElement('rect',{x:xx-half,y:y(metric.q3),width:half*2,height:Math.max(1,y(metric.q1)-y(metric.q3)),fill:'#c6e9e3',stroke:color}),svgElement('line',{x1:xx-half,x2:xx+half,y1:y(metric.median),y2:y(metric.median),stroke:color,'stroke-width':2}));
        }
        group.append(svgElement('circle',{cx:xx,cy:yy,r:4,fill:color,stroke:'white','stroke-width':1.2}),svgElement('circle',{cx:xx,cy:yy,r:10,fill:'transparent','aria-hidden':'true'}));
        const tip = $('tooltip');
        function show(event) {
          tip.textContent = detailLines(run,runtime).join('\n'); tip.hidden = false;
          const rect = group.getBoundingClientRect();
          const px = event.clientX || rect.left, py = event.clientY || rect.top;
          tip.style.left = `${Math.max(12,Math.min(px+14,window.innerWidth-tip.offsetWidth-12))}px`;
          tip.style.top = `${Math.max(12,Math.min(py+14,window.innerHeight-tip.offsetHeight-12))}px`;
        }
        group.addEventListener('pointermove',show); group.addEventListener('focus',show);
        group.addEventListener('pointerleave',() => {tip.hidden=true;}); group.addEventListener('blur',() => {tip.hidden=true;});
        group.addEventListener('click',() => pin(run,runtime)); group.addEventListener('keydown',event => { if (event.key === 'Enter' || event.key === ' ') {event.preventDefault(); pin(run,runtime);} if (event.key === 'Escape') tip.hidden=true; });
        svg.append(group);
      }
    }
    $('plot').append(svg);
    const baseNote = `${runs.length} runs · ${new Date(runs[0].date).toLocaleDateString()} – ${new Date(runs.at(-1).date).toLocaleDateString()} · ordered by measurement, across selected branches. `;
    const samples = runs.filter(r => r.runtimes.VarioHyve.samples?.length).length;
    $('chart-note').textContent = baseNote + (state.view === 'distribution'
      ? `Dots: means. Boxes: middle 50% and median. Whiskers: min–max. Samples available for ${samples}/${runs.length} runs; other points show means only.`
      : state.view === 'ratio' ? 'Below 1×: VarioHyve faster; above 1×: Python faster. Dashed line: parity.'
      : 'Dots: mean time. Older Python values are approximate. Missing counterparts are omitted.');
  }
  for (const id of ['profile','branch','family','limit','log']) $(id).addEventListener('change',refresh);
  $('search').addEventListener('input',refresh);
  $('workload').addEventListener('change',() => {state.key=$('workload').value;refresh();});
  for (const button of document.querySelectorAll('[data-view]')) button.onclick = () => {
    state.view=button.dataset.view;
    for (const other of document.querySelectorAll('[data-view]')) other.setAttribute('aria-pressed',String(other===button));
    refresh();
  };
  let resize;
  window.addEventListener('resize',() => {clearTimeout(resize);resize=setTimeout(refresh,150);});
  refresh();
})();
