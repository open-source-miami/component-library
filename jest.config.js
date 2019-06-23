module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "JUnit",
        output: "junit.xml",
        includeConsoleOutput: true
      }
    ]
  ],
  testMatch: ["<rootDir>/src/**/?(*.)test.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    NODE_ENV: "test"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/types/**"
  ],
  coveragePathIgnorePatterns: [".stories.tsx", ".style.ts"],
  // Testing setup files.
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
