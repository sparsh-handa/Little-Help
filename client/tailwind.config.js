/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        'primary' : "#F24C3D",
      }

    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  }
}
