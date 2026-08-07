// Pagination + search-driven filtering for homepage
// Renders page selector with sliding window, animates page transitions

(function () {
  // Read docs from JSON script tag (no inline JS execution needed)
  var dataEl = document.getElementById('all-docs-data');
  var ALL_DOCS = [];
  var PAGE_SIZE = parseInt(dataEl?.getAttribute('data-page-size') || '5', 10);
  try {
    ALL_DOCS = dataEl ? JSON.parse(dataEl.textContent) : [];
  } catch (e) {
    console.error('Failed to parse all-docs-data:', e);
  }
  var currentPage = 1;
  var filteredDocs = ALL_DOCS;
  var searchMode = false;
  var searchSnippets = {}; // path -> snippet string (from search results)
  var currentQuery = ''; // current search query for highlighting

  function escapeHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Highlight matching terms in text, including tag:/ctf:/cat: filters
  function highlightTerms(text, query) {
    var escaped = escapeHtml(text);
    if (!query) return escaped;
    // Parse terms from query — respect quoted phrases
    var terms = [];
    var phraseRegex = /"([^"]+)"|(\S+)/g;
    var pm;
    while ((pm = phraseRegex.exec(query)) !== null) {
      var word = pm[1] || pm[2];
      if (!word || word.startsWith('type:') || word.startsWith('-') || word.length < 2) continue;
      if (word.startsWith('tag:')) terms.push(word.slice(4).toLowerCase());
      else if (word.startsWith('ctf:')) terms.push(word.slice(4).toLowerCase());
      else if (word.startsWith('cat:')) terms.push(word.slice(4).toLowerCase());
      else terms.push(word.toLowerCase());
    }
    var result = escaped;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(regex, '<span style="background:var(--primary);color:var(--bg);border-radius:2px;padding:0 1px;">$1</span>');
    }
    return result;
  }

  function renderDocItem(d, isLast) {
    var borderStyle = isLast ? '' : 'border-bottom:1px solid var(--bd);';
    var html = '<div class="doc-item" style="' + borderStyle + 'padding:0.75rem 0;">';
    // Title with highlighting
    var title = d.title || d.path?.split('/').pop()?.replace(/-/g, ' ') || d.path || '';
    var titleHtml = highlightTerms(title, currentQuery);
    html += '<a href="/c' + escapeHtml(d.path) + '" style="color:var(--primary);font-size:0.9rem;font-weight:600;text-decoration:none;">' + titleHtml + '</a>';
    // Show snippet: prefer search snippet, then doc.snippet, then doc.description
    var snippet = searchSnippets[d.path] || d.snippet || d.description || '';
    if (snippet) {
      var snippetHtml = highlightTerms(snippet, currentQuery);
      html += '<p style="margin:0.25rem 0 0 0;font-size:0.85rem;color:var(--footer-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + snippetHtml + '</p>';
    }
    // Date
    var dateStr = d.dateStr || '';
    if (d.created) {
      try { dateStr = dateStr || new Date(d.created).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }); } catch (e) { }
    }
    // Tags — include user tags + auto-extracted CTF slug and category
    var tagsHtml = '';
    var allTags = (d.tags || []).slice();
    // Extract CTF slug from path: /ctf/2026-tkbctf5/... → ctf:tkbctf5
    var pathParts = (d.path || '').split('/').filter(Boolean);
    if (pathParts[0] === 'ctf' && pathParts[1]) {
      var ctfSlug = pathParts[1].replace(/^\d+-/, '');
      allTags.push('ctf:' + ctfSlug);
      if (pathParts[2]) allTags.push('cat:' + pathParts[2]);
    }
    if (allTags.length > 0) {
      tagsHtml = ' · ' + allTags.map(function (t) { return '#' + highlightTerms(escapeHtml(t), currentQuery); }).join(' ');
    }
    html += '<div style="font-size:0.75rem;color:var(--footer-text);margin-top:0.25rem;">' + escapeHtml(dateStr) + tagsHtml + '</div>';
    html += '</div>';
    return html;
  }

  function renderPage(page) {
    var list = document.getElementById('doc-list');
    if (!list) return;
    var start = (page - 1) * PAGE_SIZE;
    var end = Math.min(start + PAGE_SIZE, filteredDocs.length);
    var html = '';
    for (var i = start; i < end; i++) {
      html += renderDocItem(filteredDocs[i], i === end - 1);
    }
    list.innerHTML = html;
  }

  function totalPages() {
    return Math.max(1, Math.ceil(filteredDocs.length / PAGE_SIZE));
  }

  // Render page selector with sliding window of 5
  function renderPagination() {
    var pg = document.getElementById('pagination');
    if (!pg) return;
    var tp = totalPages();
    if (tp <= 1) { pg.innerHTML = ''; return; }

    var cp = currentPage;
    var html = '';

    // First + prev
    if (cp > 1) {
      html += '<span class="pg-btn" data-page="1" style="cursor:pointer;color:var(--primary);padding:0.25rem 0.5rem;">&laquo;</span>';
      html += '<span class="pg-btn" data-page="' + (cp - 1) + '" style="cursor:pointer;color:var(--primary);padding:0.25rem 0.5rem;">&lsaquo;</span>';
    } else {
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.5rem;opacity:0.3;">&laquo;</span>';
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.5rem;opacity:0.3;">&lsaquo;</span>';
    }

    // Sliding window of 5 pages around current
    var start = Math.max(1, cp - 2);
    var end = Math.min(tp, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);

    // Leading ellipsis
    if (start > 1) {
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.25rem;">...</span>';
    }

    for (var i = start; i <= end; i++) {
      if (i === cp) {
        html += '<span style="font-weight:bold;padding:0.25rem 0.5rem;color:var(--fg);">' + i + '</span>';
      } else {
        html += '<span class="pg-btn" data-page="' + i + '" style="cursor:pointer;color:var(--primary);padding:0.25rem 0.5rem;">' + i + '</span>';
      }
    }

    // Trailing ellipsis
    if (end < tp) {
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.25rem;">...</span>';
    }

    // Next + last
    if (cp < tp) {
      html += '<span class="pg-btn" data-page="' + (cp + 1) + '" style="cursor:pointer;color:var(--primary);padding:0.25rem 0.5rem;">&rsaquo;</span>';
      html += '<span class="pg-btn" data-page="' + tp + '" style="cursor:pointer;color:var(--primary);padding:0.25rem 0.5rem;">&raquo;</span>';
    } else {
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.5rem;opacity:0.3;">&rsaquo;</span>';
      html += '<span style="color:var(--footer-text);padding:0.25rem 0.5rem;opacity:0.3;">&raquo;</span>';
    }

    pg.innerHTML = html;

    // Wire up page buttons
    var btns = pg.querySelectorAll('.pg-btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener('click', function () {
        var p = parseInt(this.getAttribute('data-page'));
        goToPage(p);
      });
    }
  }

  function goToPage(page) {
    var tp = totalPages();
    if (page < 1 || page > tp || page === currentPage) return;
    var list = document.getElementById('doc-list');
    if (!list) return;

    var direction = page > currentPage ? 1 : -1;

    // Slide out current items
    var items = list.querySelectorAll('.doc-item');
    for (var i = 0; i < items.length; i++) {
      items[i].style.transition = 'opacity 0.12s, transform 0.12s';
      items[i].style.opacity = '0';
      items[i].style.transform = 'translateX(' + (-direction * 20) + 'px)';
    }

    setTimeout(function () {
      currentPage = page;
      renderPage(page);
      renderPagination();

      // Slide in new items
      var newItems = list.querySelectorAll('.doc-item');
      for (var j = 0; j < newItems.length; j++) {
        newItems[j].style.opacity = '0';
        newItems[j].style.transform = 'translateX(' + (direction * 20) + 'px)';
        newItems[j].style.transition = 'none';
      }
      // Force reflow
      void list.offsetHeight;
      for (var k = 0; k < newItems.length; k++) {
        newItems[k].style.transition = 'opacity 0.15s, transform 0.15s';
        newItems[k].style.opacity = '1';
        newItems[k].style.transform = 'translateX(0)';
      }
    }, 130);
  }

  // Sort docs by date, newest first
  function sortByDateNewest(docs) {
    return docs.slice().sort(function (a, b) {
      var da = a.created || a.dateStr || '';
      var db = b.created || b.dateStr || '';
      return db.localeCompare(da);
    });
  }

  // Search integration — called by search.js when search results change
  window.__filterDocs = function (results) {
    searchSnippets = {}; // clear old snippets
    if (results === null) {
      // Search cleared — show all docs, sorted by date newest first
      searchMode = false;
      currentQuery = '';
      filteredDocs = sortByDateNewest(ALL_DOCS);
    } else {
      searchMode = true;
      filteredDocs = results.map(function (r) {
        // Store search snippet for display
        if (r.snippets && r.snippets.length > 0) {
          searchSnippets[r.doc.path] = r.snippets[0];
        }
        return r.doc;
      });
    }
    currentPage = 1;
    renderPage(1);
    renderPagination();
  };

  // Set current query for highlighting (called by search.js)
  window.__setSearchQuery = function (query) {
    currentQuery = query || '';
  };

  // Initial render — sort by date newest first
  function init() {
    filteredDocs = sortByDateNewest(ALL_DOCS);
    renderPage(1);
    renderPagination();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init on view transition
  window.addEventListener('yt:load', function () {
    var dataEl = document.getElementById('all-docs-data');
    if (dataEl) {
      try {
        ALL_DOCS = JSON.parse(dataEl.textContent);
      } catch (e) {
        console.error('Failed to parse all-docs-data on yt:load:', e);
      }
    }
    filteredDocs = sortByDateNewest(ALL_DOCS);
    searchSnippets = {};
    currentQuery = '';
    currentPage = 1;
    init();
  });
})();
