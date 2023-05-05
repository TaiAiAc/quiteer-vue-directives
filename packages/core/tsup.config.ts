import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'core',
  entry: ['index.ts'],
  dts: true,
  outDir: 'dist',
  splitting: false,
  clean: true,
  minify: false,
  format: 'esm',
  external: ['vue']
})
