import { objectEntries } from '../_shared';
import { ROUTES, type Route } from '../router';

import type { Icon_Name } from "../elements/Icon";
import type { Locale } from '../locales';

const HEADER_ICONS = {
  consultancy: "consultancy",
  development: "terminal",
  education: "education",
  about_us: "clip",
} as const satisfies Partial<Record<Route, Icon_Name>>;

export function HEADER_LINKS(lang: Locale) {
  return objectEntries(HEADER_ICONS)
    .map(([page, icon]) => {
      const route = ROUTES[lang][page];
      return {
        page,
        name: route.label,
        href: route.url,
        icon,
      };
    });
}
