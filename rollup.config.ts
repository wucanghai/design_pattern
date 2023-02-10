import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
// import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const extensions = ['.js', '.ts']

export default {
  input: './modules/index.ts',
  output: {
    name: 'Pattern',
    file: './lib/bundle.js',
    format: 'umd',
    sourcemap: true,
  },

  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    // nodeResolve({ extensions }),
    babel({
      exclude: ['node_modules/**', 'lib/*'],
      babelHelpers: 'bundled',
      extensions,
    }),
    commonjs(),
    livereload({
      watch: 'lib',
    }),
    serve({
      open: true,
      port: 8080,
    }),
  ],
}
