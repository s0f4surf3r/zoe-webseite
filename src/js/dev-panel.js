/**
 * Live Parameter Editing — Full Control Dev Panel
 * Methode: J-THRUST / Klarsite
 * NUR für Entwicklungsphase — vor Deploy entfernen!
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'zb_dev_panel';
  const STATES_KEY = 'zb_dev_states';
  const UNDO_KEY = 'zb_dev_undo';
  const root = document.documentElement;
  const bod = document.body;

  // ─── Seite erkennen ─────────────────────────────────
  const pageId = bod.classList.contains('page-home') ? 'home'
    : bod.classList.contains('page-story') ? 'story'
    : bod.classList.contains('page-weg') ? 'weg'
    : window.location.pathname.replace(/^\/?(en|pt)\//, '/').replace(/\//g, '') || 'home';

  // ─── Parameter-Definitionen ───────────────────────────
  // pages: null = überall, ['home'] = nur dort
  // scopable: true = "nur hier" Toggle möglich
  const sections = [
    {
      title: 'FARBEN',
      params: [
        { id: '--color-bg', label: 'Hintergrund', type: 'color', def: '#0a1628' },
        { id: '--color-primary', label: 'Karten/Nav', type: 'color', def: '#1a3a5c' },
        { id: '--color-secondary', label: 'Sekundär', type: 'color', def: '#3a6080' },
        { id: '--color-accent', label: 'Accent/CTA', type: 'color', def: '#e86a7a' },
        { id: '--color-teal', label: 'Teal/Links', type: 'color', def: '#2abfbf' },
        { id: '--color-warm', label: 'Warm', type: 'color', def: '#f4a842' },
        { id: '--color-light', label: 'Text/Hell', type: 'color', def: '#f0ece6' },
      ]
    },
    {
      title: 'TYPOGRAFIE',
      scopable: true,
      params: [
        { id: '--font-body-size', label: 'Body Basis', type: 'range', min: 80, max: 130, step: 1, def: 100, unit: '%' },
        { id: '--font-body-lh', label: 'Zeilenhöhe', type: 'range', min: 1.2, max: 2.2, step: 0.05, def: 1.6, unit: '' },
        { id: '--content-body-size', label: 'Fließtext', type: 'range', min: 0.8, max: 1.6, step: 0.05, def: 1.1, unit: 'rem' },
        { id: '--content-intro-size', label: 'Intro-Text', type: 'range', min: 0.9, max: 1.8, step: 0.05, def: 1.2, unit: 'rem' },
        { id: '--content-h1-size', label: 'Seiten-Titel', type: 'text', def: 'clamp(2rem, 5vw, 3rem)' },
        { id: '--content-h2-size', label: 'Überschrift 2', type: 'range', min: 0.7, max: 1.5, step: 0.05, def: 1, unit: 'rem' },
      ]
    },
    {
      title: 'HOME HERO',
      pages: ['home'],
      params: [
        { id: '--home-name-size', label: 'Name', type: 'text', def: 'clamp(4rem, 12vw, 10rem)' },
        { id: '--home-subtitle-size', label: 'Subtitle', type: 'text', def: 'clamp(2rem, 5vw, 3.2rem)' },
        { id: '--home-subtitle-spacing', label: 'Subtitle Spacing', type: 'range', min: 0, max: 12, step: 1, def: 6, unit: 'px' },
        { id: '--home-subtitle-weight', label: 'Subtitle Weight', type: 'range', min: 100, max: 900, step: 100, def: 300, unit: '' },
        { id: '--home-tag-size', label: 'Tag Size', type: 'range', min: 0.5, max: 1.2, step: 0.05, def: 0.75, unit: 'rem' },
        { id: '--home-tag-spacing', label: 'Tag Spacing', type: 'range', min: 0, max: 8, step: 0.5, def: 3, unit: 'px' },
      ]
    },
    {
      title: 'NAVIGATION',
      params: [
        { id: '--font-nav-size', label: 'Schriftgröße', type: 'range', min: 0.6, max: 1.3, step: 0.05, def: 0.9, unit: 'rem' },
        { id: '--font-nav-spacing', label: 'Letter Spacing', type: 'range', min: 0, max: 5, step: 0.5, def: 2, unit: 'px' },
        { id: '--font-nav-weight', label: 'Weight', type: 'range', min: 300, max: 800, step: 100, def: 500, unit: '' },
        { id: '--nav-gap', label: 'Abstand', type: 'range', min: 0.5, max: 4, step: 0.25, def: 1.5, unit: 'rem' },
        { id: '--nav-padding', label: 'Header Padding', type: 'range', min: 0.5, max: 4, step: 0.25, def: 1.5, unit: 'rem' },
      ]
    },
    {
      title: 'STORY HERO',
      pages: ['story'],
      params: [
        { id: '--story-h1-size', label: 'Titel', type: 'text', def: 'clamp(3.5rem, 8vw, 8rem)' },
        { id: '--story-hero-img-width', label: 'Bild-Breite', type: 'range', min: 40, max: 85, step: 1, def: 65, unit: '%' },
        { id: '--story-hero-fade-25', label: 'Fade @25%', type: 'range', min: 0, max: 1, step: 0.05, def: 0.85, unit: '' },
        { id: '--story-hero-fade-55', label: 'Fade @55%', type: 'range', min: 0, max: 1, step: 0.05, def: 0.3, unit: '' },
        { id: '--story-hero-fade-80', label: 'Fade @80%', type: 'range', min: 0, max: 1, step: 0.05, def: 0, unit: '' },
        { id: '--story-hero-bottom-height', label: 'Bottom Fade', type: 'range', min: 10, max: 70, step: 5, def: 40, unit: '%' },
      ]
    },
    {
      title: 'STORY BILDER',
      pages: ['story'],
      params: [
        { id: '--story-img-height', label: 'Bildhöhe', type: 'range', min: 20, max: 90, step: 5, def: 55, unit: 'vh' },
        { id: '--story-img-top-fade', label: 'Fade oben', type: 'range', min: 0, max: 50, step: 2, def: 20, unit: '%' },
        { id: '--story-img-bottom-fade', label: 'Fade unten', type: 'range', min: 0, max: 60, step: 2, def: 30, unit: '%' },
        { id: '--story-section-max-width', label: 'Text-Breite', type: 'range', min: 400, max: 1000, step: 50, def: 700, unit: 'px' },
        { id: '--story-quote-max-width', label: 'Zitat-Breite', type: 'range', min: 400, max: 1000, step: 50, def: 700, unit: 'px' },
      ]
    },
    {
      title: 'DER WEG HERO',
      pages: ['weg', 'der-weg'],
      params: [
        { id: '--weg-hero-height', label: 'Höhe', type: 'range', min: 30, max: 90, step: 5, def: 50, unit: 'vh' },
      ]
    },
    {
      title: 'LAYOUT',
      scopable: true,
      params: [
        { id: '--main-max-width', label: 'Content Breite', type: 'range', min: 600, max: 1200, step: 50, def: 800, unit: 'px' },
        { id: '--main-padding', label: 'Content Padding', type: 'range', min: 0.5, max: 4, step: 0.25, def: 2, unit: 'rem' },
        { id: '--card-radius', label: 'Card Radius', type: 'range', min: 0, max: 24, step: 2, def: 12, unit: 'px' },
        { id: '--card-padding', label: 'Card Padding', type: 'range', min: 0.5, max: 4, step: 0.25, def: 2, unit: 'rem' },
        { id: '--gear-card-radius', label: 'Gear Radius', type: 'range', min: 0, max: 16, step: 2, def: 8, unit: 'px' },
        { id: '--gear-card-padding', label: 'Gear Padding', type: 'range', min: 0.5, max: 3, step: 0.1, def: 1.2, unit: 'rem' },
        { id: '--footer-size', label: 'Footer Text', type: 'range', min: 0.6, max: 1.2, step: 0.05, def: 0.85, unit: 'rem' },
      ]
    },
  ];

  // ─── Storage ────────────────────────────────────────
  // Global: { '--color-bg': '#0a1628' }
  // Page-scoped: { 'page:home:--font-h1-min': '2rem' }
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { }

  // Globale Werte auf :root anwenden
  Object.entries(saved).forEach(([k, v]) => {
    if (!k.startsWith('page:')) root.style.setProperty(k, v);
  });
  // Seiten-spezifische Werte auf body anwenden
  Object.entries(saved).forEach(([k, v]) => {
    if (k.startsWith('page:' + pageId + ':')) {
      const prop = k.split(':')[2];
      bod.style.setProperty(prop, v);
    }
  });

  // ─── Prüfen ob Param auf dieser Seite gescoped ist ──
  function isScoped(paramId) {
    return saved['page:' + pageId + ':' + paramId] !== undefined;
  }

  function getScopedKey(paramId) {
    return 'page:' + pageId + ':' + paramId;
  }

  function getCurrentVal(p) {
    const scopedKey = getScopedKey(p.id);
    if (saved[scopedKey] !== undefined) return parseVal(saved[scopedKey], p);
    if (saved[p.id] !== undefined) return parseVal(saved[p.id], p);
    return p.def;
  }

  // ─── Panel HTML ─────────────────────────────────────
  const panel = document.createElement('div');
  panel.id = 'dev-panel';
  panel.innerHTML = `
    <div class="dp-header">
      <span class="dp-title">DESIGN</span>
      <span class="dp-page-id">${pageId}</span>
      <div class="dp-actions">
        <button class="dp-btn dp-undo" title="Undo (Cmd+Z)">&#8617;</button>
        <button class="dp-btn dp-save-state" title="State speichern">Save</button>
        <button class="dp-btn dp-copy" title="CSS kopieren">CSS</button>
        <button class="dp-btn dp-reset" title="Zurücksetzen">Reset</button>
        <button class="dp-btn dp-min" title="Minimieren">_</button>
      </div>
    </div>
    <div class="dp-states-bar"></div>
    <div class="dp-body"></div>
  `;

  const panelBody = panel.querySelector('.dp-body');

  sections.forEach(sec => {
    // Sichtbarkeit: nur anzeigen wenn pages null oder aktueller pageId drin
    if (sec.pages && !sec.pages.includes(pageId)) return;

    const group = document.createElement('div');
    group.className = 'dp-section';
    const header = document.createElement('div');
    header.className = 'dp-sec-header';
    header.textContent = sec.title;
    if (sec.pages) header.textContent += ' ●';  // Punkt = seitenspezifisch
    header.onclick = () => group.classList.toggle('dp-collapsed');
    group.appendChild(header);

    const content = document.createElement('div');
    content.className = 'dp-sec-content';

    sec.params.forEach(p => {
      const row = document.createElement('div');
      row.className = 'dp-row';

      const label = document.createElement('label');
      label.className = 'dp-label';
      label.textContent = p.label;

      const val = getCurrentVal(p);

      if (p.type === 'color') {
        const input = document.createElement('input');
        input.type = 'color';
        input.className = 'dp-color';
        input.setAttribute('data-dp-id', p.id);
        input.value = typeof val === 'string' ? val : p.def;
        input.oninput = () => setParam(p, input.value, row);
        row.appendChild(label);
        row.appendChild(input);
      } else if (p.type === 'range') {
        const numVal = typeof val === 'number' ? val : parseFloat(val);
        const input = document.createElement('input');
        input.type = 'range';
        input.className = 'dp-range';
        input.setAttribute('data-dp-id', p.id);
        input.min = p.min;
        input.max = p.max;
        input.step = p.step;
        input.value = numVal;
        const display = document.createElement('span');
        display.className = 'dp-val';
        display.textContent = numVal + (p.unit || '');
        input.oninput = () => {
          display.textContent = input.value + (p.unit || '');
          setParam(p, input.value + (p.unit || ''), row);
        };
        row.appendChild(label);
        row.appendChild(input);
        row.appendChild(display);
      } else if (p.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'dp-text';
        input.setAttribute('data-dp-id', p.id);
        input.value = typeof val === 'string' ? val : String(p.def);
        input.onchange = () => setParam(p, input.value, row);
        row.appendChild(label);
        row.appendChild(input);
      }

      // "nur hier" Toggle für scopable Sektionen
      if (sec.scopable) {
        const toggle = document.createElement('button');
        toggle.className = 'dp-scope-btn' + (isScoped(p.id) ? ' dp-scope-active' : '');
        toggle.setAttribute('data-dp-scope', p.id);
        toggle.title = 'Nur auf dieser Seite';
        toggle.textContent = '●';
        toggle.onclick = (e) => {
          e.stopPropagation();
          toggleScope(p, toggle);
        };
        row.appendChild(toggle);
      }

      content.appendChild(row);
    });

    group.appendChild(content);
    panelBody.appendChild(group);
  });

  // ─── Legende ──────────────────────────────────────
  const legend = document.createElement('div');
  legend.className = 'dp-legend';
  legend.innerHTML =
    '<b>Legende</b>' +
    '<div><span class="dp-legend-dot dp-legend-scope"></span> Nur auf dieser Seite (klick = toggle)</div>' +
    '<div><span class="dp-legend-dot dp-legend-page"></span> Sektion nur auf dieser Seite sichtbar</div>' +
    '<div>Drag am Header = verschieben</div>' +
    '<div>Ecke unten rechts = Größe ändern</div>' +
    '<div>Cmd+Z = Undo</div>';
  panelBody.appendChild(legend);

  // ─── Styles ─────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #dev-panel {
      position: fixed; top: 20px; right: 20px; width: 300px; max-height: calc(100vh - 40px);
      background: rgba(15, 15, 20, 0.95); color: #ccc;
      font: 11px/1.4 -apple-system, sans-serif; z-index: 99998;
      display: flex; flex-direction: column;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 8px 40px rgba(0,0,0,0.5);
      overflow: hidden;
    }
    #dev-panel.dp-minimized { display: none; }
    .dp-header {
      display: flex; align-items: center;
      padding: 8px 10px; border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0; gap: 6px; cursor: grab; user-select: none;
    }
    .dp-header:active { cursor: grabbing; }
    .dp-title { font-size: 10px; font-weight: 700; letter-spacing: 3px; color: #888; }
    .dp-page-id { font-size: 9px; color: #2abfbf; background: rgba(42,191,191,0.1); padding: 2px 6px; border-radius: 3px; letter-spacing: 1px; }
    .dp-actions { display: flex; gap: 3px; margin-left: auto; }
    .dp-btn {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: #999; padding: 3px 6px; border-radius: 4px; font-size: 9px;
      cursor: pointer; font-family: inherit; letter-spacing: 1px;
    }
    .dp-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .dp-body { overflow-y: auto; overflow-x: hidden; flex: 1; padding-bottom: 1rem; }
    .dp-section { border-bottom: 1px solid rgba(255,255,255,0.05); }
    .dp-sec-header {
      padding: 8px 12px; font-size: 9px; font-weight: 700; letter-spacing: 2px;
      color: #2abfbf; cursor: pointer; user-select: none;
    }
    .dp-sec-header:hover { color: #3dd; }
    .dp-collapsed .dp-sec-content { display: none; }
    .dp-sec-content { padding: 0 12px 8px; }
    .dp-row {
      display: flex; align-items: center; gap: 4px; margin-bottom: 5px;
      min-height: 22px;
    }
    .dp-label { flex: 0 0 75px; font-size: 10px; color: #888; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .dp-color { flex: 0 0 28px; height: 22px; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 0; cursor: pointer; background: none; }
    .dp-range { flex: 1; min-width: 0; height: 3px; accent-color: #2abfbf; cursor: pointer; }
    .dp-val { flex: 0 0 42px; text-align: right; font-size: 9px; color: #666; font-variant-numeric: tabular-nums; }
    .dp-text { flex: 1; min-width: 0; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #ccc; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-family: monospace; }
    .dp-scope-btn {
      flex: 0 0 16px; width: 16px; height: 16px; border-radius: 50%;
      background: none; border: 1px solid rgba(255,255,255,0.15); color: #444;
      font-size: 8px; cursor: pointer; padding: 0; line-height: 14px; text-align: center;
    }
    .dp-scope-btn:hover { border-color: #e86a7a; color: #e86a7a; }
    .dp-scope-active { background: rgba(232,106,122,0.2); border-color: #e86a7a; color: #e86a7a; }
    .dp-states-bar {
      display: flex; flex-wrap: wrap; gap: 4px; padding: 6px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .dp-states-bar:empty { display: none; padding: 0; }
    .dp-state-chip {
      display: flex; align-items: center; gap: 2px;
      background: rgba(42,191,191,0.12); border: 1px solid rgba(42,191,191,0.25);
      border-radius: 4px; padding: 2px 4px 2px 7px; cursor: pointer;
    }
    .dp-state-chip:hover { background: rgba(42,191,191,0.2); }
    .dp-state-name { font-size: 9px; color: #2abfbf; letter-spacing: 1px; }
    .dp-state-x { font-size: 12px; color: #666; padding: 0 3px; line-height: 1; }
    .dp-state-x:hover { color: #e86a7a; }
    .dp-toast {
      position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
      background: #2abfbf; color: #0a1628; padding: 8px 20px; border-radius: 8px;
      font-size: 11px; font-weight: 600; z-index: 99999; pointer-events: none;
    }
    /* Legende */
    .dp-legend {
      padding: 10px 12px; margin-top: 8px;
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 9px; color: #555; line-height: 1.8;
    }
    .dp-legend b { color: #666; font-size: 9px; letter-spacing: 1px; display: block; margin-bottom: 4px; }
    .dp-legend-dot {
      display: inline-block; width: 8px; height: 8px; border-radius: 50%;
      margin-right: 4px; vertical-align: middle;
    }
    .dp-legend-scope { background: rgba(232,106,122,0.4); border: 1px solid #e86a7a; }
    .dp-legend-page { background: rgba(42,191,191,0.3); border: 1px solid #2abfbf; }
    /* Resize-Handle unten rechts */
    .dp-resize {
      position: absolute; bottom: 0; right: 0; width: 16px; height: 16px;
      cursor: nwse-resize; opacity: 0.3;
    }
    .dp-resize:hover { opacity: 0.6; }
    .dp-resize::after {
      content: ''; position: absolute; bottom: 3px; right: 3px;
      width: 8px; height: 8px; border-right: 2px solid #666; border-bottom: 2px solid #666;
    }
  `;

  document.head.appendChild(style);
  bod.appendChild(panel);

  // ─── Undo ───────────────────────────────────────────
  let undoStack = [];
  try { undoStack = JSON.parse(localStorage.getItem(UNDO_KEY)) || []; } catch (e) { }
  const MAX_UNDO = 50;

  function pushUndo() {
    undoStack.push(JSON.stringify(saved));
    if (undoStack.length > MAX_UNDO) undoStack.shift();
    localStorage.setItem(UNDO_KEY, JSON.stringify(undoStack));
  }

  function undo() {
    if (!undoStack.length) return;
    const prev = JSON.parse(undoStack.pop());
    localStorage.setItem(UNDO_KEY, JSON.stringify(undoStack));
    saved = prev;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    applyAll();
    refreshUI();
    toast('Undo');
  }

  // ─── States ─────────────────────────────────────────
  let states = {};
  try { states = JSON.parse(localStorage.getItem(STATES_KEY)) || {}; } catch (e) { }

  function saveState(name) {
    states[name] = JSON.stringify(saved);
    localStorage.setItem(STATES_KEY, JSON.stringify(states));
    renderStates();
    toast('State "' + name + '" gespeichert');
  }

  function loadState(name) {
    if (!states[name]) return;
    pushUndo();
    saved = JSON.parse(states[name]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    applyAll();
    refreshUI();
    toast('State "' + name + '" geladen');
  }

  function deleteState(name) {
    delete states[name];
    localStorage.setItem(STATES_KEY, JSON.stringify(states));
    renderStates();
  }

  function renderStates() {
    const bar = panel.querySelector('.dp-states-bar');
    const names = Object.keys(states);
    if (!names.length) { bar.innerHTML = ''; return; }
    bar.innerHTML = names.map(n =>
      '<div class="dp-state-chip">' +
        '<span class="dp-state-name" data-load="' + n + '">' + n + '</span>' +
        '<span class="dp-state-x" data-del="' + n + '">&times;</span>' +
      '</div>'
    ).join('');
    bar.querySelectorAll('[data-load]').forEach(el => el.onclick = () => loadState(el.dataset.load));
    bar.querySelectorAll('[data-del]').forEach(el => { el.onclick = (e) => { e.stopPropagation(); deleteState(el.dataset.del); }; });
  }

  // ─── Core-Funktionen ───────────────────────────────
  function setParam(p, value, row) {
    pushUndo();
    const scoped = row && row.querySelector('.dp-scope-active');
    if (scoped) {
      // Nur auf dieser Seite
      const key = getScopedKey(p.id);
      bod.style.setProperty(p.id, value);
      saved[key] = value;
    } else {
      // Global
      root.style.setProperty(p.id, value);
      saved[p.id] = value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }

  function toggleScope(p, btn) {
    pushUndo();
    const scopedKey = getScopedKey(p.id);
    if (isScoped(p.id)) {
      // Scope entfernen → zurück zu global
      btn.classList.remove('dp-scope-active');
      bod.style.removeProperty(p.id);
      delete saved[scopedKey];
    } else {
      // Scope setzen → aktuellen Wert als seitenspezifisch speichern
      btn.classList.add('dp-scope-active');
      const currentVal = saved[p.id] || (p.type === 'range' ? p.def + (p.unit || '') : p.def);
      saved[scopedKey] = currentVal;
      bod.style.setProperty(p.id, currentVal);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }

  function applyAll() {
    // Alles entfernen
    sections.forEach(sec => sec.params.forEach(p => {
      root.style.removeProperty(p.id);
      bod.style.removeProperty(p.id);
    }));
    // Globale Werte auf :root
    Object.entries(saved).forEach(([k, v]) => {
      if (!k.startsWith('page:')) root.style.setProperty(k, v);
    });
    // Seiten-spezifische Werte auf body
    Object.entries(saved).forEach(([k, v]) => {
      if (k.startsWith('page:' + pageId + ':')) {
        bod.style.setProperty(k.split(':')[2], v);
      }
    });
  }

  function refreshUI() {
    sections.forEach(sec => sec.params.forEach(p => {
      const input = panel.querySelector('[data-dp-id="' + p.id + '"]');
      if (!input) return;
      const val = getCurrentVal(p);
      if (p.type === 'color') {
        input.value = val;
      } else if (p.type === 'range') {
        const numVal = typeof val === 'number' ? val : parseFloat(val);
        input.value = numVal;
        const display = input.nextElementSibling;
        if (display) display.textContent = numVal + (p.unit || '');
      } else if (p.type === 'text') {
        input.value = val;
      }
      // Scope-Button updaten
      const scopeBtn = input.closest('.dp-row').querySelector('[data-dp-scope]');
      if (scopeBtn) {
        scopeBtn.classList.toggle('dp-scope-active', isScoped(p.id));
      }
    }));
  }

  function parseVal(stored, param) {
    if (param.type === 'color') return stored;
    if (param.type === 'text') return stored;
    if (param.type === 'range') return parseFloat(stored);
    return stored;
  }

  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'dp-toast';
    t.textContent = msg;
    bod.appendChild(t);
    setTimeout(() => t.remove(), 1500);
  }

  // ─── Resize-Handle ─────────────────────────────────
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'dp-resize';
  panel.appendChild(resizeHandle);

  // ─── Drag & Resize ────────────────────────────────
  const PANEL_POS_KEY = 'zb_dev_panel_pos';
  let panelPos = { top: 20, right: 20, width: 300, height: null };
  try {
    const sp = JSON.parse(localStorage.getItem(PANEL_POS_KEY));
    if (sp) panelPos = Object.assign(panelPos, sp);
  } catch (e) {}

  function applyPanelPos() {
    panel.style.top = panelPos.top + 'px';
    panel.style.right = panelPos.right + 'px';
    panel.style.left = 'auto';
    panel.style.width = panelPos.width + 'px';
    if (panelPos.height) panel.style.maxHeight = panelPos.height + 'px';
  }
  applyPanelPos();

  function savePanelPos() {
    localStorage.setItem(PANEL_POS_KEY, JSON.stringify(panelPos));
  }

  // Drag by header
  const header = panel.querySelector('.dp-header');
  let dragging = false, dragStartX, dragStartY, startRight, startTop;

  header.addEventListener('mousedown', (e) => {
    if (e.target.closest('.dp-btn, .dp-actions')) return;
    dragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    startRight = panelPos.right;
    startTop = panelPos.top;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    panelPos.right = Math.max(0, startRight - dx);
    panelPos.top = Math.max(0, startTop + dy);
    applyPanelPos();
  });

  document.addEventListener('mouseup', () => {
    if (dragging) { dragging = false; savePanelPos(); }
  });

  // Resize by handle
  let resizing = false, resizeStartX, resizeStartY, startW, startH;

  resizeHandle.addEventListener('mousedown', (e) => {
    resizing = true;
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;
    startW = panel.offsetWidth;
    startH = panel.offsetHeight;
    startRight = panelPos.right;
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener('mousemove', (e) => {
    if (!resizing) return;
    const dx = e.clientX - resizeStartX;
    const dy = e.clientY - resizeStartY;
    // Panel ist right-positioniert: nach rechts ziehen = right kleiner + width größer
    const newW = Math.max(240, startW + dx);
    panelPos.width = newW;
    panelPos.right = Math.max(0, startRight - (newW - startW));
    panelPos.height = Math.max(200, startH + dy);
    applyPanelPos();
  });

  document.addEventListener('mouseup', () => {
    if (resizing) { resizing = false; savePanelPos(); }
  });

  // ─── Restore-Button ────────────────────────────────
  const restore = document.createElement('button');
  restore.id = 'dp-restore';
  restore.textContent = 'DESIGN';
  restore.style.cssText = 'display:none;position:fixed;top:50%;right:0;transform:translateY(-50%);background:rgba(15,15,20,0.9);color:#2abfbf;border:1px solid rgba(255,255,255,0.1);border-right:none;border-radius:6px 0 0 6px;padding:10px 7px;font:10px/1 -apple-system,sans-serif;font-weight:700;letter-spacing:2px;cursor:pointer;writing-mode:vertical-lr;z-index:99999;';
  bod.appendChild(restore);

  // ─── Button-Handler ────────────────────────────────
  panel.querySelector('.dp-min').onclick = () => {
    panel.classList.add('dp-minimized');
    restore.style.display = 'block';
  };
  restore.onclick = () => {
    panel.classList.remove('dp-minimized');
    restore.style.display = 'none';
  };

  panel.querySelector('.dp-undo').onclick = undo;
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.target.closest('[contenteditable], input, textarea')) {
      e.preventDefault();
      undo();
    }
  });

  panel.querySelector('.dp-save-state').onclick = () => {
    const name = prompt('Name für diesen State:');
    if (name && name.trim()) saveState(name.trim());
  };

  renderStates();

  panel.querySelector('.dp-reset').onclick = () => {
    pushUndo();
    localStorage.removeItem(STORAGE_KEY);
    saved = {};
    applyAll();
    refreshUI();
    toast('Reset auf Default');
  };

  panel.querySelector('.dp-copy').onclick = () => {
    const lines = [':root {'];
    const pageLines = [];
    sections.forEach(sec => {
      if (sec.pages && !sec.pages.includes(pageId)) return;
      const globalParams = [];
      const scopedParams = [];
      sec.params.forEach(p => {
        const scopedKey = getScopedKey(p.id);
        if (saved[scopedKey] !== undefined) {
          scopedParams.push('  ' + p.id + ': ' + saved[scopedKey] + ';');
        }
        const val = saved[p.id] || (p.type === 'range' ? p.def + (p.unit || '') : p.def);
        globalParams.push('  ' + p.id + ': ' + val + ';');
      });
      lines.push('  /* ' + sec.title + ' */');
      globalParams.forEach(l => lines.push(l));
      if (scopedParams.length) {
        pageLines.push('  /* ' + sec.title + ' (nur ' + pageId + ') */');
        scopedParams.forEach(l => pageLines.push(l));
      }
    });
    lines.push('}');
    if (pageLines.length) {
      lines.push('');
      lines.push('/* Seiten-spezifisch: ' + pageId + ' */');
      lines.push('.' + (bod.className.split(' ').find(c => c.startsWith('page-')) || 'page-' + pageId) + ' {');
      pageLines.forEach(l => lines.push(l));
      lines.push('}');
    }
    const css = lines.join('\n');
    navigator.clipboard.writeText(css).then(() => toast('CSS kopiert'));
  };

})();
