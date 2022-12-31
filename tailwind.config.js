/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5566ba",
        primaryLight: "#9e94f9",
        primaryDark: "#23305b",
        secondary: "#ffccff",
        tertiary: "#1088ce",
      },
    },
  },
  plugins: [],
};
