export interface LocalesDict {
  _shared: {

  },
  home: {
    meta: Page_Meta;
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
}

export interface Page_Meta {
  readonly title: string;
  readonly description: string;
  readonly keywords?: string[];
}