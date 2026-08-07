# Portfolio

The 3D portfolio page (three.js), ported from the Vue/TresJS landing of
[octo-kumo/octo-kumo.github.io](https://github.com/octo-kumo/octo-kumo.github.io)
as hand-written Pug + CSS + TypeScript with vanilla three.js.

## Where it lives

Since the absorption into v2, `portfolio/` is a **plain directory** in the
yun-ng-v2 repo (no longer a submodule, no own package.json / node_modules):

- **Dependencies** — resolved upward from v2's `package.json` / `node_modules`
  (`three`, `js-yaml`, `pug`)
- **Fonts & assets** — shared from v2's `public/`: `/fonts/fonts.css` (+ the
  Space Grotesk variable font), `/fonts/space_font.json` (3D typeface),
  `/favicon.ico`, `/apple-touch-icon.png`, `/img/pfp.square.small.jpg`
- **Build** — v2's `build.ts` runs `cd portfolio && bun build.ts` and copies
  `dist/` into `dist/portfolio/`, so v2's minify + chmod pass covers it

There is no standalone dev server; serve the site through v2's docker
compose (http://localhost:8080/portfolio/).

## Build

```sh
cd portfolio && bun build.ts     # → dist/
```

Build-time config (optional):

| Env            | Default                              | Purpose                           |
| -------------- | ------------------------------------ | --------------------------------- |
| `BASE_PATH`    | `portfolio`                          | URL path prefix ("" = site root)  |
| `SITE_URL`     | `https://yun.ng`                    | "Back to main site" target        |
| `WRITEUPS_URL` | `https://yun.ng/search-index.json`  | Writeups search index             |
| `VIEWS_URL`    | `https://views.yun.ng`               | Hero pageview counter API         |

## Content

- **Projects** — `src/data/projects.yaml` (add entries there)
- **Writeups fallback** — `src/data/writeups.yaml` (used when the live search
  index is unreachable)

## Quality ladder

`src/scripts/gfx.ts` walks an adaptive quality ladder (ultra → low) from a
rolling frame-time sensor: pixel ratio, SMAA and the star count (1200 stars at
ultra, stepping down to 400) adjust automatically so weak machines degrade
gracefully.
