/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkNavy: '#261676',
        blue: '#2453FF',
      }
    },
    fontSize: {
      body: '26px',
      sm: '32px',
      md: '48px',
      lg: '88px',
      xl: '136px',
    },
    screens: {
      sm: '0px',
      md: ' 769px',
      lg: '1230px'

    }
  },
  plugins: [],
}

