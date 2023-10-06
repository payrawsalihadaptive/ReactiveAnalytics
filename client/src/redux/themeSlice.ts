import { Theme } from "@mui/material"
import type { Draft, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Mode, muiDarkTheme, muiLightTheme } from "@/theme/Theme"

type ThemeState = {
  theme: Theme
  builder: {
    colors: {
      buy?: string
      sell?: string
    }
  }
}

export const initialState: ThemeState = {
  theme: muiLightTheme,
  builder: {
    colors: {}
  }
}

const applyColor = (
  theme: Theme | Draft<Theme>,
  colorId: string,
  value: string
) => ({
  ...muiLightTheme,
  palette: {
    ...theme.palette,
    [colorId]: value
  },
} as Theme)

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setBuyColor: ({ theme, builder }, { payload }: PayloadAction<string>) => ({
      theme: applyColor(theme, "buy", payload),
      builder: {
        ...builder,
        colors: {
          ...builder.colors,
          buy: payload,
        },
      },
    }),
    setSellColor: ({ theme, builder }, { payload }: PayloadAction<string>) => ({
      theme: applyColor(theme, "sell", payload),
      builder: {
        ...builder,
        colors: {
          ...builder.colors,
          sell: payload,
        },
      },
    }),
    setTheme: ({ builder }, { payload }: PayloadAction<Mode>) => {
      let theme: Theme

      if (payload === "light") {
        theme = muiLightTheme
      } else if (payload === "dark") {
        theme = muiDarkTheme
      } else {
        throw Error("Mode must be 'light' or 'dark'")
      }

      for (const [colorId, value] of Object.entries(builder.colors)) {
        theme = applyColor(theme, colorId, value)
      }
      return { theme, builder }
    }, 
    resetTheme: () => {
      return initialState
    },
  }
})

export const { actions, reducer } = themeSlice