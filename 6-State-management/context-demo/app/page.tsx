"use client";
import { useTheme } from "./contexts/ThemeContext";

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
        <h1 className="text-3xl font-bold">
          Current theme: <span className="capitalize">{theme}</span>
        </h1>
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Asperiores, deleniti
          laboriosam. Enim, quo iure doloribus vitae perspiciatis laborum at
          soluta! Veritatis vitae doloribus rerum eos qui accusantium recusandae
          laborum voluptas.
        </p>
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          odio, odit illo ipsam harum eius voluptatem nihil voluptatum quisquam
          tempore non ratione repellendus reiciendis quo dolorum. Excepturi
          accusantium molestiae corrupti.
        </p>
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>
          Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptate, quisquam! Suscipit
          consectetur iste hic error dicta, deserunt corrupti veniam similique,
          non totam, ea saepe iure dignissimos modi ratione accusantium. Iste.
        </p>
      </div>
    </div>
  );
}
