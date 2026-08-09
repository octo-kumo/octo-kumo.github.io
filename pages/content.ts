import type { PageData } from "../framework/types";
import { docTitle } from "../framework/content";
import { renderContentPage } from "../framework/ssg";
import { displayDatetime } from "../framework/markdown";
import { computeStats, getAllCtfDocs, getEventDocs } from "../framework/stats";
import pug from "pug";

const tpl = pug.compileFile("templates/content.pug");

// Annotate each tree node with the number of writeups (content docs) in its
// subtree, so category/event nodes can show "· N writeups".
function annotateContentCounts(nodes: any[]): void {
  for (const n of nodes) {
    let count = n.hasContent ? 1 : 0;
    if (n.children?.length) {
      annotateContentCounts(n.children);
      count += n.children.reduce((s: number, c: any) => s + (c._contentCount || 0), 0);
    }
    n._contentCount = count;
  }
}

export async function render(data: PageData): Promise<string> {
  const flatDocs = data.docs || [];
  const nav = data.nav || [];
  const contentPath = data.url.replace(/^\/c/, "") || "/";

  const renderedDoc = data.doc as any;
  let docHtml = "";
  if (renderedDoc?.body?.html) {
    docHtml = renderContentPage(renderedDoc, flatDocs);
  } else if (contentPath === "/" || contentPath === "") {
    docHtml = '<div class="content-page"><h1>Content</h1></div>';
  }

  // Find children of this path
  const navChildren = findNavChildren(nav, contentPath);
  let children: any[] = [];
  if (navChildren && navChildren.length > 0) {
    children = navChildren;
  } else {
    children = flatDocs.filter((d: any) =>
      d.path.startsWith(contentPath + "/") &&
      !d.path.slice(contentPath.length + 1).includes("/")
    );
  }
  annotateContentCounts(children);

  // Sort children: created date desc, undefined at bottom
  children.sort((a: any, b: any) => {
    const da = a.created ? new Date(a.created).getTime() : 0;
    const db = b.created ? new Date(b.created).getTime() : 0;
    if (!da && db) return 1;
    if (da && !db) return -1;
    if (da !== db) return db - da;
    return (a.title || "").localeCompare(b.title || "");
  });

  // For content pages (leaf nodes with doc body), get sibling tree from parent
  let sidebarChildren: any[] = [];
  if (renderedDoc?.body?.html) {
    // This is a content/writeup page — get the CTF event's tree for the sidebar
    // Go up to the event level: /ctf/event/category/challenge → /ctf/event
    const parts = contentPath.split("/").filter(Boolean);
    let eventPath = "";
    if (parts[0] === "ctf" && parts.length >= 2) {
      eventPath = "/" + parts.slice(0, 2).join("/");
    } else if (parts[0] === "htb" && parts.length >= 2) {
      eventPath = "/" + parts.slice(0, 2).join("/");
    } else if (parts[0] === "blog") {
      // Blog: show all blog posts
      eventPath = "/blog";
    }

    if (eventPath && eventPath !== contentPath) {
      const eventChildren = findNavChildren(nav, eventPath);
      if (eventChildren && eventChildren.length > 0) {
        sidebarChildren = eventChildren;
      } else {
        sidebarChildren = flatDocs.filter((d: any) =>
          d.path.startsWith(eventPath + "/") &&
          !d.path.slice(eventPath.length + 1).includes("/")
        );
      }
      // Sort sidebar children
      sidebarChildren.sort((a: any, b: any) => {
        const da = a.created ? new Date(a.created).getTime() : 0;
        const db = b.created ? new Date(b.created).getTime() : 0;
        if (!da && db) return 1;
        if (da && !db) return -1;
        if (da !== db) return db - da;
        return (a.title || "").localeCompare(b.title || "");
      });
      annotateContentCounts(sidebarChildren);
    }
  }

  // Compute statistics for CTF pages
  let statsData: any = null;
  const isCtfIndex = contentPath === "/ctf";
  const isCtfEvent = /^\/(ctf|htb)\/[^/]+$/.test(contentPath);

  if (isCtfIndex || isCtfEvent) {
    let ctfDocs: any[];
    if (isCtfIndex) {
      ctfDocs = getAllCtfDocs(flatDocs);
    } else {
      ctfDocs = getEventDocs(flatDocs, contentPath);
    }
    statsData = computeStats(ctfDocs);
  }

  // Determine if tree should be fully expanded (CTF event pages)
  const expandAll = isCtfEvent;

  // Determine if this is a leaf content page (writeup) vs directory page
  // A leaf page has a doc body AND no nav children of its own
  const isLeafContent = !!(renderedDoc?.body?.html && (!navChildren || navChildren.length === 0));
  // Blog & HTB section roots keep the tree on the LEFT (content-page layout)
  // so SPA nav from /c/blog → post doesn't flip the tree to the right
  const treeLeft = isLeafContent || contentPath === "/blog" || contentPath === "/htb";
  // SEO: leaf writeups are "article" pages, everything else is "website"
  (data as any).ogType = isLeafContent ? "article" : "website";

  return tpl({
    docHtml,
    children: sidebarChildren.length > 0 ? sidebarChildren : children,
    docTitle,
    displayDatetime,
    statsData,
    expandAll,
    treeLeft,
    isCatalogPage: contentPath === "/ctf",
    tocLinks: renderedDoc?.body?.toc || [],
    showComments: data.url?.startsWith("/c/") && !!renderedDoc?.body?.html,
    currentPath: contentPath,
    cacheVer: process.env.CACHE_VER || "0",
  });
}

function findNavChildren(nav: any[], path: string): any[] | null {
  if (!nav) return null;
  if (path === "/" || path === "") return nav;
  const segments = path.split("/").filter(Boolean);
  let current = nav;
  for (const seg of segments) {
    const found = current.find((n: any) => n.path?.split("/").pop() === seg);
    if (!found) return null;
    current = found.children || [];
  }
  return current;
}
