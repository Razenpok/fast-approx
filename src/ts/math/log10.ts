import { log2_f32_approx } from "./log2";

// http://openaudio.blogspot.com/2017/02/faster-log10-and-pow.html
export function log10_approx(value: number): number {
  return log2_f32_approx(value) * 0.3010299956639812;
}