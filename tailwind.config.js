/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.svelte"],
  theme: {
    extend: {
      screens: {
        xs: "480px"
        // => @media (min-width: 480px) { ... }
      }
    }
  },
  plugins: []
}
