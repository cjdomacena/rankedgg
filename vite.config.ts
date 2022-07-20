import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'index.html')
      }
    }
  }
})
