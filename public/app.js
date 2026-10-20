// Theme persistence is handled by theme.js + inline script in shell.pug
// This file: copy buttons, Giscus, view transitions, foldable headings, TOC tracking

// Site origin for Giscus CSS URLs (served from same origin)
var siteOrigin = window.location.origin;
// GitHub Pages 301s directory URLs to add a trailing slash (/c/blog → /c/blog/)
// on hard reload, while SPA link navigation stays slashless via pushState.
// Normalize to the canonical slashless path so giscus strict pathname matching,
// the view counter, and copied page links all agree on the same path.
(function normalizeTrailingSlash() {
  var p = location.pathname;
  if (p.length > 1 && p.endsWith('/')) {
    history.replaceState(null, '', p.replace(/\/+$/, '') + location.search + location.hash);
  }
})();
// ─── Copy code/flag to clipboard ───
function copyToClipboard(text, onSuccess) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
      fallbackCopy(text); onSuccess();
    });
  } else {
    fallbackCopy(text); onSuccess();
  }
}
window.copyCode = function (btn) {
  var text = '';
  if (btn.classList.contains('flag-copy')) {
    text = btn.getAttribute('data-copy') || '';
  } else {
    var block = btn.closest('.code-block');
    if (block) {
      var code = block.querySelector('pre code');
      if (code) text = code.textContent;
    }
  }
  if (!text) return;
  function showCopied() {
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1200);
  }
  copyToClipboard(text, showCopied);
};

// Copy link to current page (article header share button)
window.copyPageLink = function (btn) {
  var url = location.href;
  function showCopied() {
    btn.classList.add('copied');
    btn.textContent = '✓';
    setTimeout(function () { btn.classList.remove('copied'); btn.textContent = '⧉'; }, 1500);
  }
  copyToClipboard(url, showCopied);
};
function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { }
  document.body.removeChild(ta);
}

// Inline code click to copy
document.addEventListener('click', function (e) {
  var code = e.target.closest('code:not(pre code):not(.flag-text)');
  if (!code) return;
  var text = code.textContent;
  if (!text) return;
  function flash() {
    code.classList.add('copied');
    setTimeout(function () { code.classList.remove('copied'); }, 600);
  }
  copyToClipboard(text, flash);
});

// ─── Giscus ───
function createGiscusScript() {
  var s = document.createElement('script');
  s.src = 'https://giscus.app/client.js';
  s.setAttribute('data-repo', 'octo-kumo/octo-kumo.github.io');
  s.setAttribute('data-repo-id', 'R_kgDOIzFvHg');
  s.setAttribute('data-category', 'General');
  s.setAttribute('data-strict', '1');
  s.setAttribute('data-category-id', 'DIC_kwDOIzFvHs4Cgo6u');
  s.setAttribute('data-mapping', 'pathname');
  s.setAttribute('data-reactions-enabled', '1');
  // Determine Giscus theme based on color + style (6 files: style-color.css)
  var color = localStorage.getItem('color') || 'dark';
  var style = localStorage.getItem('style') || 'default';
  var theme = siteOrigin + '/giscus/' + style + '-' + color + '.css';
  s.setAttribute('data-theme', theme);
  s.setAttribute('data-lang', 'en');
  s.setAttribute('data-loading', 'lazy');
  s.setAttribute('crossorigin', 'anonymous');
  return s;
}

