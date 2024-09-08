// import colors from 'tailwindcss/colors'
const colors = require('tailwindcss/colors')
const path = require('node:path')

// console.log(path.dirname(__filename))

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, './app/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: { gray: colors.neutral }
    }
  },
  plugins: []
}
