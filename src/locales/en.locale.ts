import type { LocalesDict } from './_def.types';

export const en = {
  _shared: {

  },
  home: {
    meta: {
      title: 'The Coonpany | Consultancy, Development and Education in Software',
      description: ''
    }
  },
  education: {
    meta: {
      title: 'Education | The Coonpany',
      description: ''
    },
    header: 'Education',
  },
  development: {
    meta: {
      title: 'Development | The Coonpany',
      description: ''
    },
    header: 'Development',
  },
  consultancy: {
    meta: {
      title: 'Consultancy | The Coonpany',
      description: ''
    },
    header: 'Consultancy',
  },
} as const satisfies LocalesDict;