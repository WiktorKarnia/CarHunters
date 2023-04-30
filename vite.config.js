import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  transpileDependencies: true,
  base: './',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/CarHunters/'
      : '/',
  build: {
    chunkSizeWarningLimit:1500,
  },
  mode: "hash",
})