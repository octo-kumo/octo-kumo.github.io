// Search module — lazy-loaded, IndexedDB-backed full-text search
// Fetches /search-index.json once, caches in IndexedDB, only re-fetches on version change

const DB_NAME = 'yun-search';
const STORE = 'docs';
const META = 'meta';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getCachedVersion() {
  try {
    const db = await openDB();
    return new Promise(resolve => {
      const tx = db.transaction(META, 'readonly');
      const req = tx.objectStore(META).get('version');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch { return null; }
}

async function setCachedVersion(v) {
  try {
    const db = await openDB();
    return new Promise(resolve => {
      const tx = db.transaction(META, 'readwrite');
      tx.objectStore(META).put(v, 'version');
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {}
}

async function getCachedDocs() {
  try {
    const db = await openDB();
    return new Promise(resolve => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get('docs');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch { return null; }
}

async function setCachedDocs(docs) {
  try {
    const db = await openDB();
    return new Promise(resolve => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(docs, 'docs');
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {}
}

let docs = null;
let loading = null;

async function loadDocs() {
  if (docs) return docs;
  if (loading) return loading;

  loading = (async () => {
    try {
      const res = await fetch('/search-index.json');
      if (!res.ok) throw new Error('no index');
      const data = await res.json();
      const remoteVersion = data.version;

      const cachedVersion = await getCachedVersion();
      if (cachedVersion === remoteVersion) {
        const cached = await getCachedDocs();
        if (cached && cached.length > 0) {
          docs = cached;
          return cached;
        }
      }

      // Version changed or no cache — store new data
      docs = data.entries;
      await setCachedDocs(data.entries);
      await setCachedVersion(remoteVersion);
      return data.entries;
    } catch {
      // Fallback: try cached docs even if fetch failed
      const cached = await getCachedDocs();
      if (cached) { docs = cached; return cached; }
      return [];
    }
  })();

  return loading;
}

// Simple full-text search with context snippets
// Supports: quoted phrases ("exact match"), -exclude, type:blog/writeup, tag:xss
function parseQuery(query) {
  const tokens = [];
  const filters = { type: null, tags: [], ctf: [], cat: [] };
  const regex = /"([^"]+)"|(\S+)/g;
  let match;
  while ((match = regex.exec(query)) !== null) {
    const phrase = match[1] || match[2];
    const lower = phrase.toLowerCase();
    // Check for type: filter
    const typeMatch = phrase.match(/^type:(\w+)$/i);
    if (typeMatch) {
      filters.type = typeMatch[1].toLowerCase();
      continue;
    }
    // Check for tag: filter
    const tagMatch = phrase.match(/^tag:(\w+)$/i);
    if (tagMatch) {
      filters.tags.push(tagMatch[1].toLowerCase());
      continue;
    }
    // Check for ctf: filter (matches CTF slug, e.g. ctf:tkbctf5 matches 2026-tkbctf5)
    const ctfMatch = phrase.match(/^ctf:(\w+)$/i);
    if (ctfMatch) {
      filters.ctf.push(ctfMatch[1].toLowerCase());
      continue;
    }
    // Check for cat: filter (matches category, e.g. cat:web)
    const catMatch = phrase.match(/^cat:(\w+)$/i);
    if (catMatch) {
      filters.cat.push(catMatch[1].toLowerCase());
      continue;
    }
    if (lower === 'and' || lower === 'or') continue;
    if (lower === 'not' || phrase.startsWith('-')) {
      const term = phrase.startsWith('-') ? phrase.slice(1).toLowerCase() : lower;
      if (term.length >= 2) tokens.push({ type: 'exclude', text: term });
    } else {
      tokens.push({ type: 'include', text: lower });
    }
  }
  return { tokens, filters };
}

function searchDocs(docs, query) {
  const parsed = parseQuery(query);
  const tokens = parsed.tokens;
  const filters = parsed.filters;
  if (tokens.length === 0 && !filters.type && filters.tags.length === 0 && filters.ctf.length === 0 && filters.cat.length === 0) return [];

  const includeTerms = tokens.filter(t => t.type === 'include').map(t => t.text);
  const excludeTerms = tokens.filter(t => t.type === 'exclude').map(t => t.text);

  const results = [];

  for (const doc of docs) {
    // Apply type filter
    if (filters.type) {
      const isBlog = (doc.path || '').startsWith('/blog/');
      const isWriteup = (doc.path || '').startsWith('/ctf/') || (doc.path || '').startsWith('/htb/');
      if (filters.type === 'blog' && !isBlog) continue;
      if (filters.type === 'writeup' && !isWriteup) continue;
    }
    // Apply tag filter
    if (filters.tags.length > 0) {
      const docTags = (doc.tags || []).map(t => t.toLowerCase());
      const hasAllTags = filters.tags.every(t => docTags.includes(t));
      if (!hasAllTags) continue;
    }
    // Apply ctf: filter (matches CTF slug, e.g. ctf:tkbctf5 matches 2026-tkbctf5)
    if (filters.ctf.length > 0) {
      const pathParts = (doc.path || '').split('/').filter(Boolean);
      const ctfSlug = pathParts[1] ? pathParts[1].replace(/^\d+-/, '').toLowerCase() : '';
      const hasAllCtf = filters.ctf.every(c => ctfSlug.includes(c));
      if (!hasAllCtf) continue;
    }
    // Apply cat: filter (matches category folder, e.g. cat:web)
    if (filters.cat.length > 0) {
      const pathParts = (doc.path || '').split('/').filter(Boolean);
      const cat = pathParts[2] ? pathParts[2].toLowerCase() : '';
      const hasAllCat = filters.cat.every(c => cat === c);
      if (!hasAllCat) continue;
    }
    const title = (doc.title || '').toLowerCase();
    const desc = (doc.description || '').toLowerCase();
    const text = (doc.text || '').toLowerCase();
    const tags = (doc.tags || []).join(' ').toLowerCase();

    // Exclude check: if any exclude term matches, skip this doc
    let excluded = false;
    for (const term of excludeTerms) {
      if (title.includes(term) || desc.includes(term) || text.includes(term) || tags.includes(term)) {
        excluded = true;
        break;
      }
    }
    if (excluded) continue;

    let score = 0;
    const snippets = [];
    let allMatched = true;

    for (const term of includeTerms) {
      let termScore = 0;
      if (title.includes(term)) termScore += 10;
      if (tags.includes(term)) termScore += 5;
      if (desc.includes(term)) termScore += 3;
      const idx = text.indexOf(term);
      if (idx >= 0) {
        termScore += 1;
        const start = Math.max(0, idx - 50);
        const end = Math.min(text.length, idx + term.length + 50);
        const snippet = (doc.text || '').slice(start, end);
        snippets.push((start > 0 ? '...' : '') + snippet + (end < text.length ? '...' : ''));
      }
      if (termScore === 0) {
        allMatched = false;
        break;
      }
      score += termScore;
    }

    // All include terms must match (AND semantics)
    // If only filters (no include terms), include all docs that match filters
    if (allMatched && (score > 0 || includeTerms.length === 0)) {
      results.push({ doc, score: score || 1, snippets: snippets.slice(0, 3) });
    }
  }

  // Sort by score (descending). When only filters (no search terms), sort by date newest first.
  if (includeTerms.length === 0) {
    results.sort((a, b) => (b.doc.created || '').localeCompare(a.doc.created || ''));
  } else {
    results.sort((a, b) => b.score - a.score);
  }
  return results.slice(0, 50);
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightTerm(text, query) {
  const escaped = escapeHtml(text);
  const parsed = parseQuery(query);
  const terms = parsed.tokens.filter(t => t.type === 'include').map(t => t.text);
  // Also highlight tag: filters
  const tagTerms = parsed.filters.tags.map(t => t.toLowerCase());
  const allTerms = [...terms, ...tagTerms];
  let result = escaped;
  for (const term of allTerms) {
    const regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    result = result.replace(regex, '<span class="highlighted">$1</span>');
  }
  return result;
}

// Initialize search UI — called after page load
async function initSearch() {
  const input = document.getElementById('doc-search');
  if (!input) return;

  let loaded = false;
  let searchTimer;

  // Auto-load search index 1s after page load
  setTimeout(function() {
    if (!loaded) {
      loadDocs().then(function(allDocs) {
        loaded = true;
      });
    }
  }, 1000);

  input.addEventListener('input', function() {
    var query = input.value.trim();
    if (!query) {
      // Clear search — show all docs via pagination
      if (window.__setSearchQuery) window.__setSearchQuery('');
      if (window.__filterDocs) window.__filterDocs(null);
      return;
    }

    if (!loaded) {
      loadDocs().then(function(allDocs) {
        loaded = true;
        doSearch(allDocs, query);
      });
      return;
    }

    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
      if (docs) doSearch(docs, query);
    }, 150);
  });

  function doSearch(allDocs, query) {
    var results = searchDocs(allDocs, query);
    // Set query for highlighting in pagination
    if (window.__setSearchQuery) window.__setSearchQuery(query);
    // Pass results to pagination (which handles rendering)
    if (window.__filterDocs) window.__filterDocs(results);
  }
}

// Auto-init on DOMContentLoaded, also export for view transitions
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}

// Re-init on view transition (when main content is swapped)
window.addEventListener('yt:load', initSearch);
