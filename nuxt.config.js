import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luk Coin',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      {
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/style.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/apexchart.js', ssr: false },
    { src: '~/plugins/vue-carousel.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-clipboard',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

    //https://www.npmjs.com/package/nuxt-clipboard
    'nuxt-clipboard',

    //https://ssense.github.io/vue-carousel/guide/
  ],

  styleResources: {
    scss: ['./assets/style/*.scss'],
    sass: ['./assets/style/*.sass'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  alias: {
    images: resolve(__dirname, './assets/images'),
    style: resolve(__dirname, './assets/style'),
    router: resolve(__dirname, './router'),
    '~': resolve(__dirname, ''),
    '@': resolve(__dirname, ''),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
