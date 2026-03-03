import type { LocalesDict } from './_def.types';

export const es = {
  _shared: {

  },
  home: {
    meta: {
      title: '',
      description: ''
    },
  },
  education: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Formación',
  },
  development: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Desarrollo',
  },
  consultancy: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Consultoría',
  },
} as const satisfies LocalesDict;