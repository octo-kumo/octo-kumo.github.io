# yun.ng

My website~

```
build.ts              Entry point: content → routes → SSG → fonts → OG images →
                      portfolio → minify → report
framework/
  content.ts          Content schema, YAML frontmatter, navigation tree
  markdown.ts         Marked + Shiki highlighting, mermaid/math extensions
  ssg.ts              Page rendering, shell layout, SEO/OG meta
  search-index.ts     Search index + short content-hash version
  stats.ts            Per-event CTF stats (writeup/point aggregates)
  og-image.ts         OG image generation (@napi-rs/canvas), logo + pills
  og-cache.ts         OG cache (manifest-driven, content-hash keyed)
  fonts.ts            Automatic woff2 subsetting (used-chars detection)
  build-report.ts     dist/build.txt
pages/
  home.ts             Homepage + search list + projects
  content.ts          Content pages (blog, CTF writeups, dir pages)
templates/            Pug templates (shell, article, tree, stats, home)
public/               style.css, JS, fonts, logo, favicon
portfolio/            The 3D portfolio
worker/               Dual-origin page-views worker (views.yun.ng)
```

## Build

```bash
bun install
bun run build
```

The build pipeline:

1. **Content** — submodules (`content/ctf`, `content/blog`, `content/htb`) are parsed into docs
2. **SSG** — every route rendered to `dist/` (shell + SEO/OG meta tags)
3. **Search index** — `dist/search-index.json` with a rolling content hash as version
4. **Fonts** — the committed full-latin woff2 sources in `public/fonts/full/` are
   subset to exactly the characters used by the site (pages + templates + UI);
   `fonts.css` unicode-ranges are regenerated from the actual subsets. Files are
   only rewritten when bytes change, so the repo stays clean on no-op builds
5. **OG images** — 1200×630 PNGs for every page, cached in `.og-cache/` and keyed
   by content + renderer hash (regenerates only when something changed)
6. **Portfolio** — `cd portfolio && bun build.ts` (deps resolve from v2's
   node_modules), output copied into `dist/portfolio/`
7. **Minify** — Go `minify` CLI over all HTML/CSS/JS/JSON, then `chmod -R a+rX dist/`
   (must run last — minify rewrites files with 600 perms)

## Content

Writeups live in the content submodules (standard Markdown + YAML frontmatter).
Frontmatter fields: `title`, `created`, `updated`, `tags`, `points`, `solves`,
`rank`, `team`, `description`. Date-only titles on blog posts are formatted
automatically (e.g. `2024-11-12` → "Tue, Nov 12, 2024").
