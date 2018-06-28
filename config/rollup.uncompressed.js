import typescript from 'rollup-plugin-typescript2'

const libraryName = 'bad-behavior'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: `dist/cdn/${libraryName}.js`, name: 'BadBehavior', format: 'iife', sourcemap: false }
  ],  
  watch: {
    include: 'src/**',
  },
  plugins: [ 
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true })
  ]
}
