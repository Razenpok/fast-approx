import { JestConfigWithTsJest } from "ts-jest";
import jestConfig from "./jest.config";

const config: JestConfigWithTsJest = {
  ...jestConfig,
  testEnvironment: "jest-bench/environment",
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-node"
  },
  reporters: ["default", "jest-bench/reporter"],
  "testRegex": "arena\\.bench\\.ts$"
};

export { config as default };