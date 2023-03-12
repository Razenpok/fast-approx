import * as fs from "fs";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = resolve(__dirname, "../");

const wasmBuffer = fs.readFileSync(resolve(root, "src/rust/pkg/wasm_bg.wasm"));
const base64 = arrayBufferToBase64(wasmBuffer);
const ts = `/* eslint-disable */\nexport const base64 = "${base64}";`;
fs.writeFileSync(resolve(root, "src/wasm/wasm-base64.ts"), ts);

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
