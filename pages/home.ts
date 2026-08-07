import type { PageData } from "../framework/types";
import { docTitle, displayDocDates } from "../framework/content";
import { cacheVer } from "../framework/ssg";
import pug from "pug";

const tpl = pug.compileFile("templates/home.pug");

const externalLinks = [
  { name: "Portfolio", url: "/portfolio/", desc: "3D Three.js portfolio with project showcase", icon: "\u25C9", opener: true },
  { name: "Tools", url: "https://utilbox.yun.ng/", desc: "Binary Search, Character Gen, Y Playground, Hanzi Recognizer, Depth Lathe", icon: "\u2699" },
];

const PAGE_SIZE = 5;

export async function render(data: PageData): Promise<string> {
  const docs = data.docs || [];
  // Only include docs with actual content (hasContent === true)
  // Exclude category-only pages and directory nodes
  const contentDocs = docs.filter((d: any) => d.hasContent === true).map((d: any) => ({
    path: d.path,
    title: docTitle(d),
    snippet: d.snippet || d.description || "",
    created: d.created,
    updated: d.updated,
    dateStr: displayDocDates(d),
    tags: d.tags || [],
  }));

  return tpl({
    recentDocs: contentDocs.slice(0, PAGE_SIZE),
    externalLinks,
    docTitle,
    displayDocDates,
    allDocsJson: JSON.stringify(contentDocs).replace(/</g, "\\u003c"),
    pageSize: PAGE_SIZE,
    cacheVer: cacheVer(),
  });
}
