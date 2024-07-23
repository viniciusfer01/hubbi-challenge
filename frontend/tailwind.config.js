/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      yellow: "#f5f716",
      "battleship-gray": "#808f87",
      "ash-gray": "#afd0bf",
      "gun-metal": "#1f2937",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        stars: "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
