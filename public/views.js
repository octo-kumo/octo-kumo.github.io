// Page-view counter — fetches views.yun.ng/<path> and fills #article-views.
// Silent when the counter API is unavailable, absent element, or blocked.
(() => {
  const VIEWS_URL = "https://views.yun.ng";

  function loadViews() {
    const el = document.getElementById("article-views");
    if (!el) return;
    fetch(VIEWS_URL + location.pathname)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d) => {
        if (typeof d?.count === "number") {
          const n = d.count.toLocaleString();
          el.textContent = " · " + n + (d.count === 1 ? " view" : " views");
        }
      })
      .catch(() => {});
  }

  document.addEventListener("DOMContentLoaded", loadViews);
  // Re-count after view transitions (pathname changes without a full reload)
  window.addEventListener("yt:load", loadViews);
})();
