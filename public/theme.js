// Theme system — separate color and font/style themes
// Color: dark (default), light — toggle button
// Style: default (sans), papery (serif), terminal (monospace) — 3-button group
// Loaded before paint via inline script in shell.pug

(function() {
  var COLORS = ['dark', 'light'];
  var STYLES = ['default', 'papery', 'terminal'];
  var COLOR_ICONS = { dark: '\u25D0', light: '\u25D1' };  // ◐ ◑

  function getColor() { return localStorage.getItem('color') || 'dark'; }
  function getStyle() { return localStorage.getItem('style') || 'default'; }

  function applyTheme() {
    var color = getColor();
    var style = getStyle();
    var html = document.documentElement;

    // ── Scroll preservation: anchor to the content element at the viewport
    // top, so theme changes (different heights per theme) don't move the user.
    // Math (provably reversible):
    //   s_A, v_A = scroll, anchor viewport-top in old theme
    //   v_B      = anchor viewport-top in new theme at old scroll
    //   s_B = s_A + (v_B - v_A)   → anchor lands at the same viewport position
    // Switching back measures fresh values, so it returns exactly to s_A.
    var anchor = null, vA = 0, sA = window.pageYOffset;
    if (sA > 0 || document.body.scrollHeight > window.innerHeight) {
      var nav = document.querySelector('.topnav');
      var navH = nav ? nav.getBoundingClientRect().height : 0;
      var probeY = navH + 80;
      var probeX = Math.max(1, Math.min(window.innerWidth / 2, document.body.clientWidth - 20));
      if (probeY < window.innerHeight) {
        var el = document.elementFromPoint(probeX, probeY);
        // Skip fixed/sticky chrome (nav, sidebars) — need a real content node
        while (el && (el.classList.contains('topnav') || el.closest('.topnav') || el.classList.contains('content-page-toc') || el.closest('.content-page-toc') || el.classList.contains('content-page-tree') || el.closest('.content-page-tree'))) {
          el = el.parentElement;
        }
        if (el && el !== document.body && el !== document.documentElement) {
          anchor = el;
          vA = el.getBoundingClientRect().top;
        }
      }
    }

    // Remove all theme classes
    html.classList.remove('dark', 'light', 'papery', 'terminal', 'style-default', 'style-papery', 'style-terminal');
    // Apply color
    html.classList.add(color);
    // Apply style
    html.classList.add('style-' + style);
    if (style === 'terminal') html.classList.add('terminal');
    if (style === 'papery') html.classList.add('papery');

    // ── Restore scroll after layout settles (double rAF = after style recalc + layout)
    if (anchor) {
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          var vB = anchor.getBoundingClientRect().top;
          var target = sA + (vB - vA);
          var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          window.scrollTo(0, Math.max(0, Math.min(target, maxScroll)));
        });
      });
    }

    // Update color toggle button
    var cBtn = document.getElementById('color-btn');
    if (cBtn) {
      cBtn.textContent = COLOR_ICONS[color] || COLOR_ICONS.dark;
      cBtn.title = 'Color: ' + (color === 'dark' ? 'Dark' : 'Light') + ' — click to switch';
    }

    // Update style button group — highlight active
    var styleBtns = document.querySelectorAll('.theme-btn-mini[data-style]');
    for (var i = 0; i < styleBtns.length; i++) {
      var btn = styleBtns[i];
      if (btn.getAttribute('data-style') === style) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }

    syncGiscusTheme();
  }

  window.cycleColor = function() {
    var current = getColor();
    var idx = COLORS.indexOf(current);
    var next = COLORS[(idx + 1) % COLORS.length];
    localStorage.setItem('color', next);
    applyTheme();
  };

  window.setStyle = function(style) {
    if (STYLES.indexOf(style) < 0) return;
    localStorage.setItem('style', style);
    applyTheme();
  };

  // Backward compat — removed dead functions (cycleStyle, cycleTheme, setTheme)

  function syncGiscusTheme() {
    var color = getColor();
    var style = getStyle();
    var giscusTheme = window.location.origin + '/giscus/' + style + '-' + color + '.css';
    var iframe = document.querySelector('iframe.giscus-frame');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: giscusTheme } } }, 'https://giscus.app');
    }
  }

  new MutationObserver(syncGiscusTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  function initButtons() { applyTheme(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButtons);
  } else {
    initButtons();
  }

  window.addEventListener('yt:load', initButtons);
})();
