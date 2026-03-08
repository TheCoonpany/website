
import type * as LOCALES from ".";
import type { Route } from '../router.types';
import type { AVAILABLE_LOCALES } from './helpers';

export type Locale = typeof AVAILABLE_LOCALES[number];

export interface PageI18n_Props<T extends Route> {
  lang: Locale;
  meta: LOCALES.Page_Meta & { url: string; };
  locales: LOCALES.LocalesDict[T];
}