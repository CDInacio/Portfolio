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
      dropShadow: {
        shadow1:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
      colors: {
        primary: "#105196",
        secondary: "#333A96",
        background: "hsl(0, 0%, 98%)",
        panel: "hsl(0, 0%, 100%)",
        dark: "#222222",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        hero: "/images/hero.jpg",
      },
    },
  },
  plugins: [],
};
