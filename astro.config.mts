import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://thecoonpany.com',
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
  },
  // https://docs.astro.build/en/guides/environment-variables/#basic-usage
  env: {
    schema: {

    }
  }
});
