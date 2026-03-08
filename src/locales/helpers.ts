import path from "path";
import * as LOCALES from ".";

import type { Route } from '../router.types';
import type { PageI18n_Props, Locale } from './helpers.types';

export const AVAILABLE_LOCALES = ['en', 'es'] as const;

export const DEFAULT_LOCALE = 'es';

export function getPageI18n<T extends Route>(url: string, route: T): PageI18n_Props<T> {
  const lang = getPageLang(url);
  const locales = LOCALES[lang][route];

  console.log(url);

  return {
    lang,
    meta: { ...locales.meta, url },
    locales,
  };
}

function getPageLang(url: string): Locale {
  const lang = path
    .dirname(url)
    .split("/")
    .pop();

  return AVAILABLE_LOCALES.some(l => l === lang)
    ? lang as Locale
    : DEFAULT_LOCALE;
}