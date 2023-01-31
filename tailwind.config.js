/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2200px",
      "4xl": "1950px",
    },
    extend: {
      colors: {
        dark: "#0F0326",
        darkk: "#9BC1BC",
        red: "#36C9C6",
        grey: "#F5F7DC",
        yellow: "#F2F230",
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
};