// ─── Foldable headings (code-editor style fold markers) ───
// Adds an anchor (copies the section link) and a fold marker to each heading
function decorateHeading(h) {
  if (h.querySelector(':scope > .heading-anchor') || !h.id) return;
  var a = document.createElement('a');
  a.className = 'heading-anchor';
  a.href = '#' + h.id;
  a.setAttribute('aria-label', 'Link to this section');
  h.insertBefore(a, h.firstChild);
  if (/^H[1-3]$/.test(h.tagName)) {
    var f = document.createElement('span');
    f.className = 'heading-fold';
    f.setAttribute('aria-hidden', 'true');
    h.appendChild(f);
  }
}
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('.heading-anchor');
  if (!a) return;
  copyToClipboard(location.origin + location.pathname + a.getAttribute('href'), function () {
    a.classList.add('copied');
    clearTimeout(a._copiedTimer);
    a._copiedTimer = setTimeout(function () { a.classList.remove('copied'); }, 1200);
  });
});
function initFoldableHeadings() {
  document.querySelectorAll('article h4[id]').forEach(decorateHeading);
  var headings = document.querySelectorAll('article h1, article h2, article h3');
  headings.forEach(function (h) {
    // Only add fold handler to h2 and h3 (h1 is the article title, not foldable)
    if (h.tagName === 'H1' && h.classList.contains('article-title')) return;
    decorateHeading(h);
    if (h.dataset.foldWired) return;
    h.dataset.foldWired = '1';

    h.addEventListener('click', function (e) {
      // Don't fold if clicking a link inside the heading
      if (e.target.closest('a')) return;
      h.classList.toggle('collapsed');

      // Toggle visibility of following siblings until next heading of same or higher level
      var level = parseInt(h.tagName[1]);
      var sibling = h.nextElementSibling;
      while (sibling) {
        if (sibling.matches('h1, h2, h3, h4, h5, h6')) {
          var sibLevel = parseInt(sibling.tagName[1]);
          if (sibLevel <= level) break;
        }
        if (h.classList.contains('collapsed')) {
          sibling.style.display = 'none';
        } else {
          sibling.style.display = '';
        }
        sibling = sibling.nextElementSibling;
      }
      scheduleTocUpdate();
    });
  });
}

// ─── TOC: highlight every section in the viewport ───
// A section spans from its heading to the next listed heading. Every section
// intersecting the viewport gets .active (the indicator bar covers them all);
// the one at the reading line gets .current.
var _toc = null;
var _tocRaf = 0;
function initTocTracking() {
  _toc = null;
  var list = document.querySelector('.toc-list');
  if (!list) return;
  var items = [];
  list.querySelectorAll('.toc-link').forEach(function (link) {
    var el = document.getElementById(link.getAttribute('data-toc-id'));
    if (el) items.push({ el: el, link: link });
  });
  if (items.length === 0) return;
  _toc = {
    list: list,
    box: list.closest('.content-page-toc'),
    items: items,
    indicator: list.querySelector('.toc-indicator'),
    progress: document.querySelector('.toc-progress'),
    article: document.querySelector('.content-page-main article'),
    lastCurrent: null
  };
  updateToc();
}
function scheduleTocUpdate() {
  if (!_tocRaf) _tocRaf = requestAnimationFrame(updateToc);
}
function updateToc() {
  _tocRaf = 0;
  var t = _toc;
  if (!t || !t.list.isConnected) return;
  var nav = document.querySelector('.topnav');
  var viewTop = nav ? nav.getBoundingClientRect().bottom : 48;
  var viewBottom = window.innerHeight;
  var readLine = viewTop + Math.min(120, (viewBottom - viewTop) * 0.25);
  var articleRect = t.article ? t.article.getBoundingClientRect() : null;
  var endY = articleRect ? articleRect.bottom : document.documentElement.scrollHeight - window.pageYOffset;
  var atBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2;

  // Headings inside folded sections have no boxes — skip them
  var tops = t.items.map(function (it) {
    return it.el.getClientRects().length ? it.el.getBoundingClientRect().top : null;
  });
  var current = -1, first = -1, last = -1;
  for (var i = 0; i < t.items.length; i++) {
    var link = t.items[i].link;
    var top = tops[i];
    link.classList.toggle('folded', top === null);
    if (top === null) { link.classList.remove('active'); continue; }
    var bottom = endY;
    for (var j = i + 1; j < t.items.length; j++) {
      if (tops[j] !== null) { bottom = tops[j]; break; }
    }
    var visible = bottom > viewTop + 1 && top < viewBottom;
    link.classList.toggle('active', visible);
    if (visible) { if (first < 0) first = i; last = i; }
    if (top <= readLine) current = i;
  }
  // Short last sections can never reach the reading line
  if (atBottom && last >= 0) current = last;
  t.items.forEach(function (it, i) { it.link.classList.toggle('current', i === current); });

  // Indicator spans the visible range
  t.list.classList.toggle('has-active', first >= 0);
  if (t.indicator && first >= 0) {
    var a = t.items[first].link, b = t.items[last].link;
    t.indicator.style.top = a.offsetTop + 'px';
    t.indicator.style.height = (b.offsetTop + b.offsetHeight - a.offsetTop) + 'px';
  }

  if (t.progress && articleRect) {
    var span = articleRect.height - (viewBottom - viewTop);
    var pct = span > 0 ? (viewTop - articleRect.top) / span : 1;
    t.progress.textContent = Math.round(Math.max(0, Math.min(1, pct)) * 100) + '%';
  }

  // Keep the current link visible inside a scrollable TOC (without moving the page)
  var cur = current >= 0 ? t.items[current].link : null;
  if (cur && cur !== t.lastCurrent && t.box && t.box.scrollHeight > t.box.clientHeight + 1) {
    var boxRect = t.box.getBoundingClientRect(), r = cur.getBoundingClientRect();
    if (r.top < boxRect.top + 24 || r.bottom > boxRect.bottom - 24) {
      t.box.scrollTo({ top: t.box.scrollTop + (r.top - boxRect.top) - boxRect.height / 3, behavior: 'smooth' });
    }
  }
  t.lastCurrent = cur;
}
window.addEventListener('scroll', scheduleTocUpdate, { passive: true });
window.addEventListener('resize', scheduleTocUpdate);

