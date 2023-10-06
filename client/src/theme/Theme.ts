import { createTheme, ThemeOptions } from "@mui/material/styles";

// TEMP
const themeOptions = [
  {
    palette: {
      "mode": "light",
      "primary": {
        "main": "#2563eb",
        "light": "#7ca1f3",
        "dark": "#0b2f7d",
        "contrastText": "#f6f9fe"
      }
    }
  },
  {
    palette: {
      "mode": "dark",
      "primary": {
        "main": "#60a5fa",
        "light": "#a0c9fc",
        "dark": "#054ea8",
        "contrastText": "#00060d"
      }
    },
  }
]

const lightTheme = createTheme(themeOptions[0] as ThemeOptions)
const darkTheme = createTheme(themeOptions[1] as ThemeOptions)

export const muiLightTheme = lightTheme
export const muiDarkTheme = darkTheme

export type Mode = "light" | "dark"