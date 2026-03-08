import { objectEntries } from '../_shared';
import { ROUTES, type Route } from "../router";
import type { Icon_Name } from "../elements/Icon";
import type { Locale } from "../locales";


const LEGAL = [
  'legal_notice',
  'privacy_policy',
] as const satisfies readonly Route[];

export const SOCIAL = [
  {
    name: "GitHub",
    href: "https://github.com/TheCoonpany",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-coonpany",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TheCoonpany",
    icon: "youtube",
  },
  {
    name: "Email",
    href: "mailto:info@thecoonpany.dev",
    icon: "mail",
  },
] as const satisfies readonly {
  name: string;
  href: string;
  icon: Icon_Name;
}[];

export function LEGAL_LINKS(lang: Locale) {
  return objectEntries(ROUTES[lang])
    .filter(([k, _]) => LEGAL.some(x => x === k))
    .map(([, { url, label }]) => ({
      href: url,
      name: label,
    }));
}

