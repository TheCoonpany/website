export interface LocalesDict {
  _shared: {

  },
  home: {
    meta: Page_Meta;
  },
  education: {
    meta: Page_Meta;
  },
  development: {
    meta: Page_Meta;
  },
  consultancy: {
    meta: Page_Meta;
  };
}

export interface Page_Meta {
  readonly title: string;
  readonly description: string;
}