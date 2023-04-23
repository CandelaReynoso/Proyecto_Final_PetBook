/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
            primary: '#C0F8D1', //tea green
            secondary:'#1B2021', //cherry blossom pink 
            base: '#BDCFB5', // ash gray
            accent:'#587B7F', // myrtle green
            neutral:'#1B2021' //eerie black
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
    // require ("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {  //configuracion de daisy-tailwind
    // styled: false,
    //  themes: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    // darkTheme: "dark",
    
    themes: [{
        mytheme: {
        'primary': "#C0F8D1",
        'secondary': "#1B2021",
        'base': "#BDCFB5",
        'accent': "#587B7F",
        'negro': "#1B2021",
      }      
  }]

  }}

