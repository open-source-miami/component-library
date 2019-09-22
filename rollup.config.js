import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"

import pkg from "./package.json"

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({
      preferBuiltins: true,
    //   mainFields: ["browser"]
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/index.js": [
          "cloneElement",
          "Children",
          "Component",
          "createContext",
          "createElement",
          "PropTypes"
        ],
        "node_modules/react-dom/index.js": ["render, hyrdrate"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef"
        ]
      }
    })
  ]
}
