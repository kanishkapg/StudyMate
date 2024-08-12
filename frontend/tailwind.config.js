/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#005fed",
        headingColor: "#012862",
        skyBlue: "#c0d9ff",
        textColor: "#000000",
      },

      boxShadow : {
        panelShadow : "rgba(17, 12, 46, 0.15) 0px 18px 100px 0px",
        'custom-dark': '0px 5px 5px -2px rgba(0, 0, 0, 0.5)'
      },
    },
  },
  plugins: [],
}

