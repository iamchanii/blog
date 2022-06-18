/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.bs.js',
  ],
  theme: {
    extend: {
      screens: {
        container: '40rem',
      },
      colors: {
        primary: '#5B21B6',
      },
    },
  },
  plugins: [],
};
