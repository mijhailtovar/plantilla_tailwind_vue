/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html", // Añade esto si tienes archivos HTML en la raíz del proyecto
    "./src/components/*.vue",
  ],
  theme: {

    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      },
    },
  },
  plugins: [],
}