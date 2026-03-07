import type { LocalesDict } from './_def.types';

export const es = {
  _shared: {

  },
  app: {
    header: {
      switchLang: 'Cambiar idioma'
    },
    footer: {
      madeWith: 'Hecho con'
    }
  },
  home: {
    meta: {
      title: 'The Coonpany | Consultoría, Desarrollo y Formación en Software',
      description: ''
    },
    hero: {
      header: 'The Coonpany',
      subHeader: 'Consultoría, Desarrollo y Formación en Software',
      description: 'Somos una empresa de consultoría de software enfocada en brindar servicios de alta calidad en desarrollo de software, formación y consultoría. Nos apasiona la tecnología y estamos comprometidos a ayudar a nuestros clientes a alcanzar sus objetivos.'
    }
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
  about_us: {
    meta: {
      title: 'Sobre nosotros | The Coonpany',
      description: ''
    },
    header: 'Sobre nosotros',
  },
  legal_notice: {
    meta: {
      title: 'Aviso Legal | The Coonpany',
      description: ''
    },
    header: 'Aviso Legal',
  },
  privacy_policy: {
    meta: {
      title: 'Política de Privacidad | The Coonpany',
      description: ''
    },
    header: 'Política de Privacidad',
  },
} as const satisfies LocalesDict;