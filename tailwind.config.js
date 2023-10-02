/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      neue: ["Bebas Neue", "cursive"],
    },
    extend: {
      colors: {
        primary: "#EB5E28",
        backgroundLightMain: "#FFFCF2",
        backgroundLightSecondary: "#E5E2DC",
        backgroundDarkMain: "#252422",
        backgroundDarkSecondary: "#403D39",
      },
     
    },
  },
  plugins: [],
};
