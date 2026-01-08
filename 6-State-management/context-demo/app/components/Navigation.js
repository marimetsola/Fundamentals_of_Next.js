"use client";

import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full border-b-2 transition-colors ${
        isDark ? "bg-black border-gray-800" : "bg-gray-100 border-gray-200"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span
          className={`text-lg font-semibold ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Context Demo
        </span>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className={`transition-colors ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`transition-colors ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </li>

          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
}
