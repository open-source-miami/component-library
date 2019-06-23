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
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
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
  coverageDirectory: "./test-results",
  // Testing setup files.
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
