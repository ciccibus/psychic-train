import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "js/main.js",
  output: {
    file: "js/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**", // only transpile our source code
      plugins: ["@babel/plugin-transform-runtime"],
      externalHelpers: true
    }),
    commonjs(), // converts date-fns to ES modules
    production && uglify() // minify, but only in production
  ]
};
