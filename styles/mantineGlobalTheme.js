import { brandTheme } from "../middleware/brandService";
export const theme = {
  colorScheme: "light",
  colors: brandTheme.colors,
  primaryColor: "primaryBackgroundColor",

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: 30 },
    },
  },
};
