/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // rosa: 'rgb()'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

