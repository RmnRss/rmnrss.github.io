const theme = {
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

  borderRadius: "0",
} as const

export type Theme = typeof theme
export type Color = keyof typeof theme.colors

export default theme
