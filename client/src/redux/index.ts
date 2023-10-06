import { configureStore } from "@reduxjs/toolkit"

import { reducer as themeSlice } from "./themeSlice"

export const createStore = () => 
  configureStore({
    reducer: {
      themeSlice,
    },
  })