// Unfold any collapsed headings hiding el, so anchor jumps land on it
function revealFolded(el) {
  if (!el || el.getClientRects().length) return;
  var level = /^H[1-6]$/.test(el.tagName) ? +el.tagName[1] : 7;
  for (var s = el.previousElementSibling; s && level > 1; s = s.previousElementSibling) {
    if (!/^H[1-6]$/.test(s.tagName)) continue;
    var l = +s.tagName[1];
    if (l < level) {
      if (s.classList.contains('collapsed')) s.click();
      level = l;
    }
  }
}
function scrollToAnchor(el, smooth) {
  revealFolded(el);
  var offset = 3 * 16 + 10; // nav height + padding
  var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: top, behavior: smooth === false ? 'auto' : 'smooth' });
}

// ─── Content tree: expand/collapse, keyboard nav, current item ───
var TREE_STATE_KEY = 'tree-expanded';
function readTreeState() {
  try { return JSON.parse(localStorage.getItem(TREE_STATE_KEY) || '[]'); } catch (e) { return []; }
}
// Per-path update, so expanding nodes in one tree never forgets another tree's
function writeTreeState(path, expanded) {
  var paths = readTreeState();
  var i = paths.indexOf(path);
  if (expanded && i < 0) paths.push(path);
  if (!expanded && i >= 0) paths.splice(i, 1);
  try { localStorage.setItem(TREE_STATE_KEY, JSON.stringify(paths)); } catch (e) { }
}
window.treeSetCollapsed = function (item, collapsed) {
  item.classList.toggle('collapsed', collapsed);
  var btn = item.querySelector(':scope > .tree-row > .tree-toggle');
  if (btn) btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
};
function treeToggle(item, collapsed) {
  if (collapsed === undefined) collapsed = !item.classList.contains('collapsed');
  window.treeSetCollapsed(item, collapsed);
  var path = item.getAttribute('data-path');
  if (path) writeTreeState(path, !collapsed);
}
// Without animation (state restore, SPA swaps)
function treeInstant(tree, fn) {
  tree.classList.add('tree-instant');
  fn();
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { tree.classList.remove('tree-instant'); });
  });
}
function restoreTreeState() {
  var expanded = readTreeState();
  document.querySelectorAll('.content-tree').forEach(function (tree) {
    treeInstant(tree, function () {
      tree.querySelectorAll('.tree-item.collapsed[data-path]').forEach(function (item) {
        if (expanded.indexOf(item.getAttribute('data-path')) >= 0) window.treeSetCollapsed(item, false);
      });
    });
  });
}
// Move .tree-current to path and mark (and open) the branch leading to it
function markTreeCurrent(root, path) {
  root.querySelectorAll('.tree-current, .tree-ancestor').forEach(function (n) {
    n.classList.remove('tree-current', 'tree-ancestor');
  });
  root.querySelectorAll('.tree-link[aria-current]').forEach(function (a) { a.removeAttribute('aria-current'); });
  if (!path) return;
  var el = null;
  root.querySelectorAll('.tree-item[data-path]').forEach(function (n) {
    if (!el && n.getAttribute('data-path') === path) el = n;
  });
  if (!el) return;
  el.classList.add('tree-current');
  var link = el.querySelector(':scope > .tree-row > .tree-link');
  if (link) link.setAttribute('aria-current', 'page');
  for (var p = el.parentElement.closest('.tree-item'); p && root.contains(p); p = p.parentElement.closest('.tree-item')) {
    p.classList.add('tree-ancestor');
    if (p.classList.contains('collapsed')) window.treeSetCollapsed(p, false);
  }
}
// Scroll the sticky sidebar (not the page) so the current item is in view
function scrollTreeToCurrent() {
  var box = document.querySelector('.content-page-tree');
  if (!box || box.scrollHeight <= box.clientHeight + 1) return;
  var cur = box.querySelector('.tree-current > .tree-row');
  if (!cur) return;
  var b = box.getBoundingClientRect(), r = cur.getBoundingClientRect();
  if (r.top < b.top + 16 || r.bottom > b.bottom - 16) {
    box.scrollTop += (r.top - b.top) - b.height / 3;
  }
}

