const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    
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
