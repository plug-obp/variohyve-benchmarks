/* Progressive enhancement: the ordinary versions link works without JavaScript. */
(() => {
  const base = new URL('.', document.currentScript.src);
  const panel = document.querySelector('.version-navigation');
  if (!panel) return;
  fetch(new URL('versions.json', base)).then(response => {
    if (!response.ok) throw new Error('Version index unavailable');
    return response.json();
  }).then(index => {
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.textContent = 'Tutorial version';
    const select = document.createElement('select');
    select.name = 'version';
    for (const release of index.versions) {
      const option = document.createElement('option');
      const page = release.pages.includes(panel.dataset.page) ? panel.dataset.page
        : panel.dataset.page.startsWith('learn/') ? 'learn/index.html' : 'index.html';
      option.value = new URL(release.path + page, base).href;
      option.textContent = `v${release.version}${release.version === index.latest ? ' (latest)' : ''}`;
      option.selected = release.version === panel.dataset.version;
      select.append(option);
    }
    label.append(select);
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'View';
    form.append(label, button);
    form.addEventListener('submit', event => {
      event.preventDefault();
      window.location.assign(select.value);
    });
    panel.prepend(form);
    panel.querySelector('span')?.remove();
  }).catch(() => { /* Keep the accessible, static version list link. */ });
})();
