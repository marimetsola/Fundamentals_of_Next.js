"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        cursor-pointer relative flex h-8 w-16 items-center rounded-full
        bg-gray-200 transition-colors duration-300
        ${isDark ? "bg-gray-700" : "bg-gray-200"}
      `}
    >
      <span className="absolute left-2 text-sm">🌙</span>

      <span className="absolute right-2 text-sm">☀️</span>

      <span
        className={`
          absolute h-6 w-6 rounded-full shadow
          transition-transform duration-300
          ${isDark ? "translate-x-8 bg-gray-500" : "translate-x-1 bg-white"}
        `}
      />
    </button>
  );
}
