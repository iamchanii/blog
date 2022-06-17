/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx,res}',
    './src/pages/**/*.{js,jsx,ts,tsx,res}',
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
