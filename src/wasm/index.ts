import { base64 } from "./wasm-base64";

export function createWasm() {
  const buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  const mod = new WebAssembly.Module(buffer.buffer);
  const inst = new WebAssembly.Instance(mod);
  return inst.exports;
}

export const wasm = createWasm() as any;
