/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vss-blue': '#1e40af',
        'vss-green': '#059669',
        'vss-orange': '#ea580c',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
