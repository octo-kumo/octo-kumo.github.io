import type { ContentDoc, ContentNavigationItem } from "./content";

export interface PageData {
  title: string;
  description: string;
  url: string;
  doc?: ContentDoc;
  docs?: ContentNavigationItem[];
  nav?: ContentNavigationItem[];
  [key: string]: any;
}

type PageRenderer = (data: PageData) => Promise<string> | string;

export interface RouteDefinition {
  path: string;
  render: PageRenderer;
}
