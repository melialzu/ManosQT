/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        aguadegad: "#00C99F",
        azuldegra: "#10a09a",
        azulheader: "#010068",
        naranja: "#de6d21",
        amarillo: "#e29508",
        crema:"#fff3d1"
      },
      zIndex: {
        '100': '100',
        }

      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
