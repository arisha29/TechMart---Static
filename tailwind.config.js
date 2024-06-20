/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kajiro: ['Kajiro', 'sans-serif'],
      },
      height: {
        '100': '100px',
        '300': '300px'
      },
      spacing: {
        '30': '30%',
        '50': '50%',
        '100%': '100%'
      }
    },
  },
  plugins: [],
}

