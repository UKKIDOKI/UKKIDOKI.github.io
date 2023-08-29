import { defineNuxtConfig } from 'nuxt/config';
import eslintPlugin from 'vite-plugin-eslint';

// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [eslintPlugin()],
    define: {
      'process.env.DEBUG': false,
    },
  },
  ssr: true,
  // ...
});
