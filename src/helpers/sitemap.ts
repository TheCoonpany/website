
import { en, es } from "../locales";
import type { Route } from '../locales/_def.types';
import type { Locale } from './locales';

interface SitemapEntry {
  readonly url: string;
  readonly label: string;
}

export const ROUTES = {
  es: {
    home: {
      url: `/es`,
      label: es.home.hero.header,
    },
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
    privacy_policy: {
      url: `/es/politica_privacidad`,
      label: es.privacy_policy.header,
    },
    legal_notice: {
      url: `/es/aviso_legal`,
      label: es.legal_notice.header,
    },
  },
  en: {
    home: {
      url: `/en`,
      label: en.home.hero.header,
    },
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
    privacy_policy: {
      url: `/en/privacy_policy`,
      label: en.privacy_policy.header,
    },
    legal_notice: {
      url: `/en/legal_notice`,
      label: en.legal_notice.header,
    }
  },
} as const satisfies Record<Locale, Record<Route, SitemapEntry>>;

export type Nav_Entry = keyof typeof ROUTES[Locale];