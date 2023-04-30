// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: { colors },
  },
  plugins: [],
}