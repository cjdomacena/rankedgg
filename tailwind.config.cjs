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
    themes: [
      {
        mytheme: {
          primary: "#0E0E10",
          secondary: "#ec3d06",
          accent: "#26272B",
          neutral: "#60636A",
          "base-100": "#07080C",
          info: "#0f77ff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};