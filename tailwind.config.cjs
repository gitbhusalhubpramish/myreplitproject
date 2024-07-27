/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '50': '50px',
      },
      colors: {
        deepskyblue: '#00bfff',
      },
    },
  },
  darkMode: true,
  plugins: [],
}

