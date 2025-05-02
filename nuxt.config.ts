// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui'
  ],
  css: [
    '~/assets/css/main.css',
    'vue-toastification/dist/index.css'
  ],
  app: {
    head: {
      title: 'BetterWork - The Better Freelancing Platform',
      meta: [
        { name: 'description', content: 'A better designed freelancing platform for connecting talents and clients.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    exposeConfig: true
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
  imports: {
    dirs: ['stores']
  },
  nitro: {
    preset: 'static'
  },
  plugins: [
    '~/plugins/toast.js'
  ]
})