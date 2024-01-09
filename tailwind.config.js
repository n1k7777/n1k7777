module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#dad9dc", 400: "#c4c4c4", "500_30": "#91919130" },
        black: { 900: "#000000" },
        blue_gray: { 300: "#85a6a7" },
      },
      fontFamily: { roboto: "Roboto", librefranklin: "Libre Franklin" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
