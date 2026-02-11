/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          purple: '#39235E',
          medium: '#6B5191',
          soft: '#FBEAFF',
        },
        electric: {
          teal: '#00C9A8',
        },
        solar: {
          yellow: '#E5C349',
        },
        charcoal: '#282828',
      },
    },
  },
  plugins: [],
}
