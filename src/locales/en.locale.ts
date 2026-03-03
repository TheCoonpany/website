import type { LocalesDict } from './_def.types';

export const en = {
  _shared: {

  },
  home: {
    meta: {
      title: '',
      description: ''
    }
  },
  education: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Education',
  },
  development: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Development',
  },
  consultancy: {
    meta: {
      title: '',
      description: ''
    },
    header: 'Consultancy',
  },
} as const satisfies LocalesDict;