const F32_VIEW = new Float32Array(1);
const U32_VIEW = new Uint32Array(F32_VIEW.buffer);

export function transmute_f32_u32(f32: number): number {
  F32_VIEW[0] = f32;
  return U32_VIEW[0];
}

export function transmute_u32_f32(u32: number): number {
  U32_VIEW[0] = u32;
  return F32_VIEW[0];
}