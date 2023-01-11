import React, { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"

const AppContext = React.createContext()
const getStorageTheme = () => {
  let theme = "light"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <AppContext.Provider value={{ toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
