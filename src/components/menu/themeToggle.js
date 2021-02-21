import React, { useState, useEffect } from "react"

import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

import { getLocalStorage, setLocalStorage } from "../functions"

const setDefaultTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return "dark-theme"
  }
  return "default"
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(setDefaultTheme());

  const handleThemeChange = themeType => {
    setLocalStorage("theme", themeType);
    setTheme(themeType);

    document.querySelector("html").className = "";
    document.querySelector("html").classList.add(themeType);
  }

  useEffect(() => {
    if(!getLocalStorage("theme")) {
      setLocalStorage("theme", theme);
      document.querySelector("html").classList.add(theme);
    } else {
      document.querySelector("html").classList.add(getLocalStorage("theme"));
    }
  })
  
  return (
    <div className="theme-toggle">
      <button onClick={() => handleThemeChange("default")}>
        <span className="sr-only">Set theme to Light</span>
        <FiSun />
      </button>
      
      <button onClick={() => handleThemeChange("dark-theme")}>
        <span className="sr-only">Set theme to Dark</span>
        <FiMoon />
      </button>
    </div>
  )
}

export default ThemeToggle