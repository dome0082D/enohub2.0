import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configurazione per accettare l'host di Render
  server: {
    allowedHosts: [
      'enohub2-0.onrender.com',
      '.onrender.com'
    ]
  },
  preview: {
    allowedHosts: [
      'enohub2-0.onrender.com',
      '.onrender.com'
    ]
  }
})