document.addEventListener('click', function (e) {
  var row = e.target.closest('.content-tree .tree-dir');
  if (!row || e.target.closest('a')) return;
  treeToggle(row.parentElement);
});

function treeRowFocusable(row) {
  return row.querySelector(':scope > .tree-link') || row.querySelector(':scope > .tree-toggle');
}
function treeVisibleRows(tree) {
  return Array.prototype.filter.call(tree.querySelectorAll('.tree-row'), function (r) {
    return treeRowFocusable(r) && !r.closest('.collapsed > .tree-children') && !r.closest('.tree-item.hidden');
  });
}
// Arrow keys: Up/Down move between visible rows, Right opens/enters, Left closes/goes to parent
document.addEventListener('keydown', function (e) {
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) < 0) return;
  var row = e.target.closest && e.target.closest('.content-tree .tree-row');
  if (!row) return;
  var tree = row.closest('.content-tree');
  var item = row.parentElement;
  var isBranch = row.classList.contains('tree-dir');
  var collapsed = item.classList.contains('collapsed');
  var target = null;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    var rows = treeVisibleRows(tree);
    target = rows[rows.indexOf(row) + (e.key === 'ArrowDown' ? 1 : -1)];
  } else if (e.key === 'ArrowRight') {
    if (isBranch && collapsed) treeToggle(item, false);
    else if (isBranch) target = item.querySelector('.tree-children .tree-row');
  } else {
    if (isBranch && !collapsed) treeToggle(item, true);
    else {
      var parent = item.parentElement.closest('.tree-item');
      if (parent && tree.contains(parent)) target = parent.querySelector(':scope > .tree-row');
    }
  }
  e.preventDefault();
  if (target && treeRowFocusable(target)) treeRowFocusable(target).focus();
});

