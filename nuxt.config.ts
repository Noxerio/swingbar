// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
  ],
  app: {
    head: {
      script: [
        {src: "https://identity.netlify.com/v1/netlify-identity-widget.js", tagPosition: "head"}
      ]
    }
  }
})