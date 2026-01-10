import { cn } from "../utils/cn";

describe("cn utility", () => {
  test("joins class names", () => {
    expect(cn("bg-white", "text-black")).toBe("bg-white text-black");
  });

  test("filters out falsy values", () => {
    expect(cn("bg-white", false, null, undefined, "text-black")).toBe(
      "bg-white text-black"
    );
  });

  test("returns empty string if no valid classes", () => {
    expect(cn(false, null, undefined)).toBe("");
  });

  test("works with conditional classes", () => {
    const isDark = true;

    expect(cn("px-4", isDark && "bg-gray-900", !isDark && "bg-white")).toBe(
      "px-4 bg-gray-900"
    );
  });
});
