const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
              'roboto': ["'Roboto Slab'", ...defaultTheme.fontFamily.sans],
              'mont': ["'Montserrat'", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      'hero-lg': "url('../src/assets/images/beams.jpeg')",
      'detail-lg': "url('../src/assets/images/animated.svg')",
    },
  }
},
  plugins: [],
}
