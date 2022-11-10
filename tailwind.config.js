/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js}"],
  theme: {
    extend: {
      screen:{
        '2xl' : { 'col' : '(min-width:1400px'},
      },
    },
  },
  plugins: [],
}
