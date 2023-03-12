import { transmute_f32_u32, transmute_u32_f32 } from "../transmute";

// http://www.machinedlearnings.com/2011/06/fast-approximate-logarithm-exponential.html
// https://github.com/romeric/fastapprox/blob/master/fastapprox/src/fastlog.h

const L_recip = Math.fround(1 / 0b10000000_00000000_00000000);
const B = Math.fround(124.22544637);
const mx_k1 = Math.fround(1.498030302);
const mx_k2 = Math.fround(1.72587999);
const mx_k3 = Math.fround(0.3520887068);

export function log2_f32_approx(value: number) {
  const ix = transmute_f32_u32(value);
  const mx = transmute_u32_f32(ix & 0b1111111_11111111_11111111 | 0b111111_00000000_00000000_00000000);
  const g = B - mx_k1 * mx - mx_k2 / (mx_k3 + mx);
  return ix * L_recip - g;
}

const g_average = Math.fround(126.94269504);

export function log2_f32_rough(value: number) {
  const ix = transmute_f32_u32(value);
  return ix * L_recip - g_average;
}