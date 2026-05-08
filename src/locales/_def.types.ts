import type { Route } from '../router.types';

export type LocalesDict = {
  _shared: {

  },
  app: {
    header: {
      switchLang: string;
    },
    footer: {
      madeWith: string;
    };
  };
  home: {
    meta: Page_Meta;
    hero: {
      header: string;
      subHeader: string;
      description: string;
    };
    services: {
      header: string;
      services: readonly {
        urlKey: Route;
        header: string;
        description: string;
        action: string;
      }[];
    };
  },
  education: {
    meta: Page_Meta;
    header: string;
  },
  development: {
    meta: Page_Meta;
    header: string;
  },
  consultancy: {
    meta: Page_Meta;
    header: string;
  };
  about_us: {
    meta: Page_Meta;
    header: string;
  };
  legal_notice: {
    meta: Page_Meta;
    header: string;
  };
  privacy_policy: {
    meta: Page_Meta;
    header: string;
  };
};


export interface Page_Meta {
  readonly title: string;
  readonly description: string;
  readonly keywords?: string[];
}