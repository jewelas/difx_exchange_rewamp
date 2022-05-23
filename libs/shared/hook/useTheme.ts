import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../atom/index";

useTheme.init = false;
export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (useTheme.init) return;
    useTheme.init = true;
    let currentTheme = localStorage?.getItem("theme");
    if (currentTheme && currentTheme != theme) {
      setTheme(currentTheme);
    }
  }, []);

  const switchTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return { theme, switchTheme };
}
