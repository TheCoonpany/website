import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thecoonpany.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es']
  },
  build: {
  }
});
