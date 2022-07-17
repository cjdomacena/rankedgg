/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  daisyui: {
    themes:['luxury', 'light', 'night']
  },
  plugins: [require("daisyui")],
};