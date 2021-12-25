module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      "2xl": 1440,
      xl: 1280,
      lg: 1024,
      md: 768,
      sm: 512,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#FAFAFA",
      lightBlue: "#EAF0FF",

      dark: "#181818",
      darkLight: "#232323",

      primary: "#0089FF",

      accentBlue: "#2D9BF3",
      accentGreen: "#22CAAC",
      accentPurple: "#B620E0",
      accentYellow: "#F7B500",
    },
    fontFamily: {
      main: ["Heebo", "sans-serif"],
      alt: ["Encode Sans", "serif"],
    },
    extend: {
      borderRadius: {
        rounded: "50%",
        main: "12px",
      },
    },
  },
  plugins: [],
}
