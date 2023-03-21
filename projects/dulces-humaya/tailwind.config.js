/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        humaya: {
          light: '',
          DEFAULT: '#d7ab89',
          dark: '#846b50',
          darker: '#5b3e16'
        },
        maizena: {
          DEFAULT: '#bca177',
          dark: '#63421e'
        }
      }
    }
  },
  plugins: []
}
