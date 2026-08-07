// Single source of truth for the site's canonical base URL.
// Everything domain-dependent (canonical, og:url, og:image, article:author,
// portfolio "back to site" link + writeups index default) derives from here.
// Override at build time with the SITE_URL env var — one place to change it.

export const DEFAULT_SITE_URL = "https://yun.ng";

export function siteUrl(): string {
  return process.env.SITE_URL || DEFAULT_SITE_URL;
}
