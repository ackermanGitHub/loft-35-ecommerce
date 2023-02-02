/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.7rem',
        '3xs': '0.65rem',
        '4xs': '0.60rem',
        '5xs': '0.50rem',
      },
    },
  },
  plugins: [],
};
