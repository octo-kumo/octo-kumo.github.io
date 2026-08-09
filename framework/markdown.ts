import { Marked, type MarkedExtension, type TokenizerExtension, type RendererExtension, type Tokens } from "marked";
import { createHighlighter, type BundledLanguage } from "shiki";
import temml from "temml";
import { renderMermaidSVG, renderMermaidASCII } from 'beautiful-mermaid'

// ─── Shiki (lazy, slim) ───
let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

// Only languages actually used in content
const USED_LANGS: BundledLanguage[] = [
  "js", "ts", "python", "sh", "bash",
  "json", "yaml", "html", "css", "md",
  "cpp", "c", "rust", "java", "go",
  "php", "sql", "asm", "powershell",
  "jsx", "tsx", "scss", "kotlin", "csharp",
];

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["one-dark-pro"],
      langs: USED_LANGS,
    });
  }
  return highlighter;
}

// Map Shiki inline colors to short CSS class names (reduces HTML size)
const COLOR_MAP: Record<string, string> = {
  "#C678DD": "k", // keyword (purple)
  "#E5C07B": "t", // type/class (yellow)
  "#56B6C2": "o", // operator (cyan)
  "#D19A66": "n", // number (orange)
  "#ABB2BF": "p", // plain (default)
  "#61AFEF": "f", // function (blue)
  "#98C379": "s", // string (green)
  "#7F848E": "c", // comment (gray)
  "#E06C75": "v", // variable (red)
  "#BE5046": "e", // error (dark red)
};

function shikiToClasses(html: string): string {
  return html.replace(/style="color:([#0-9A-Fa-f]+)(?:;font-style:(\w+))?"/g, (_, color, style) => {
    const cls = COLOR_MAP[color.toUpperCase()] || "p";
    return `class="tok-${cls} ${style === "italic" ? "tok-i" : style === "bold" ? "tok-b" : ""}"`;
  });
}

// Wrap code block with header (filename, language, copy button)
function wrapCodeBlock(innerHtml: string, lang: string, filename: string): string {
  const copyBtn = `<button class="copy-btn" data-copy="" onclick="copyCode(this)" title="Copy">Copy</button>`;
  const headerParts: string[] = [];
  if (filename) headerParts.push(`<span class="code-filename">${filename.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")}</span>`);
  if (lang) headerParts.push(`<span class="code-lang">${lang}</span>`);
  const header = headerParts.length
    ? `<div class="code-header"><span class="code-header-info">${headerParts.join(" ")}</span><span class="code-header-spacer"></span>${copyBtn}</div>`
    : `<div class="code-header"><span class="code-header-spacer"></span>${copyBtn}</div>`;
  // Store raw text for copying in a data attribute (decoded)
  return `<div class="code-block">${header}<pre><code>${innerHtml}</code></pre></div>\n`;
}

// ─── Math extension for marked (temml, server-side) ───
// Based on marked-katex-extension approach: tokenize $...$ and $$...$$ at parse time
// so code blocks are never touched (they're already separate tokens).

interface MathToken extends Tokens.Generic {
  type: "inlineMath" | "blockMath";
  text: string;
  displayMode: boolean;
}

// Inline: $...$ or $$...$$ on a single line (not across newlines)
// Must not match $$ at start (that's block). Must be followed by non-$, non-digit-start
const inlineMathRule = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/;

// Block: $$\n...\n$$ on its own lines
const blockMathRule = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;

/* even though this might look expansive, its fine, the impact on build time seems to be unmeasurable */
function validateMath(text: string, displayMode: boolean): boolean {
  try {
    temml.__parse(text, { displayMode, throwOnError: true });
    return true;
  } catch (e) {
    return false;
  }
}


