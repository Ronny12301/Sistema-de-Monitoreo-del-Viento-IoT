/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '1280px',
      'lg': '1900px',
      'xl': '2400px',
      '2xl': '3000px',
      'smvert': {'raw': '(min-height: 850px),(min-width:640px)'}
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}