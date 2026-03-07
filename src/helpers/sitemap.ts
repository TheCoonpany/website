
import { en, es } from "../locales";
import type { Locale } from './locales';

interface SitemapEntry {
  readonly url: string;
  readonly label: string;
}

export const NAV_LABELS = {
  es: {
    consultancy: {
      url: `/es/consultoria`,
      label: es.consultancy.header,
    },
    development: {
      url: `/es/desarrollo`,
      label: es.development.header,
    },
    education: {
      url: `/es/formacion`,
      label: es.education.header,
    },
    about_us: {
      url: `/es/sobre_nosotros`,
      label: es.about_us.header,
    },
  },
  en: {
    consultancy: {
      url: `/en/consultancy`,
      label: en.consultancy.header,
    },
    development: {
      url: `/en/development`,
      label: en.development.header,
    },
    education: {
      url: `/en/education`,
      label: en.education.header,
    },
    about_us: {
      url: `/en/about_us`,
      label: en.about_us.header,
    },
  },
} as const satisfies Record<Locale, Record<string, SitemapEntry>>;

export type Nav_Entry = keyof typeof NAV_LABELS[Locale];