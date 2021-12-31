export default {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },

  loading: {
    color: '#2094f3',
    failedColor: '#ff5724',
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luwjistik Order',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Luwjistik Orders Page is a website to make and view orders',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Luwjistik, Order, Website Order Page',
      },
      { hid: 'author', name: 'author', content: 'Dendy Dharmawan' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vee-validate'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
  ],

  auth: {
    localStorage: false,
    strategies: {
      local: {
        token: {
          property: 'data.session',
          required: true,
          type: '',
        },
        user: {
          property: 'data',
          autoFetch: false,
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          user: false,
          logout: false,
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
