/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html","*","*scss"],
theme: {
    extend: {
      colors: {
        crimson: '#DC143C', // Custom crimson color
      },
    },
  },
  plugins: [],
};