function mathExtension(): MarkedExtension {
  return {
    extensions: [
      // Block math: $$\n...\n$$
      {
        name: "blockMath",
        level: "block",
        tokenizer(src: string) {
          const match = src.match(blockMathRule);
          if (match && validateMath(match[2].trim(), true)) {
            return {
              type: "blockMath",
              raw: match[0],
              text: match[2].trim(),
              displayMode: true,
            } as MathToken;
          }
          return undefined;
        },
        renderer(token: Tokens.Generic) {
          const t = token as MathToken;
          try {
            return temml.renderToString(t.text, { displayMode: true, throwOnError: true })
              .replace(/<span class="tml-eqn"><\/span>/g, '') // dumb temml adding span in mathml, also dumb minify collapsing the span and breaking entire page
              + "\n";
          } catch (e) {
            console.warn("temml block math failed:", e);
            console.log(t);
            return `<p>$$${t.text}$$</p>\n`;
          }
        },
      } as TokenizerExtension & RendererExtension,
      // Inline math: $...$ or $$...$$
      {
        name: "inlineMath",
        level: "inline",
        start(src: string): number | undefined {
          let idx = src.indexOf("$");
          while (idx !== -1) {
            const rest = src.substring(idx);
            const m = rest.match(inlineMathRule);
            if (m && validateMath(m[2].trim(), m[1].length === 2)) return idx;
            // Skip to next $ and try again
            idx = src.indexOf("$", idx + 1);
          }
          return undefined;
        },
        tokenizer(src: string) {
          const match = src.match(inlineMathRule);
          if (match) {
            const text = match[2].trim();
            if (/^\s*\d/.test(text)) return undefined;
            if (!/[a-zA-Z\\^_=+\-\d]/.test(text)) return undefined;
            if (!validateMath(text, match[1].length === 2)) return undefined;
            return {
              type: "inlineMath",
              raw: match[0],
              text,
              displayMode: match[1].length === 2,
            } as MathToken;
          }
          return undefined;
        },
        renderer(token: Tokens.Generic) {
          const t = token as MathToken;
          try {
            return temml.renderToString(t.text, { displayMode: t.displayMode, throwOnError: true })
              .replace(/<span class="tml-eqn"><\/span>/g, '') // dumb temml adding span in mathml, also dumb minify collapsing the span and breaking entire page
              ;
          } catch (e) {
            console.log(t);
            console.warn("temml inline math failed:", e);
            return `$${t.text}$`;
          }
        },
      } as TokenizerExtension & RendererExtension,
    ],
  };
}

// ─── Marked (lazy) ───
let markedInstance: Marked | null = null;

async function getMarked() {
  if (markedInstance) return markedInstance;

  const hl = await getHighlighter();
  markedInstance = new Marked();
  markedInstance.use(mathExtension());
  markedInstance.use({
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const html = this.parser.parseInline(tokens);
        if (depth <= 4) {
          const text = tokens.map((t) => t.raw).join("");
          const id = text.toLowerCase()
            .replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
          return `<h${depth} id="${id}">${html}</h${depth}>\n`;
        }
        return `<h${depth}>${html}</h${depth}>\n`;
      },
      image({ href, title, text, tokens }: Tokens.Image): string {
        if (tokens) {
          text = this.parser.parseInline(tokens, this.parser.textRenderer);
        }
        if (href && href.startsWith("https://res.cloudinary.com/kumonochisanaka/image/upload")) {
          href = href.replace("https://res.cloudinary.com/kumonochisanaka/image/upload", "https://image.yun.ng/upload");
        }
        return `<img src="${href}" alt="${text}" title="${title}" />`;
      },
      code({ text, lang }: { text: string; lang?: string }) {
        // Parse lang field: "js [main.js]" → lang="js", filename="main.js"
        let actualLang = lang || "";
        let filename = "";
        const fm = actualLang.match(/^(\S+)\s*\[([^\]]*)\]/);
        if (fm) {
          actualLang = fm[1];
          filename = fm[2];
        }

        // Flag blocks: special 1-line box with copy button
        if (actualLang === "flag") {
          const flagText = text.trim();
          const escaped = flagText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
          // Split prefix{content} for coloring
          const flagMatch = escaped.match(/^([^{]*)(\{[^}]*\})$/);
          const flagHtml = flagMatch
            ? `<span class="flag-prefix">${flagMatch[1]}</span><span class="flag-content">${flagMatch[2]}</span>`
            : `<span class="flag-content">${escaped}</span>`;
          return `<div class="flag-box"><code class="flag-text">${flagHtml}</code><button class="copy-btn flag-copy" data-copy="${escaped}" onclick="copyCode(this)" title="Copy">Copy</button></div>\n`;
        }

        // Mermaid: render as <pre class="mermaid"> for client-side rendering
        if (actualLang === "mermaid") {
          return `<div class="termhide">${renderMermaidSVG(text, {
            font: 'var(--font-body)',
            fg: 'var(--fg)',
            bg: 'var(--bg)',
            border: 'var(--bd)', // DONT REMOVE
            line: 'var(--bd)',
            muted: 'var(--cb-text)',
            transparent: true,
          }).replace('--bg:var(--bg);--fg:var(--fg);', '') // DO NOT REMOVE
            .replace(/@import.+;\s*text\s*{[^}]*}/,
              'text{font-family:var(--font-body),system-ui,sans-serif}')
            /* THIS IS AN UNFORTUNATE HACK BECAUSE THE LIBRARY FORCES THIS, DO NOT REMOVE */
            }</div>\n<div class="code-block termonly mermaid"><pre><code>${renderMermaidASCII(text, {
              colorMode: 'none'
            })}</code></pre></div>\n`;
        }

        // Shiki highlight for known languages
        if (actualLang && text) {
          const loaded = hl.getLoadedLanguages();
          if (loaded.includes(actualLang)) {
            try {
              const highlighted = hl.codeToHtml(text, {
                lang: actualLang as BundledLanguage,
                theme: "one-dark-pro",
              });
              // Extract inner HTML and convert inline colors to CSS classes
              const innerMatch = highlighted.match(/<code[^>]*>([\s\S]*?)<\/code>/);
              const inner = innerMatch ? shikiToClasses(innerMatch[1]) : text;
              return wrapCodeBlock(inner, actualLang, filename);
            } catch (e) { console.warn("Shiki highlight failed for lang:", actualLang, e); }
          }
        }

        // Fallback: plain code block (no language or unknown)
        const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return wrapCodeBlock(escaped, actualLang, filename);
      },
    },
  });

  return markedInstance;
}

