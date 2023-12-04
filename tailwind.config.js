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
      roboto: ["Roboto", " sans-serif"],
      robotoMono: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        primary: "#D59A7D",
        backgroundDark: "#141414",
      },
      boxShadow: {
        "custom-inset": "0px 2px 59px 8px rgba(0, 0, 0, 1) inset",
      },
    },
  },
  plugins: [],
};
