import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  rootDir: "../",
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  passWithNoTests: true,
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  reporters: ["default"],
};

export { config as default };