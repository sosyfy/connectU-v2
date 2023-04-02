module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f2f3f5",
        deepskyblue: "#00acff",
        white: "#fff",
        red: "#ff1930",
        gray: { "100": "#212121", "200": "rgba(0, 0, 0, 0)" },
        gainsboro: { "100": "#ddd", "200": "#d8dadc" },
        crimson: "#e64646",
        dimgray: "#666",
        black: "#000",
        textblack: { "100": "#00000099", "200": "#000000e6" }, 
        darkseagreen: "#78c08f",
        "base-dark-gray": "#34364a",
        "base-mid-gray": "#7a757d",
      },
      fontFamily: { roboto: "Roboto",inter: "Inter", poppins: "Poppins" },
      borderRadius: { "3xs": "10px", "mid-5": "17.5px" },
    },
    fontSize: {
      xs: "0.69rem",
      sm: "0.75rem",
      base: "0.88rem",
      lg: "1rem",
      xl: "2.25rem",
    },
  },
  plugins: [require("daisyui")],
}