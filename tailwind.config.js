/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./disenos.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D81B60",
          primaryHover: "#b0144d",
          terracotta: "#A66A50",
          cream: "#F8F3E9",
          sand: "#E5C18F",
        },
      },
    },
  },
  plugins: [],
};
