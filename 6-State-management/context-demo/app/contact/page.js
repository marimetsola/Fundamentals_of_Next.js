"use client";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
    flex-1 px-6 py-16 transition-colors
    ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}
  `}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <section className="space-y-2">
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            <strong>Company:</strong> Context Demo Ltd
          </p>
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            <strong>Address:</strong> Example Street 12, 00100 Helsinki
          </p>
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            <strong>Email:</strong> contact@contextdemo.dev
          </p>
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            <strong>Phone:</strong> +358 40 123 4567
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Opening hours</h2>
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            Monday – Friday: 9:00 – 17:00
          </p>
          <p className={isDark ? "text-gray-300" : "text-gray-700"}>
            Saturday – Sunday: Closed
          </p>
        </section>
      </div>
    </div>
  );
}
