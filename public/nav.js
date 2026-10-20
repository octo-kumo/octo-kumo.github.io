// Top nav: active-section marking + the search palette (Ctrl/⌘K, "/").
// The palette lists every writeup/post from /search-index.json and runs the
// same query engine as the homepage search (search.js → window.YunSearch).

(function () {
  // ─── Active section link ───
  function markActive() {
    var path = location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.topnav .nav-link[href^="/c/"]').forEach(function (a) {
      var href = a.getAttribute('href');
      var on = path === href || path.indexOf(href + '/') === 0;
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    var menu = document.getElementById('topnav-mobile');
    if (menu) menu.classList.remove('open');
    var ham = document.getElementById('hamburger');
    if (ham) ham.setAttribute('aria-expanded', 'false');
  }

  // ─── Search palette ───
  var RENDER_STEP = 60;
  var dialog, input, list, filtersEl, countEl;
  var allDocs = null;       // index entries (minus the site root)
  var results = [];         // [{ doc, snippets }]
  var rendered = 0;
  var active = -1;
  var topTags = [];
  var timer;

  function S() { return window.YunSearch; }

  function escapeHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function sortNewest(docs) {
    return docs.slice().sort(function (a, b) { return (b.created || '').localeCompare(a.created || ''); });
  }

  function computeTopTags(docs, n) {
    var freq = {};
    docs.forEach(function (d) {
      (d.tags || []).forEach(function (t) {
        var k = String(t).toLowerCase();
        if (!/^\w+$/.test(k) || k === 'blog' || k === 'writeup') return;
        freq[k] = (freq[k] || 0) + 1;
      });
    });
    return Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, n);
  }

  // Slug of the CTF the reader is currently in (/c/ctf/2024-foo/... → foo)
  function currentCtf() {
    var m = location.pathname.match(/^\/c\/ctf\/([^/]+)/);
    return m ? m[1].replace(/^\d+-/, '').toLowerCase().replace(/\W/g, '') : '';
  }

  // ─── Query token helpers (chips toggle tokens, text is kept) ───
  function tokens(q) { return q.match(/"[^"]*"?|\S+/g) || []; }
  var FILTER_RE = /^(type|tag|ctf|cat):/i;
  function hasToken(q, t) { return tokens(q).some(function (x) { return x.toLowerCase() === t; }); }
  function toggleToken(q, t) {
    var ts = tokens(q);
    if (!t) return ts.filter(function (x) { return !FILTER_RE.test(x); }).join(' ');
    if (hasToken(q, t)) return ts.filter(function (x) { return x.toLowerCase() !== t; }).join(' ');
    if (/^type:/.test(t)) ts = ts.filter(function (x) { return !/^type:/i.test(x); });
    // Filters go first so the free text stays at the end, where the caret is
    var f = ts.filter(function (x) { return FILTER_RE.test(x); });
    var rest = ts.filter(function (x) { return !FILTER_RE.test(x); });
    return f.concat([t], rest).join(' ');
  }

  function renderFilters() {
    var q = input.value;
    var chips = [{ q: '', label: 'all' }, { q: 'type:writeup', label: 'writeups' }, { q: 'type:blog', label: 'blog' }];
    var ctf = currentCtf();
    if (ctf) chips.push({ q: 'ctf:' + ctf, label: 'this ctf' });
    topTags.forEach(function (t) { chips.push({ q: 'tag:' + t, label: '#' + t }); });
    var anyFilter = tokens(q).some(function (x) { return FILTER_RE.test(x); });
    filtersEl.innerHTML = chips.map(function (c) {
      var on = c.q ? hasToken(q, c.q) : !anyFilter;
      return '<button type="button" class="sp-chip' + (on ? ' active' : '') + '" data-q="' + escapeHtml(c.q) + '" aria-pressed="' + on + '">' + escapeHtml(c.label) + '</button>';
    }).join('');
  }

  // ─── Results ───
  function kindOf(path) {
    var top = (path || '').split('/')[1];
    return top === 'blog' ? 'blog' : top === 'htb' ? 'htb' : 'ctf';
  }

  function contextOf(path) {
    var parts = (path || '').split('/').filter(Boolean);
    return parts.slice(1, -1).join(' / ');
  }

  function itemHtml(r, i, q) {
    var d = r.doc;
    var hl = function (t) { return q ? S().highlightTerm(t, q) : escapeHtml(t); };
    var title = d.title || (d.path || '').split('/').pop().replace(/-/g, ' ');
    var snippet = (r.snippets && r.snippets[0]) || d.description || '';
    var ctx = contextOf(d.path);
    var here = '/c' + d.path === location.pathname.replace(/\/+$/, '');
    var kind = kindOf(d.path);
    var html = '<li role="presentation"><a class="sp-item' + (here ? ' sp-here' : '') + '" role="option" id="sp-opt-' + i + '" href="/c' + escapeHtml(d.path) + '" aria-selected="false">';
    html += '<span class="sp-kind sp-kind-' + kind + '">' + kind + '</span>';
    html += '<span class="sp-body"><span class="sp-line"><span class="sp-title">' + hl(title) + '</span>';
    if (d.dateStr) html += '<span class="sp-date">' + escapeHtml(d.dateStr) + '</span>';
    html += '</span>';
    if (ctx || snippet) {
      html += '<span class="sp-sub">';
      if (ctx) html += '<span class="sp-ctx">' + escapeHtml(ctx) + '</span>';
      if (snippet) html += '<span class="sp-snippet">' + hl(snippet) + '</span>';
      html += '</span>';
    }
    html += '</span></a></li>';
    return html;
  }

  function renderMore() {
    var q = input.value.trim();
    var end = Math.min(results.length, rendered + RENDER_STEP);
    var html = '';
    for (var i = rendered; i < end; i++) html += itemHtml(results[i], i, q);
    list.insertAdjacentHTML('beforeend', html);
    rendered = end;
  }

  function setActive(i, scroll) {
    var items = list.querySelectorAll('.sp-item');
    if (!items.length) { active = -1; input.removeAttribute('aria-activedescendant'); return; }
    i = Math.max(0, Math.min(results.length - 1, i));
    while (i >= rendered) renderMore();
    items = list.querySelectorAll('.sp-item');
    if (items[active]) { items[active].classList.remove('active'); items[active].setAttribute('aria-selected', 'false'); }
    active = i;
    var el = items[active];
    el.classList.add('active');
    el.setAttribute('aria-selected', 'true');
    input.setAttribute('aria-activedescendant', el.id);
    if (scroll) el.scrollIntoView({ block: 'nearest' });
  }

  function update() {
    if (!allDocs) return;
    var q = input.value.trim();
    renderFilters();
    if (q) {
      results = S().searchDocs(allDocs, q, 1000);
    } else {
      results = sortNewest(allDocs).map(function (d) { return { doc: d, snippets: [] }; });
    }
    list.innerHTML = '';
    list.scrollTop = 0;
    rendered = 0;
    active = -1;
    if (!results.length) {
      list.innerHTML = '<li class="sp-empty" role="presentation">No matches' + (q ? ' for “' + escapeHtml(q) + '”' : '') + '</li>';
      input.removeAttribute('aria-activedescendant');
    } else {
      renderMore();
      setActive(0, false);
    }
    countEl.textContent = results.length + (results.length === 1 ? ' result' : ' results');
  }

  function ensureLoaded() {
    if (allDocs || !S()) return Promise.resolve();
    return S().loadDocs().then(function (docs) {
      allDocs = (docs || []).filter(function (d) { return d.path && d.path !== '/'; });
      topTags = computeTopTags(allDocs, 5);
    });
  }

  function open(prefill) {
    if (!dialog) return;
    if (!dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('sp-open');
    }
    if (typeof prefill === 'string') input.value = prefill;
    input.focus();
    input.select();
    if (!allDocs) {
      list.innerHTML = '<li class="sp-empty" role="presentation">Loading index…</li>';
      countEl.textContent = '';
      renderFilters();
    }
    ensureLoaded().then(update);
  }

  function close() {
    if (dialog && dialog.open) dialog.close();
  }

  function isTyping(el) {
    return el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
  }

  function init() {
    dialog = document.getElementById('search-palette');
    if (!dialog || dialog.__wired) return;
    dialog.__wired = true;
    input = document.getElementById('sp-input');
    list = document.getElementById('sp-list');
    filtersEl = document.getElementById('sp-filters');
    countEl = document.getElementById('sp-count');

    var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    document.querySelectorAll('.nav-search-kbd').forEach(function (k) { k.textContent = isMac ? '⌘K' : 'Ctrl K'; });

    var btn = document.getElementById('nav-search-btn');
    if (btn) {
      btn.addEventListener('click', function () { open(); });
      // Warm the index while the pointer heads for the button
      btn.addEventListener('pointerenter', ensureLoaded, { once: true });
      btn.addEventListener('focus', ensureLoaded, { once: true });
    }

    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(update, 80);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1, true); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1, true); }
      else if (e.key === 'PageDown') { e.preventDefault(); setActive(active + 8, true); }
      else if (e.key === 'PageUp') { e.preventDefault(); setActive(active - 8, true); }
      else if (e.key === 'Enter') {
        var el = list.querySelectorAll('.sp-item')[active];
        if (!el) return;
        e.preventDefault();
        if (e.ctrlKey || e.metaKey) { window.open(el.href, '_blank', 'noopener'); return; }
        el.click();
      }
    });

    filtersEl.addEventListener('click', function (e) {
      var c = e.target.closest('.sp-chip');
      if (!c) return;
      input.value = toggleToken(input.value, c.getAttribute('data-q'));
      input.focus();
      update();
    });

    // Syntax hints insert their prefix at the caret
    dialog.querySelectorAll('.sp-syntax [data-insert]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ins = b.getAttribute('data-insert');
        var v = input.value;
        input.value = v + (v && !/\s$/.test(v) ? ' ' : '') + ins;
        input.focus();
        var pos = ins.endsWith('""') ? input.value.length - 1 : input.value.length;
        input.setSelectionRange(pos, pos);
        update();
      });
    });

    list.addEventListener('scroll', function () {
      if (rendered < results.length && list.scrollTop + list.clientHeight > list.scrollHeight - 200) renderMore();
    });
    // mousemove (not mouseover) so keyboard-driven scrolling doesn't steal the selection
    list.addEventListener('mousemove', function (e) {
      var el = e.target.closest('.sp-item');
      if (!el) return;
      var i = parseInt(el.id.replace('sp-opt-', ''), 10);
      if (i !== active) setActive(i, false);
    });
    // Navigation itself is handled by app.js's view-transition click handler
    list.addEventListener('click', function (e) {
      var a = e.target.closest('.sp-item');
      if (a && !(e.ctrlKey || e.metaKey || e.shiftKey)) close();
    });

    dialog.querySelector('.sp-close').addEventListener('click', close);
    // Click on the backdrop (outside the panel) closes
    dialog.addEventListener('mousedown', function (e) { if (e.target === dialog) close(); });
    dialog.addEventListener('close', function () { document.documentElement.classList.remove('sp-open'); });

    document.addEventListener('keydown', function (e) {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey) && !e.altKey) {
        e.preventDefault();
        dialog.open ? close() : open();
      } else if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !dialog.open && !isTyping(document.activeElement)) {
        e.preventDefault();
        open();
      }
    });
  }

  window.openSearchPalette = open;

  function boot() { init(); markActive(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.addEventListener('yt:load', markActive);
  window.addEventListener('popstate', function () { setTimeout(markActive, 0); });
})();
