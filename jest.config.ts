export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/tests/**/*.[jt]s"],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};