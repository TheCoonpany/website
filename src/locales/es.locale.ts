import type { LocalesDict } from './_def.types';

export const es = {
  _shared: {

  },
  home: {
    meta: {
      title: 'The Coonpany | Consultoría, Desarrollo y Formación en Software',
      description: ''
    },
  },
  education: {
    meta: {
      title: 'Formación | The Coonpany',
      description: ''
    },
    header: 'Formación',
  },
  development: {
    meta: {
      title: 'Desarrollo | The Coonpany',
      description: ''
    },
    header: 'Desarrollo',
  },
  consultancy: {
    meta: {
      title: 'Consultoría | The Coonpany',
      description: ''
    },
    header: 'Consultoría',
  },
} as const satisfies LocalesDict;