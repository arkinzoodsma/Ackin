// noinspection JSUnusedGlobalSymbols
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'foodsta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Food search fotos' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway',
      },
      {
        rel: 'stylesheet',
        href:
          'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1581441981/Anicons/anicons.css',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [],

  components: true,
  buildmodules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  fontawesome: {
    component: 'fa',
    suffix: true,
    addCSS: true,
    Icons: {
      solid: [
        'fa-atom-alt',
        'fa-euro-sign',
        'fa-money-bill-alt',
        'fa-chevron-right',
        'fa-chevron-left',
      ],
      regular: ['fa-spinner', 'fa-atom', 'fa-euro-sign', 'fa-money-bill-alt'],
      light: [
        'fa-user-astronaut',
        'fa-atom',
        'fa-euro-sign',
        'fa-money-bill-alt',
      ],
      duotone: ['fa-sparkles', 'fa-atom-alt', 'fa-atom', 'fa-money-bill-alt'],
    },
  },
}
