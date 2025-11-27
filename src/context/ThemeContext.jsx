import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
       document.documentElement.setAttribute(
      "data-theme",
      savedMode ? "dark-mode" : "light-mode"
    );
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("dark-mode", newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark-mode" : "light-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
