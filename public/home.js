// Homepage extras: 3D project card stack and search quick filters.
// The carousel is laid out entirely in CSS from one number (--active, see
// style.css); this file only moves that number (buttons, keys, drag, autoplay).

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // CSS mod()/round() drive the per-card layout; very old engines get a JS fallback
  var CSS_MATH = !!(window.CSS && CSS.supports('width', 'mod(5px, 3px)') && CSS.supports('z-index', 'round(1.4)'));
  var observer = null;

  // Typed custom properties so --active / --spin can transition and animate.
  // (Done here, not with @property in style.css — the CSS minify pass strips it.)
  if (window.CSS && CSS.registerProperty) {
    [
      { name: '--active', syntax: '<number>', inherits: true, initialValue: '0' },
      { name: '--spin', syntax: '<angle>', inherits: false, initialValue: '0deg' },
    ].forEach(function (def) {
      try { CSS.registerProperty(def); } catch (_) { /* already registered */ }
    });
  }

  function initCarousel(root) {
    if (root.__wired) return;
    root.__wired = true;

    var stage = root.querySelector('.carousel-stage');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.pcard'));
    var bar = root.querySelector('.carousel-progress-bar');
    var current = root.querySelector('.carousel-current');
    var n = cards.length;
    if (!n || !stage) return;

    var target = 0;     // integer, unbounded (wraps via mod in CSS)
    var shown = 0;      // fallback mode: the value currently laid out
    var tween = 0;
    var suppressClick = false;

    function wrap(i) { return ((Math.round(i) % n) + n) % n; }
    function pad(i) { return (i < 9 ? '0' : '') + (i + 1); }

    // Current (possibly mid-transition) value of --active
    function liveValue() {
      if (!CSS_MATH) return shown;
      var v = parseFloat(getComputedStyle(root).getPropertyValue('--active'));
      return isNaN(v) ? target : v;
    }

    function layoutFallback(v) {
      shown = v;
      for (var i = 0; i < n; i++) {
        var off = ((((i - v + n / 2) % n) + n) % n) - n / 2;
        cards[i].style.setProperty('--off', off.toFixed(4));
        cards[i].style.zIndex = String(100 - Math.round(Math.abs(off) * 10));
      }
    }

    function render(v, animate) {
      if (CSS_MATH) {
        root.style.setProperty('--active', String(v));
        return;
      }
      cancelAnimationFrame(tween);
      if (!animate || reduceMotion.matches) { layoutFallback(v); return; }
      var from = shown, t0 = performance.now(), dur = 700;
      (function step(now) {
        var k = Math.min(1, (now - t0) / dur);
        layoutFallback(from + (v - from) * (1 - Math.pow(1 - k, 3)));
        if (k < 1) tween = requestAnimationFrame(step);
      })(t0);
    }

    function hydrate(i) {
      for (var d = -3; d <= 3; d++) {
        var card = cards[wrap(i + d)];
        card.querySelectorAll('img[data-src]').forEach(function (img) {
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
        });
      }
    }

    // Cards well outside the visible fan are display:none (fewer 3D layers).
    // Everything between `from` and `to` stays rendered so long jumps animate.
    var farTimer = 0;
    function updateFar(from, to) {
      var lo = Math.min(from, to) - 5, hi = Math.max(from, to) + 5;
      for (var i = 0; i < n; i++) {
        // nearest copy of card i to the range (cards repeat every n)
        var k = i + n * Math.round(((lo + hi) / 2 - i) / n);
        cards[i].classList.toggle('is-far', hi - lo < n && (k < lo || k > hi));
      }
    }

    function markActive() {
      var i = wrap(target);
      cards.forEach(function (c, j) {
        var on = j === i;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-hidden', on ? 'false' : 'true');
        c.querySelectorAll('a').forEach(function (a) { a.tabIndex = on ? 0 : -1; });
      });
      if (current) current.textContent = pad(i);
      hydrate(i);
    }

    function restartTimer() {
      if (!bar) return;
      root.classList.remove('is-playing');
      if (reduceMotion.matches) return;
      void bar.offsetWidth; // restart the CSS animation
      root.classList.add('is-playing');
    }

    function goTo(v, fromUser) {
      var from = liveValue();
      target = Math.round(v);
      updateFar(from, target);
      clearTimeout(farTimer);
      farTimer = setTimeout(function () { updateFar(target, target); }, 900);
      render(target, true);
      markActive();
      if (fromUser) restartTimer();
    }

    function step(dir) { goTo(target + dir, true); }

    // Shortest way round to card i
    function goToIndex(i) {
      var delta = i - wrap(target);
      if (delta > n / 2) delta -= n;
      if (delta < -n / 2) delta += n;
      goTo(target + delta, true);
    }

    // Autoplay: the progress bar's animation is the timer
    if (bar) bar.addEventListener('animationend', function () { step(1); });

    root.querySelectorAll('.carousel-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { step(parseInt(btn.getAttribute('data-dir'), 10) || 1); });
    });

    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { step(1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { step(-1); e.preventDefault(); }
      else if (e.key === 'Home') { goToIndex(0); e.preventDefault(); }
      else if (e.key === 'End') { goToIndex(n - 1); e.preventDefault(); }
      else if (e.key === 'Enter' && e.target === root) {
        var link = cards[wrap(target)].querySelector('.pcard-link');
        if (link) link.click();
      }
    });

    // Horizontal wheel / trackpad swipe
    var wheelLock = 0;
    stage.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 8) return;
      e.preventDefault();
      var now = Date.now();
      if (now < wheelLock) return;
      wheelLock = now + 450;
      step(e.deltaX > 0 ? 1 : -1);
    }, { passive: false });

    // Drag / swipe — moves --active continuously, then snaps with momentum
    var drag = null;
    stage.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      drag = { x: e.clientX, y: e.clientY, start: liveValue(), base: target, moved: false, id: e.pointerId, lastX: e.clientX, lastT: performance.now(), v: 0, value: 0 };
    });
    stage.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x;
      if (!drag.moved) {
        if (Math.abs(dx) < 6) return;
        if (Math.abs(e.clientY - drag.y) > Math.abs(dx)) { drag = null; return; } // vertical scroll
        drag.moved = true;
        root.classList.add('is-dragging');
        root.classList.remove('is-playing');
        try { stage.setPointerCapture(drag.id); } catch (_) { }
      }
      var now = performance.now();
      var dt = Math.max(1, now - drag.lastT);
      drag.v = 0.8 * ((e.clientX - drag.lastX) / dt) + 0.2 * drag.v;
      drag.lastX = e.clientX;
      drag.lastT = now;
      var unit = (cards[0].offsetWidth || 600) * 1.1; // front card tracks the finger
      // never more than one card away from where the gesture began
      drag.value = Math.max(drag.base - 1, Math.min(drag.base + 1, drag.start - dx / unit));
      updateFar(drag.value, drag.value);
      if (CSS_MATH) root.style.setProperty('--active', String(drag.value));
      else layoutFallback(drag.value);
    });
    function endDrag(e) {
      if (!drag || e.pointerId !== drag.id) return;
      if (drag.moved) {
        suppressClick = true;
        setTimeout(function () { suppressClick = false; }, 0);
        root.classList.remove('is-dragging');
        // One card per gesture: a far enough pull or a quick flick moves
        // exactly one step in that direction; otherwise snap back. A
        // cancelled gesture always snaps back.
        var pulled = drag.value - drag.base;
        var flick = e.type === 'pointerup' ? -drag.v : 0; // px/ms, + = towards next
        var dir = 0;
        if (Math.abs(pulled) > 0.2) dir = pulled > 0 ? 1 : -1;
        else if (Math.abs(flick) > 0.3) dir = flick > 0 ? 1 : -1;
        goTo(drag.base + dir, true);
      }
      drag = null;
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    // native image/link dragging would steal the gesture (pointercancel)
    stage.addEventListener('dragstart', function (e) { e.preventDefault(); });

    // Click a side card to bring it forward; swallow the click that ends a drag
    stage.addEventListener('click', function (e) {
      if (suppressClick) { e.preventDefault(); e.stopPropagation(); return; }
      var card = e.target.closest('.pcard');
      if (!card) return;
      var i = parseInt(card.getAttribute('data-index'), 10);
      if (i !== wrap(target)) {
        e.preventDefault();
        goToIndex(i);
      }
    }, true);

    // Image fade-in once decoded (also covers cached images)
    root.querySelectorAll('.pcard-img').forEach(function (img) {
      function done() { img.classList.add('is-loaded'); }
      function fail() { var m = img.closest('.pcard-media'); if (m) m.classList.add('is-broken'); }
      if (img.complete && img.naturalWidth) done();
      img.addEventListener('load', done);
      img.addEventListener('error', fail);
    });

    render(0, false);
    updateFar(0, 0);
    markActive();
    restartTimer();
  }

  function initQuickFilters() {
    var input = document.getElementById('doc-search');
    var chips = Array.prototype.slice.call(document.querySelectorAll('.quick-filter'));
    if (!input || !chips.length || input.__quickWired) return;
    input.__quickWired = true;
    function sync() {
      var v = input.value.trim();
      chips.forEach(function (c) { c.classList.toggle('active', c.getAttribute('data-q') === v); });
    }
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        input.value = c.getAttribute('data-q');
        input.dispatchEvent(new Event('input', { bubbles: true }));
        sync();
      });
    });
    input.addEventListener('input', sync);
    sync();
  }

  function init() {
    if (!document.getElementById('home-page')) return;
    // Pause autoplay while off screen (re-observed each init: view transitions swap the DOM)
    if (observer) observer.disconnect();
    if (!observer && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { en.target.classList.toggle('is-offscreen', !en.isIntersecting); });
      }, { threshold: 0.25 });
    }
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
      initCarousel(root);
      if (observer) observer.observe(root);
    });
    initQuickFilters();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('yt:load', init);
})();
