import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/components.js',
    output: {
      format: 'esm',
      file: 'dist/library.mjs'
    },
    plugins: [
      vue(),
      peerDepsExternal()
    ]
  },
  {
    input: 'src/components.js',
    output: {
      format: 'cjs',
      file: 'dist/library.js'
    },
    plugins: [
      vue(),
      peerDepsExternal()
    ]
  }
]
