import Typography from "typography"
import BlogIndex from "../pages"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  bodyFontFamily: ["Open Sans", "serif"],
  headerFontFamily: [
    "DM Serif Text",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  overrideStyles: ({ scale, rhythm }) => ({
    a: {
      textDecoration: "none",
    },
    "body.dark a": {
      color: "#5BECC0",
    },
    "body.dark a:not(.titleLink)": {
      color: "#e96ef4"
    },
    "body.light a:not(.titleLink)": {
      fontStyle: "italic",
      color: "#7b6af2",
      fontWeight: "500",
    },
    "body.light h1": {
      color: "#551a8b",
    },
    "body.dark h1": {
      color: "#5BECC0",
    },
    h3: {
      letterSpacing: "1.2px"
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
