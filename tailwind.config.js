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
        primary: "#e76f51",
        secondary: "#333A96",
        background: "hsl(0, 0%, 98%)",
        panel: "hsl(0, 0%, 100%)",
        // dark: "#222222",
      },
     
    },
  },
  plugins: [],
};
