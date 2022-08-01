/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Work Sans"', "sans-serif"],

      },
    },
  },
  daisyui: {
    themes: [
     "night"
    ],
  },
  plugins: [require("daisyui")],
};