import type { LocalesDict } from './_def.types';

export const en = {
  _shared: {

  },
  app: {
    header: {
      switchLang: 'Switch language to'
    },
    footer: {
      madeWith: 'Made with'
    }
  },
  home: {
    meta: {
      title: 'The Coonpany | Consultancy, Development and Education in Software',
      description: ''
    },
    hero: {
      header: 'The Coonpany',
      subHeader: 'Consultancy, Development and Education in Software',
      description: 'We are a software consultancy company focused on providing high-quality services in software development, education and consultancy. We are passionate about technology and we are committed to helping our clients achieve their goals.'
    },
    services: {
      header: 'Our services',
      services: [
        {
          urlKey: 'consultancy',
          header: 'Consultancy services',
          description: 'Software consultancy services',
          action: 'Learn more'
        },
        {
          urlKey: 'development',
          header: 'Custom developments',
          description: 'Development of applications and software solutions',
          action: 'Learn more'
        },
        {
          urlKey: 'education',
          header: 'Technical education programs',
          description: 'Education programs in software development',
          action: 'Learn more'
        }
      ]
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
  about_us: {
    meta: {
      title: 'About us | The Coonpany',
      description: ''
    },
    header: 'About us',
  },
  legal_notice: {
    meta: {
      title: 'Legal Notice | The Coonpany',
      description: ''
    },
    header: 'Legal Notice',
  },
  privacy_policy: {
    meta: {
      title: 'Privacy Policy | The Coonpany',
      description: ''
    },
    header: 'Privacy Policy',
  },
} as const satisfies LocalesDict;