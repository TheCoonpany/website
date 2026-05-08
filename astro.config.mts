import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://thecoonpany.github.io',
  base: process.env.NODE_ENV === 'production' ? '/website' : undefined,
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es']
  },
  build: {
  },
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      }
    }
  }
});
