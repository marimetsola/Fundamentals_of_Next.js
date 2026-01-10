import nextJest from "next/jest.js";

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app
  dir: "./",
});

// Add custom config
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

export default createJestConfig(config);