// ─── Types ───
interface RenderedDoc {
  html: string;
  toc: TocLink[];
}

export interface TocLink {
  id: string;
  text: string;
  depth: number;
}

// ─── Render ───
export async function renderMarkdown(raw: string): Promise<RenderedDoc> {
  const marked = await getMarked();

  // Extract TOC
  const toc: TocLink[] = [];
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(raw)) !== null) {
    const depth = match[1].length - 1;
    const text = match[2];
    const id = "content_" + hash(text).toString(16).padStart(8, "0");
    toc.push({ id, text, depth });
  }
  const html = await marked.parse(raw);
  let finalHtml = html;
  finalHtml = finalHtml.replace(/<p>:::([a-z-]+)\s*:::<\/p>/gi, "<!-- mdc: $1 -->");
  finalHtml = finalHtml.replace(/<p>::([a-z-]+)\s*::<\/p>/gi, "<!-- mdc: $1 -->");
  finalHtml = finalHtml.replace(/<p>:::([a-z-]+)<\/p>/gi, "<!-- mdc: $1 -->");
  finalHtml = finalHtml.replace(/<p>:youtube\{vid=([^}]+)\}<\/p>/gi, (_, vid) => {
    const safeVid = vid.replace(/[^a-zA-Z0-9_-]/g, "");
    return `<div class="youtube-embed" style="aspect-ratio:16/9;margin:1rem 0;"><lite-youtube videoid="${safeVid}" style="width:100%;height:100%;"></lite-youtube></div><script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.js"></script>`;
  });
  finalHtml = finalHtml.replace(/<p>:vimeo\{vid=([^}]+)\}<\/p>/gi, (_, vid) => {
    const safeVid = vid.replace(/[^a-zA-Z0-9_-]/g, "");
    return `<div style="aspect-ratio:16/9;margin:1rem 0;"><iframe src="https://player.vimeo.com/video/${safeVid}" style="width:100%;height:100%;" frameborder="0" allowfullscreen></iframe></div>`;
  });
  return { html: finalHtml, toc };
}

function hash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash >>> 0;
}

// ─── Display ───
export function displayDatetime(inputDate?: any): string {
  if (!inputDate) return "";
  const date = new Date(inputDate);
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" });

  if (date.toDateString() === now.toDateString()) return "Today " + timeFormatter.format(date);
  if (date.getFullYear() === now.getFullYear())
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long" }).format(date);
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(date);
}

export function displayDocDates(doc?: { created?: any; updated?: any }): string {
  if (!doc) return "";
  const a = displayDatetime(doc.created);
  const b = displayDatetime(doc.updated);
  return a === b ? a : `${a} · edited ${b}`;
}
