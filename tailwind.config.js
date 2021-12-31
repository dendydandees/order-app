module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    minHeight: {
      86: '86vh',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['cmyk'],
  },
  important: true,
}
