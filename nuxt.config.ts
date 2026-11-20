export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Personal Profile | Your Name',
      meta: [{ name: 'description', content: 'A personal profile website built with Nuxt.' }]
    }
  }
})
