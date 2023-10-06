import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from 'react-redux'

import App from "@/App"
import * as serviceWorker from "@/serviceWorker"
import { getEnvironment } from "@/utils"

import { createStore } from './redux/index'

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault()
  window.beforeInstallPromptEvent = e
})

const store = createStore()

async function init() {
  const env = getEnvironment()
  const envSuffix = env === "demo" ? "" : ` (${env.toUpperCase()})`

  document.title = `Reactive Analytics${envSuffix}`

  console.log(
    `%cReactive Analytics ${
      import.meta.env.VITE_BUILD_VERSION || "vUnknown"
    }, running in ${env.toUpperCase()}`,
    "font-weight:bold;",
  )

  const root = createRoot(document.getElementById("root")!)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
  serviceWorker.register()

  window.gtag("js", new Date())
  window.gtag("config", env === "demo" ? "G-Z3PC9MRCH9" : "G-Y28QSEPEC8")
}

init()
