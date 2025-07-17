/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        aguadegad: "#00C99F",
        azuldegra: "#346BEC",
        azulheader: "#010068",
        naranja: "#FF9F33"
      },
      zIndex: {
        '100': '100',
        }

      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
