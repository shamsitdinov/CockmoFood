/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // 'tel':'768px'
        "2xl": "1538px",
        // 'sm': { 'max': '639px' },
      },
      backgroundColor: {
        gray: "#F5F5F5",
        footer: "#1F1F1F",
        coral: "coral",
        purple: "#7500ff",
      },
      height: {
        60: "60vh",
        50: "50vh",
        40: "40vh",
        33: "33vh",
        80: "80vh",
        90: "90vh",
        10: "10vh",
        15: "15vh",
        150: "150px",
        100: "100px",
      },
      width: {
        150: "150px",
        100: "100px",
        55: "55%",
        90: "90%",
      },
      boxShadow: {
        boxCard: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      borderColor: {
        50: "100px",
      },
    },
  },
  plugins: [],
};
