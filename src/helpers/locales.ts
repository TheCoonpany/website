import path from "path";
import * as LOCALES from "../locales";

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

export function getPageI18n(url: string): {
  lang: Locale;
  i18n: typeof LOCALES[Locale];
} {
  const lang = getPageLang(url);

  return {
    lang,
    i18n: LOCALES[lang]
  };
}