// ─── Giscus lazy loader ───
// Loads the giscus iframe only when the comments container scrolls into view
// (IntersectionObserver with 300px preload margin). Falls back to immediate
// load when IntersectionObserver is unavailable.
var _giscusBreakpoint = 900;
var _giscusStarted = false;
window.loadGiscusIntoVisible = function () {
  var wide = document.getElementById('giscus-container-wide');
  var narrow = document.getElementById('giscus-container-narrow');
  // Pick the visible container by viewport width (avoids offsetParent forced reflow)
  var isWide = window.innerWidth >= _giscusBreakpoint;
  var c = (isWide ? wide : narrow) || wide || narrow || document.getElementById('giscus-container');
  if (!c) return;
  // If Giscus is already in the right container, do nothing
  var existing = document.querySelector('iframe.giscus-frame');
  if (existing) {
    var parent = existing.closest('#giscus-container-wide, #giscus-container-narrow, #giscus-container');
    if (parent === c) return;
  }
  // Clear both containers, load into the visible one
  if (wide) wide.innerHTML = '';
  if (narrow) narrow.innerHTML = '';
  c.appendChild(createGiscusScript());
}
function initGiscusLazyLoad() {
  var container = document.getElementById('giscus-container-wide') ||
    document.getElementById('giscus-container-narrow') ||
    document.getElementById('giscus-container');
  if (!container) return;
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          obs.disconnect();
          _giscusStarted = true;
          window.loadGiscusIntoVisible();
        }
      });
    }, { rootMargin: '300px' }); // preload slightly before scrolled into view
    obs.observe(container);
  } else {
    // No IntersectionObserver support — load immediately (robust fallback)
    _giscusStarted = true;
    window.loadGiscusIntoVisible();
  }
}
initGiscusLazyLoad();
// Re-arm the observer after view transitions (containers are recreated)
window.addEventListener('yt:load', function () { _giscusStarted = false; initGiscusLazyLoad(); });

// Reload Giscus when crossing the narrow/wide breakpoint (only if already loaded)
var _giscusWasWide = window.innerWidth >= _giscusBreakpoint;
window.addEventListener('resize', function () {
  var isWide = window.innerWidth >= _giscusBreakpoint;
  if (isWide !== _giscusWasWide) {
    _giscusWasWide = isWide;
    if (_giscusStarted) {
      clearTimeout(window._giscusResizeTimer);
      window._giscusResizeTimer = setTimeout(window.loadGiscusIntoVisible, 150);
    }
  }
});

// ─── Hamburger menu (mobile) ───
window.toggleHamburger = function () {
  var menu = document.getElementById('topnav-mobile');
  if (menu) menu.classList.toggle('open');
};

// ─── Init foldable headings + TOC tracking + sidebar offsets ───
function initArticleFeatures() {
  initFoldableHeadings();
  initTocTracking();
  initSidebarOffsets();
  scrollTreeToCurrent();
}
// Measure article header height and set CSS variable for sidebar offset
function initSidebarOffsets() {
  var title = document.querySelector('.article-title');
  if (!title) return;
  var main = document.querySelector('.content-page-main');
  if (!main) return;
  if (window.innerWidth < 1280) {
    document.documentElement.style.removeProperty('--sidebar-offset');
    return;
  }
  var titleRect = title.getBoundingClientRect();
  var mainRect = main.getBoundingClientRect();
  var cs = getComputedStyle(title);
  var marginBottom = parseFloat(cs.marginBottom) || 0;
  var titleBottom = titleRect.bottom + marginBottom;
  var offset = Math.max(0, titleBottom - mainRect.top);
  document.documentElement.style.setProperty('--sidebar-offset', offset + 'px');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initArticleFeatures);
} else {
  initArticleFeatures();
}
// Recalculate sidebar offsets on resize (crossing the 1280px breakpoint)
var resizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initSidebarOffsets, 100);
});

