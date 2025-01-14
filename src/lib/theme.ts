export const BREAK_POINTS = {
  xs: 381,
  sm: 577,
  md: 767,
  lg: 992,
  xl: 1200,
} as const;

export const FONT_SIZES = {
  caption: "10px",
  body1: "15px",
  body2: "12px",
  h6: "18px",
  h2: "28px",
  h1: "32px",
} as const;

export const PALETTE = {
  grey: {
    100: "#f4f4f4",
    200: "#d4d4d4",
    300: "#c4c4c4",
    400: "#e7e7e7",
  },
  primary: {
    main: "#3a86ff",
    light: "#eef5ff",
    dark: "#204d94",
  },
  secondary: {
    main: "#e3a730",
    light: "#ffcc39",
    dark: "#4c3b24",
  },
  warning: {
    main: "#e76632",
    light: "#ec906e",
    dark: "#a64824",
  },
} as const;
