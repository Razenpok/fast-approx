function isLittleEndian() {
  const u16 = new Uint16Array(1);
  u16[0] = 0x1234;
  const u8 = new Uint8Array(u16.buffer);
  return u8[0] === 0x34;
}

export const HIGH_WORD = isLittleEndian() ? 1 : 0;
