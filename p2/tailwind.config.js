/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '6rem',
      xl: '13rem',
      '2xl': '15rem',
    },
    extend: {},
  },
  plugins: [],
}