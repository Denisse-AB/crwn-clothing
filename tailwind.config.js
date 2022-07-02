/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '450px' },
      'md': { 'min': '451px', 'max': '600px' },
      'tablet': { 'min': '601px', 'max': '900px' },
      'laptop': { 'min': '901px', 'max': '1500px' },
    }
  },
  plugins: [],
}
