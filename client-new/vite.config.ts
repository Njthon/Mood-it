import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://localhost:3000',
  //       changeOrigin: true,
  //       secure: false,
  //       ws: false,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },


})
