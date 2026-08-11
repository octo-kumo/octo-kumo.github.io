import { docTitle } from "./content";

// ─── Shared doc entry collection (homepage search list + RSS/Atom feeds) ───

export interface FeedEntry {
  path: string;      // content path, e.g. "/blog/2026-06-03"
  title: string;
  snippet: string;
  created?: string;
  updated?: string;
  tags: string[];
}

// Collect content docs (hasContent) into the entry shape the homepage
// search list uses. Feeds reuse this so entries stay consistent.
export function collectFeedDocs(docs: any[]): FeedEntry[] {
  return docs
    .filter((d: any) => d.hasContent === true)
    .map((d: any) => ({
      path: d.path,
      title: docTitle(d),
      snippet: d.snippet || d.description || "",
      created: d.created,
      updated: d.updated,
      tags: d.tags || [],
    }));
}

function xmlEscape(s: string): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc2822(d?: string): string {
  if (!d) return new Date(0).toUTCString();
  const t = new Date(d).getTime();
  return (Number.isNaN(t) ? new Date(0) : new Date(t)).toUTCString();
}

function iso(d?: string): string {
  if (!d) return new Date(0).toISOString();
  const t = new Date(d).getTime();
  return (Number.isNaN(t) ? new Date(0) : new Date(t)).toISOString();
}

// Sort newest-first by updated || created
export function sortFeedEntries(entries: FeedEntry[]): FeedEntry[] {
  return [...entries].sort((a, b) =>
    (b.updated || b.created || "").localeCompare(a.updated || a.created || ""));
}

// ─── RSS 2.0 ───
export function renderRSS(entries: FeedEntry[], siteUrl: string): string {
  const items = sortFeedEntries(entries)
    .map((e) => {
      const link = `${siteUrl}/c${e.path}`;
      const cats = e.tags.map((t) => `      <category>${xmlEscape(t)}</category>`).join("\n");
      return `    <item>
      <title>${xmlEscape(e.title)}</title>
      <link>${xmlEscape(link)}</link>
      <guid isPermaLink="true">${xmlEscape(link)}</guid>
      <pubDate>${rfc2822(e.updated || e.created)}</pubDate>
      <description>${xmlEscape(e.snippet)}</description>
${cats}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>云 — yun.ng</title>
    <link>${siteUrl}/</link>
    <description>Yun's CTF writeups, blog posts and HackTheBox writeups</description>
    <language>en</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

// ─── Atom 1.0 ───
export function renderAtom(entries: FeedEntry[], siteUrl: string): string {
  const sorted = sortFeedEntries(entries);
  const updated = iso(sorted[0]?.updated || sorted[0]?.created);
  const items = sorted
    .map((e) => {
      const link = `${siteUrl}/c${e.path}`;
      const cats = e.tags.map((t) => `      <category term="${xmlEscape(t)}"/>`).join("\n");
      return `  <entry>
    <title>${xmlEscape(e.title)}</title>
    <link href="${xmlEscape(link)}"/>
    <id>${xmlEscape(link)}</id>
    <updated>${iso(e.updated || e.created)}</updated>
    <published>${iso(e.created)}</published>
    <summary>${xmlEscape(e.snippet)}</summary>
${cats}
  </entry>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>云 — yun.ng</title>
  <link href="${siteUrl}/"/>
  <link rel="self" href="${siteUrl}/atom.xml"/>
  <updated>${updated}</updated>
  <id>${siteUrl}/</id>
  <author>
    <name>Yun</name>
  </author>
${items}
</feed>
`;
}
