import React, { useEffect } from "react"

import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

import { getLocalStorage, setLocalStorage } from "../functions"

const setDefaultTheme = window => {
  if(getLocalStorage("theme")) {
    return getLocalStorage("theme");
  }

  if(typeof window !== undefined) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark-theme"
    }
  }
  return "default"
}

const setThemeClass = themeType => {
  document.querySelector("html").className = "";
  document.querySelector("html").classList.add(themeType);
}

const handleThemeChange = themeType => {
  setLocalStorage("theme", themeType);
  setThemeClass(themeType);
}

const ThemeToggle = () => {
  useEffect(() => {
    if(typeof window !== undefined && !getLocalStorage("theme")) {
      handleThemeChange(setDefaultTheme(window));
    } else if (getLocalStorage("theme") !== false) {
      setThemeClass(getLocalStorage("theme"));
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