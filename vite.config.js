import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import http from 'vite-plugin-http'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    http({
      headers: {
        'Content-Security-Policy': "frame-ancestors 'none';"
      },
    })
  ],
})
