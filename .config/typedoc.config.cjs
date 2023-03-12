/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["../src/ts/index.ts"],
  entryPointStrategy: "expand",
  out: "../docs",
  theme: "default",
};
