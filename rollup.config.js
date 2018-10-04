import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";
import sass from "node-sass";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "js/main.js",
  output: {
    file: "js/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    babel({
      exclude: "node_modules/**" // only transpile our source code
    }),
    commonjs(), // converts date-fns to ES modules
    postcss({
      preprocessor: (content, id) =>
        new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id });
          resolve({ code: result.css.toString() });
        }),
      plugins: [autoprefixer],
      sourceMap: true,
      extract: true,
      extensions: [".sass", ".scss", ".css"]
    }),
    production && uglify() // minify, but only in production
  ]
};
