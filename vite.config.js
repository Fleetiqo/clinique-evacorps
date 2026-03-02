import { defineConfig } from 'vite'

export default defineConfig({
  base: '/clinique-evacorps/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
