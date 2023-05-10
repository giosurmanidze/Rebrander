/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1130px",
        xl2: "1440px",
        sm: "310px",
        sm2: "850px",
        xsm:'360px'
      },
      colors: {
        mainRed: "#f14342",
        mainGray: "#f8f8f8", 
      },
    },
  },
  plugins: [],
};
