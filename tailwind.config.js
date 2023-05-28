/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#22c55e',
        secondary: '#64748b',
        three: '#94a3b8',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

