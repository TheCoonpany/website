import type { PAGES } from './router.auto';

export type Route = typeof PAGES[number];

export interface SitemapEntry {
  readonly url: `/${string}`;
  readonly label: string;
}