/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mint-cream": "rgba(244, 255, 248, 1)",
        gunmetal: "rgba(28, 55, 56, 1)",
      },
      width: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
