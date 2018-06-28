import size from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import uglifyOptions from './compress.json';
import typescript from 'rollup-plugin-typescript2'

const libraryName = 'bad-behavior'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: `dist/cdn/${libraryName}.min.js`, name: 'BadBehavior', format: 'iife', sourcemap: false }
  ], 
  watch: {
    include: 'src/**',
  },
  plugins: [ 
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    size(),
    uglify(uglifyOptions, minify)
  ],
}
