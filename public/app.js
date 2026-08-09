// Theme persistence is handled by theme.js + inline script in shell.pug
// This file: copy buttons, Giscus, view transitions, foldable headings, TOC tracking

// Site origin for Giscus CSS URLs (served from same origin)
var siteOrigin = window.location.origin;

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
function initFoldableHeadings() {
  var headings = document.querySelectorAll('article h1, article h2, article h3');
  headings.forEach(function (h) {
    // Only add fold handler to h2 and h3 (h1 is the article title, not foldable)
    if (h.tagName === 'H1' && h.classList.contains('article-title')) return;

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
    });
  });
}

// ─── TOC active section tracking with IntersectionObserver ───
function initTocTracking() {
  var tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length === 0) return;

  var headings = [];
  tocLinks.forEach(function (link) {
    var id = link.getAttribute('data-toc-id');
    var el = document.getElementById(id);
    if (el) headings.push({ el: el, link: link });
  });
  if (headings.length === 0) return;

  // Remove old active classes
  function setActive(id) {
    tocLinks.forEach(function (l) { l.classList.remove('active'); });
    var activeLink = document.querySelector('.toc-link[data-toc-id="' + id + '"]');
    if (activeLink) activeLink.classList.add('active');
  }

  // IntersectionObserver for scroll-based active tracking
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-80px 0px -70% 0px',
    threshold: 0
  });

  headings.forEach(function (h) {
    observer.observe(h.el);
  });

  // Smooth scroll on TOC click
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var id = link.getAttribute('data-toc-id');
      var el = document.getElementById(id);
      if (el) {
        var navHeight = 3; // rem
        var offset = navHeight * 16 + 10;
        var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        // Update URL hash without triggering jump
        history.replaceState(null, '', '#' + id);
      }
    });
  });
}

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
      var target = document.getElementById(href.slice(1));
      if (target) {
        var offset = 3 * 16 + 10; // nav height + padding
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        history.replaceState(null, '', href);
      }
      return;
    }

    if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;

    // Separate app (portfolio) — full navigation, not a view transition
    if (href.startsWith('/portfolio')) return;

    // Same-page hash links (e.g. /c/page#section): scroll to hash, don't reload
    if (href.startsWith('/') && href.includes('#')) {
      var hash = href.slice(href.indexOf('#'));
      var targetId = hash.slice(1);
      var targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        var offset2 = 3 * 16 + 10;
        var top2 = targetEl.getBoundingClientRect().top + window.pageYOffset - offset2;
        window.scrollTo({ top: top2, behavior: 'smooth' });
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
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        var offset = 3 * 16 + 10;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        return;
      }
    }
    await loadPage(url);
  });

  // Handle initial page load with hash — scroll to target
  window.addEventListener('load', function () {
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        setTimeout(function () {
          var offset = 3 * 16 + 10;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }, 100);
      }
    }
  });

  // Tree signature: innerHTML with user-state classes/attributes stripped
  // (current highlight, expansion state, JS wiring), so sibling-writeup
  // navigation with the same tree content counts as "same tree".
  function treeSignature(el) {
    var clone = el.cloneNode(true);
    clone.querySelectorAll('.tree-current').forEach(function (n) { n.classList.remove('tree-current'); });
    clone.querySelectorAll('.collapsed').forEach(function (n) { n.classList.remove('collapsed'); });
    clone.querySelectorAll('[data-state-wired]').forEach(function (n) { n.removeAttribute('data-state-wired'); });
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
        const newPath = newCurrent
          ? (newCurrent.getAttribute('data-path') || (newCurrent.querySelector('a') || {}).getAttribute?.('href') || '')
          : '';
        oldTree.querySelectorAll('.tree-current').forEach(function (n) { n.classList.remove('tree-current'); });
        if (newPath) {
          const el = oldTree.querySelector('[data-path="' + newPath + '"]');
          if (el) el.classList.add('tree-current');
        }
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
        var target = document.getElementById(hash.slice(1));
        if (target) {
          setTimeout(function () {
            var offset = 3 * 16 + 10;
            var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }, 150);
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }

      // Notify scripts (search.js, etc.) that content was swapped
      window.dispatchEvent(new Event('yt:load'));

      // Restore tree expansion state
      restoreTreeState();

      // Re-init article features (foldable headings, TOC tracking)
      initArticleFeatures();
    } catch (err) {
      console.error('View transition failed for', url, ':', err);
      window.location.href = url;
    }
  }

  // ─── Tree expansion state persistence ───
  var TREE_STATE_KEY = 'tree-expanded';
  function getTreeExpanded() {
    try { return JSON.parse(localStorage.getItem(TREE_STATE_KEY) || '[]'); } catch { return []; }
  }
  function saveTreeExpanded(paths) {
    try { localStorage.setItem(TREE_STATE_KEY, JSON.stringify(paths)); } catch { }
  }
  function restoreTreeState() {
    var expanded = getTreeExpanded();
    var items = document.querySelectorAll('.tree-item[data-path]');
    items.forEach(function (item) {
      var path = item.getAttribute('data-path');
      if (expanded.indexOf(path) >= 0) {
        item.classList.remove('collapsed');
      }
    });
    // Save state on every click in the tree
    var tree = document.querySelector('.content-tree');
    if (tree && !tree.dataset.stateWired) {
      tree.dataset.stateWired = '1';
      tree.addEventListener('click', function () {
        setTimeout(function () {
          var expanded = [];
          tree.querySelectorAll('.tree-item[data-path]').forEach(function (item) {
            if (!item.classList.contains('collapsed')) {
              expanded.push(item.getAttribute('data-path'));
            }
          });
          saveTreeExpanded(expanded);
        }, 50);
      });
    }
  }
  // ~~Restore on initial load~~ aaaactually no, just restore on yt:load (ie SPA style)
  // if (document.readyState === 'loading') {
  //   document.addEventListener('DOMContentLoaded', restoreTreeState);
  // } else {
  //   restoreTreeState();
  // }
  window.addEventListener('yt:load', restoreTreeState);

})();
