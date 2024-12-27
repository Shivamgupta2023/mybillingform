/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '32rem', // Add custom width
        '144': '36rem', // Add another custom width
      }
    },
  },
  plugins: [],
}

