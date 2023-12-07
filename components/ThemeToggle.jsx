"use client";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || themes.winter;
  }
  return themes.winter;
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getStateFromLocalStorage());

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "winter" ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
