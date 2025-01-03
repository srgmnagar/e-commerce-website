/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', 'ui-sans-serif', 'system-ui'],
        baloo: ['"Baloo 2"', 'cursive'],
        textDecoration: ['active'], // Enable `active:` for text-decoration
        fontWeight: ['active'],
      }
    },
  },
  plugins: [],
}