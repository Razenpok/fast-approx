import { HIGH_WORD } from "./endianness";

const F64_VIEW = new Float64Array(1);
const U32_VIEW = new Uint32Array(F64_VIEW.buffer);

const BIAS = 0b11111111_11;

// Exponent all 0s
const CLEAR_EXP_MASK = 0b10000000_00001111_11111111_11111111;

// Exponent equal to 1022 (BIAS-1)
const SET_EXP_MASK = 0b111111_11100000_00000000_00000000;

const EXP_MASK = 0b1111111_11110000_00000000_00000000;

// http://openaudio.blogspot.com/2017/02/faster-log10-and-pow.html
export function log2_approx(value: number): number {
  // A crude replacement for frexp
  F64_VIEW[0] = value;
  let high = U32_VIEW[HIGH_WORD];
  U32_VIEW[HIGH_WORD] = high & CLEAR_EXP_MASK | SET_EXP_MASK;
  const F = F64_VIEW[0];
  const E = ((high & EXP_MASK) >>> 20) - BIAS + 1;

  let Y = 1.23149591368684;
  Y *= F;
  Y += -4.11852516267426;
  Y *= F;
  Y += 6.02197014179219;
  Y *= F;
  Y += -3.13396450166353;
  Y += E;
  return Y;
}
