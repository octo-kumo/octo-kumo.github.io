import { readFileSync } from 'node:fs';

import yaml from 'js-yaml';
import pug from 'pug';

import { displayDocDates, docTitle } from '../framework/content';
import { collectFeedDocs } from '../framework/feed';
import { cacheVer } from '../framework/ssg';
import type { PageData } from '../framework/types';

const tpl = pug.compileFile('templates/home.pug');

const externalLinks = [
    {
        name: 'Portfolio',
        url: '/portfolio/',
        desc: '3D Three.js portfolio with project showcase',
        icon: '◉',
        opener: true,
    },
    {
        name: 'Tools',
        url: 'https://utilbox.yun.ng/',
        desc: 'Binary Search, Character Gen, Y Playground, Hanzi Recognizer, Depth Lathe',
        icon: '⚙',
    },
    { name: 'GitHub', url: 'https://github.com/octo-kumo', desc: 'Source code for most of the projects', icon: '⌘' },
];

const PAGE_SIZE = 5;

// ─── Projects showcase (shared data with the 3D portfolio) ───
// portfolio/src/data/projects.yaml is the single source of truth.
// Flags: `hidden: true` (never listed), `home: false` (portfolio only, kept
// off the homepage carousel).
interface RawProject {
    name: string;
    desc?: string;
    year?: string | number;
    month?: number;
    llm?: boolean;
    langs?: string[];
    keys?: string[];
    github?: string;
    link?: string | Record<string, string>;
    image?: string;
    video?: string;
    hidden?: boolean;
    home?: boolean;
}

export interface ShowcaseProject {
    name: string;
    year: string;
    llm: boolean;
    desc: string;
    tags: string[];
    href: string;
    links: { label: string; url: string; kind: string }[];
    image?: string;
    kind: 'image' | 'video' | 'text';
}

function loadProjects(): RawProject[] {
    try {
        return (yaml.load(readFileSync('portfolio/src/data/projects.yaml', 'utf8')) as RawProject[]) || [];
    } catch (e) {
        console.warn(`   ⚠ projects.yaml unreadable — homepage showcase empty: ${e}`);
        return [];
    }
}

// First paragraph, minus a leading bare URL line, capped for the card
function shortDesc(desc = ''): string {
    const para = desc
        .replace(/^\s*https?:\/\/\S+\s*/, '')
        .split(/\n\s*\n|\n/)[0]
        .trim();
    return para.length > 220 ? para.slice(0, 219).trimEnd() + '…' : para;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "2026" + month 3 → "Mar 2026"; "2023-now" + month 1 → "Jan 2023-now"
function fmtDate(year: string, month?: number): string {
    return month && month >= 1 && month <= 12 && year ? `${MONTHS[month - 1]} ${year}` : year;
}

function toShowcase(p: RawProject): ShowcaseProject {
    const link = typeof p.link === 'string' ? p.link : undefined;
    const github = p.github ? `https://github.com/${p.github}` : undefined;
    const video = p.video ? `https://www.youtube.com/watch?v=${p.video}` : undefined;
    const isJar = !!link?.endsWith('.jar');
    const links: ShowcaseProject['links'] = [];
    if (link) links.push({ label: isJar ? 'download' : 'visit', url: link, kind: isJar ? 'jar' : 'link' });
    if (github) links.push({ label: 'code', url: github, kind: 'github' });
    if (video) links.push({ label: 'video', url: video, kind: 'video' });
    const image = p.image || (p.video ? `https://i.ytimg.com/vi/${p.video}/hqdefault.jpg` : undefined);
    return {
        name: p.name,
        year: fmtDate(String(p.year ?? ''), p.month),
        llm: !!p.llm,
        desc: shortDesc(p.desc),
        tags: [...(p.langs || []), ...(p.keys || [])]
            .map((t) => t.toLowerCase())
            .filter((t, i, a) => a.indexOf(t) === i)
            .slice(0, 4),
        // Card click target: live link > source > video > portfolio
        href: (!isJar && link) || github || video || link || '/portfolio/',
        links,
        image,
        kind: p.image ? 'image' : p.video ? 'video' : 'text',
    };
}

function showcaseProjects(all: RawProject[]): ShowcaseProject[] {
    return (
        all
            .filter((p) => !p.hidden && p.home !== false)
            .map((p) => ({ p, y: String(p.year ?? ''), m: p.month ?? 0 }))
            // Newest first (year, then month), same ordering as the portfolio gallery (stable sort)
            .sort((a, b) => (a.y === b.y ? b.m - a.m : a.y < b.y ? 1 : -1))
            .map(({ p }) => toShowcase(p))
    );
}

// Most-used tags → quick-filter chips under the search box
function topTags(docs: any[], count: number): string[] {
    const freq = new Map<string, number>();
    for (const d of docs)
        for (const t of d.tags || []) {
            const k = String(t).toLowerCase();
            if (!/^[\w-]+$/.test(k)) continue; // search tag: filter is single-token
            if (k === 'blog' || k === 'writeup') continue; // already type: chips
            freq.set(k, (freq.get(k) || 0) + 1);
        }
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, count)
        .map(([t]) => t);
}

export async function render(data: PageData): Promise<string> {
    const docs = data.docs || [];
    // Shared with RSS/Atom feeds: filter hasContent, map to entry shape
    const contentDocs = collectFeedDocs(docs).map((d) => ({
        ...d,
        dateStr: displayDocDates(d),
    }));

    return tpl({
        recentDocs: contentDocs.slice(0, PAGE_SIZE),
        externalLinks,
        projects: showcaseProjects(loadProjects()),
        quickTags: topTags(contentDocs, 4),
        docTitle,
        displayDocDates,
        allDocsJson: JSON.stringify(contentDocs).replace(/</g, '\\u003c'),
        pageSize: PAGE_SIZE,
        cacheVer: cacheVer(),
    });
}
