import { benchmarkSuite } from "jest-bench";
import { wasm } from "../wasm";
import {
  log2_f32_approx,
  log2_f32_rough,
} from "./math/log2";

const random = Math.random;
const log2 = Math.log2;

function testValue() {
  return random() * 1000;
}

export const wasm_return: (value: number) => number = wasm.wasm_return;

function calculateError(value: number) {
  const baselineFn = Math.log2;
  const testFn = [
    log2_f32_approx,
    log2_f32_rough,
  ]

  const baseline = baselineFn(value);
  let report = `Math.${baselineFn.name}(${value}): ${baseline}`;
  for (let fn of testFn) {
    const result = fn(value);
    const diff = baseline === 0
      ? Math.abs(result)
      : Math.abs(baseline - result) / Math.abs(baseline);
    const error = diff === 0
      ? "(no error)"
      : `(~${-Math.floor(Math.log10(diff))} places)`;
    report += `\n${fn.name}(${value}): ${result} ${error}`;
  }

  console.log(report);
}

calculateError(1);
calculateError(2);
calculateError(3);
calculateError(0.33);
calculateError(0.5);
calculateError(4);
calculateError(8);
calculateError(1.337);
calculateError(1e11);
calculateError(1e23);
calculateError(1e30);

const a = [NaN];

benchmarkSuite("The Grand Arena", {
  ["Math.log2"]: () => {
    a[0] += log2(testValue())
  },

  ["log2_f32_approx"]: () => {
    a[0] += log2_f32_approx(testValue())
  },

  ["log2_f32_rough"]: () => {
    a[0] += log2_f32_rough(testValue())
  },

  ["wasm_return"]: () => {
    a[0] += wasm_return(testValue())
  },
});