/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1cc95f"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
}

