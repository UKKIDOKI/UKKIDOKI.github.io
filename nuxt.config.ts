import { defineNuxtConfig } from "nuxt/config";
import eslintPlugin from "vite-plugin-eslint";

// nuxt.config.ts
export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  modules: ["@nuxt/content"],
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  // ...
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/global.scss" as *;',
        },
      },
    },
    plugins: [eslintPlugin()],
    define: {
      "process.env.DEBUG": false,
    },
  },
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
  // ...
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      preload: ["java", "javascript"],
    },
    markdown: {
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: "noopener noreferer",
          },
        ],
      ],
    },
  },
});
