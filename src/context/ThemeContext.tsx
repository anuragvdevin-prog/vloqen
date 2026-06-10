import {
  createContext,
  useEffect,
  useState,
  
} from "react";
import type { ReactNode } from "react"; 

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext =
  createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] =
    useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "theme"
    ) as Theme;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}