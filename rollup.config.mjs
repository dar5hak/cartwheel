import pkg from "./load-package.cjs";
import { terser } from "rollup-plugin-terser";

export default [
  // browser-friendly UMD build
  {
    input: "main.js",
    output: [
      {
        name: "cartwheel",
        file: pkg.browser,
        format: "umd",
      },
      {
        name: "cartwheel",
        file: pkg.browserMin,
        format: "umd",
        plugins: [terser()],
      },
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "main.js",
    output: [
      { file: pkg.main, format: "cjs", exports: "default" },
      { file: pkg.module, format: "es" },
      { file: pkg.moduleMin, format: "es", plugins: [terser()] },
    ],
  },
];
