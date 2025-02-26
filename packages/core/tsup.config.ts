import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'core',
  entry: ['index.ts'],
  dts: true,
  outDir: 'dist',
  splitting: false,
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  sourcemap: true,
  treeshake: true,
  external: ['vue'],
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.js' : '.mjs'
    }
  }
})
