/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [
    require('./src/lib/mypreset.js')
  ],
  theme: {
    fontFamily: {
      vesper: ["Vesper Libre", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

