import path from "path";
import * as LOCALES from "../locales";
import type { Route } from '../locales/_def.types';

export const AVAILABLE_LOCALES = ['en', 'es'] as const;

export type Locale = typeof AVAILABLE_LOCALES[number];

export const DEFAULT_LOCALE = 'es';

export function getPageLang(url: string): Locale {
  const lang = path
    .dirname(url)
    .split("/")
    .pop();

  return AVAILABLE_LOCALES.some(l => l === lang)
    ? lang as 'en' | 'es'
    : DEFAULT_LOCALE;
}

export function getPageI18n<T extends Route>(url: string, route: T): {
  lang: Locale;
  locales: typeof LOCALES[Locale][T];
} {
  const lang = getPageLang(url);

  return {
    lang,
    locales: LOCALES[lang][route]
  };
}