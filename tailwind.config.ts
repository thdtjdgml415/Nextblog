/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-cardBgTo": "linear-gradient(#212121, #212121)",
        "gradient-cardBgFrom": " linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff)",
      },
      colors: {
        "regal-pink": "rgb(254, 175, 180);",
        "regal-gray": "rgb(249, 250, 251)",
        "regal-yellow": "rgb(255, 195, 66)",
        "regal-black": "rgb(78, 89, 104)",
        "regal-small-gray": "#333d4b",
        "text-gray": "#8b95a1",
      },
      width: {
        128: "20rem",
      },
      minWidth: {
        "1/2": "30%",
      },
      margin: {
        128: "20rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
