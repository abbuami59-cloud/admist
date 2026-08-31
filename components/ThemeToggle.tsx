"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className, iconSize = 24 }: { className?: string; iconSize?: number }) {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, isMounted]);

  if (!isMounted) return null;

  const defaultClasses = "fixed bottom-6 right-6 p-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl hover:scale-110 transition-transform duration-200 z-50 focus:outline-none focus:ring-4 focus:ring-primary-500/30";

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className || defaultClasses}
      aria-label="Toggle Dark Mode"
      title="Toggle Night Mode"
    >
      {theme === "light" ? <Moon size={iconSize} /> : <Sun size={iconSize} />}
    </button>
  );
}
