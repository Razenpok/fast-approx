import { JestConfigWithTsJest } from "ts-jest";
import jestConfig from "./jest.config";

const config: JestConfigWithTsJest = {
  ...jestConfig,
  testEnvironment: "jest-bench/environment",
  testEnvironmentOptions: {
    testEnvironment: "jest-environment-node"
  },
  reporters: ["default", "jest-bench/reporter"],
  "testRegex": "(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$"
};

export { config as default };