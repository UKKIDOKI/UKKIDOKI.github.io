import eslintPlugin from "vite-plugin-eslint";
export default defineNuxtConfig({
  content: {
    markdown: {
      anchorLinks: false,
      // 앵커 링크 비활성화
    },
  },
  app: {
    baseURL: "/ukkidoki.github.io/",
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@invictus.codes/nuxt-vuetify",
  ],
  css: [
    "/assets/styles/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
  build: {
    // transpile: ["vuetify"],
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
  nitro: {},
  sourcemap: false,
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  //   highlight: {
  //     theme: "github-dark",
  //     preload: ["java", "javascript"],
  //   },
  //   markdown: {
  //     // https://github.com/rehypejs/rehype-external-links
  //     rehypePlugins: [
  //       [
  //         "rehype-external-links",
  //         {
  //           target: "_blank",
  //           rel: "noopener noreferer",
  //         },
  //       ],
  //     ],
  //   },
  // },
});
