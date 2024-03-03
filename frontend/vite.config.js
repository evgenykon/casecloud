import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true
  },
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['oh-vue-icons/icons'],
  },
})