// ─── View Transitions: intercept internal links, fetch HTML, swap <main> ───
(function () {
  let cache = new Map();
  document.addEventListener('click', async (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:')) return;

    // Hash-only links: smooth scroll, don't intercept
    if (href.startsWith('#')) {
      e.preventDefault();
      var target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (target) {
        scrollToAnchor(target);
        history.replaceState(null, '', href);
      }
      return;
    }

    if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;

    // Separate app (portfolio) — full navigation, not a view transition
    if (href.startsWith('/portfolio')) return;

    // Same-page hash links (e.g. /c/page#section): scroll to hash, don't reload.
    // Only when the path is this page — another page may share the same id.
    var hrefPath = href.split('#')[0].replace(/\/+$/, '');
    if (href.startsWith('/') && href.includes('#') && hrefPath === location.pathname.replace(/\/+$/, '')) {
      var hash = href.slice(href.indexOf('#'));
      var targetEl = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (targetEl) {
        e.preventDefault();
        scrollToAnchor(targetEl);
        // Update URL without full page reload
        history.pushState({ url: href }, '', href);
        return;
      }
      // If target not found on current page, fall through to normal navigation
      // (the page will reload and the browser will scroll to the hash)
    }

    e.preventDefault();
    history.pushState({ url: href }, '', href);
    await loadPage(href);
  });

  window.addEventListener('popstate', async (e) => {
    var url = e.state && e.state.url ? e.state.url : location.pathname;
    // Handle hash in URL — scroll to it
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        scrollToAnchor(target);
        return;
      }
    }
    await loadPage(url);
  });

  // Handle initial page load with hash — scroll to target
  window.addEventListener('load', function () {
    if (location.hash) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        setTimeout(function () { scrollToAnchor(target); }, 100);
      }
    }
  });

  // Tree signature: innerHTML with user-state classes/attributes stripped
  // (current highlight, expansion state, JS wiring), so sibling-writeup
  // navigation with the same tree content counts as "same tree".
  function treeSignature(el) {
    var clone = el.cloneNode(true);
    // Cloudflare rewrites inline onclick handlers, stamping each element with
    // a per-page random data-cf-modified-* attribute. Strip them, otherwise
    // two fetches of the same tree never match and the tree re-renders (flashes)
    // on every navigation.
    clone.querySelectorAll('*').forEach(function (n) {
      Array.from(n.attributes).forEach(function (a) {
        if (a.name.indexOf('data-cf-modified') === 0) n.removeAttribute(a.name);
      });
    });
    clone.querySelectorAll('.tree-current, .tree-ancestor, .collapsed, .tree-instant').forEach(function (n) {
      n.classList.remove('tree-current', 'tree-ancestor', 'collapsed', 'tree-instant');
    });
    clone.querySelectorAll('[aria-expanded]').forEach(function (n) { n.removeAttribute('aria-expanded'); });
    clone.querySelectorAll('[aria-current]').forEach(function (n) { n.removeAttribute('aria-current'); });
    return clone.innerHTML;
  }

  async function loadPage(url) {
    const main = document.querySelector('main');
    if (!main) { window.location.href = url; return; }
    const TREE_SEL = '.content-page-tree, .dir-page-sidebar';
    // The tree/sidebar lives inside a layout wrapper (content-page-layout or
    // dir-page-layout); dim only the parts that will be replaced — never the tree.
    const layout = main.querySelector('.content-page-layout, .dir-page-layout') || main;
    Array.from(layout.children).forEach(function (child) {
      if (!child.matches(TREE_SEL)) child.classList.add('vt-loading');
    });
    try {
      let html = cache.get(url);
      if (!html) {
        const res = await fetch(url, { headers: { 'Accept': 'text/html' } });
        if (!res.ok) { window.location.href = url; return; }
        html = await res.text();
        cache.set(url, html);
        if (cache.size > 20) { const k = cache.keys().next().value; cache.delete(k); }
      }
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const newMain = doc.querySelector('main');
      if (!newMain) { window.location.href = url; return; }
      // Update title
      document.title = doc.querySelector('title')?.textContent || document.title;
      // Update meta description
      const newDesc = doc.querySelector('meta[name="description"]');
      if (newDesc) {
        const oldDesc = document.querySelector('meta[name="description"]');
        if (oldDesc) oldDesc.setAttribute('content', newDesc.getAttribute('content') || '');
      }
      // Update OG tags
      const newOgImage = doc.querySelector('meta[property="og:image"]');
      if (newOgImage) {
        const oldOgImage = document.querySelector('meta[property="og:image"]');
        if (oldOgImage) oldOgImage.setAttribute('content', newOgImage.getAttribute('content') || '');
      }
      const newOgUrl = doc.querySelector('meta[property="og:url"]');
      if (newOgUrl) {
        const oldOgUrl = document.querySelector('meta[property="og:url"]');
        if (oldOgUrl) oldOgUrl.setAttribute('content', newOgUrl.getAttribute('content') || '');
      }
      // Same-tree navigation (e.g. sibling writeups): keep the live tree node
      // in place (no detach, no re-render, no flicker), only replace its
      // siblings and move the highlight.
      const newLayout = newMain.querySelector('.content-page-layout, .dir-page-layout');
      const oldTree = layout.querySelector(TREE_SEL);
      const newTree = newLayout ? newLayout.querySelector(TREE_SEL) : null;
      const treeSame = !!(oldTree && newTree && treeSignature(oldTree) === treeSignature(newTree));
      if (treeSame) {
        // Where the tree sits among layout children (content pages: first,
        // dir pages: last) — preserve relative order when inserting siblings
        const treeIndex = Array.from(layout.children).indexOf(oldTree);
        const incoming = Array.from(newLayout.children).filter(function (c) { return c !== newTree; });
        // Remove everything except the kept tree
        Array.from(layout.children).forEach(function (child) { if (child !== oldTree) child.remove(); });
        // Insert the incoming siblings on the far side of the tree
        incoming.forEach(function (child) {
          if (treeIndex === 0) layout.appendChild(child);
          else layout.insertBefore(child, oldTree);
        });
        // Move the current-item highlight (before the dim lifts — no flash)
        const newCurrent = newTree.querySelector('.tree-current');
        markTreeCurrent(oldTree, newCurrent ? newCurrent.getAttribute('data-path') : '');
      } else {
        // Swap main content
        main.innerHTML = newMain.innerHTML;
      }
      // Update Giscus containers — wide is inside <main> (already swapped),
      // narrow is outside <main> and needs manual sync
      try {
        var oldNarrow = document.getElementById('giscus-container-narrow');
        if (oldNarrow && oldNarrow.parentElement) oldNarrow.parentElement.remove();
        var newNarrow = doc.querySelector('#giscus-container-narrow');
        if (newNarrow) {
          var footer = document.querySelector('footer');
          if (footer && footer.parentNode) {
            var div = document.createElement('div');
            div.className = 'comments-container comments-narrow';
            div.innerHTML = '<div id="giscus-container-narrow"></div>';
            footer.parentNode.insertBefore(div, footer);
          }
        }
        // Re-arm Giscus lazy loader — yt:load event (dispatched below) does this;
        // just reset the guard here in case loadPage fails before dispatching
        _giscusStarted = false;
      } catch (giscusErr) {
        console.warn('Giscus cleanup failed (non-fatal):', giscusErr);
      }
      main.querySelectorAll('.vt-loading').forEach(function (el) { el.classList.remove('vt-loading'); });
      if (treeSame) {
        // Animate only the incoming content; the sidebar tree stays untouched
        Array.from(layout.children).forEach(function (el) {
          if (el !== oldTree && el.classList) {
            el.classList.add('vt-enter');
            setTimeout(function () { el.classList.remove('vt-enter'); }, 200);
          }
        });
      } else {
        main.classList.add('vt-enter');
        setTimeout(() => main.classList.remove('vt-enter'), 200);
      }

      // Handle hash in the loaded URL — scroll to target
      if (url.includes('#')) {
        var hash = url.slice(url.indexOf('#'));
        var target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          setTimeout(function () { scrollToAnchor(target); }, 150);
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }

      // Notify scripts (search.js, etc.) that content was swapped.
      // Also restores tree expansion state (listener below).
      window.dispatchEvent(new Event('yt:load'));

      // Re-init article features (foldable headings, TOC tracking)
      initArticleFeatures();
    } catch (err) {
      console.error('View transition failed for', url, ':', err);
      window.location.href = url;
    }
  }

  // ─── Tree expansion state persistence (helpers above the IIFE) ───
  // ~~Restore on initial load~~ aaaactually no, just restore on yt:load (ie SPA style)
  // if (document.readyState === 'loading') {
  //   document.addEventListener('DOMContentLoaded', restoreTreeState);
  // } else {
  //   restoreTreeState();
  // }
  window.addEventListener('yt:load', restoreTreeState);

})();
