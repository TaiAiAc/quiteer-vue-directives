import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'core',
  entry: ['index.ts'], // 添加 vue.d.ts 入口
  dts: true,
  outDir: 'dist',
  splitting: false,
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  external: ['vue'],
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.js' : '.mjs'
    }
  }
})
