/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3DDEED',
        'pink': '#BD00FF',
        'white': '#FFFFFF',
        'dark': '#182627',
        'black': '#20112D',
        'deep' : '#0F041C'
      },
      fontFamily: {
        satoshi: ['satoshi-variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

