/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        dark: '#0f172a',
        primary: '#22c55e',
        secondary: '#f1f5f9',
        three: '#e2e8f0',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

