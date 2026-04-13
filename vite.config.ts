import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O il plugin che stai usando (es. vue, svelte)
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Questa è la parte che risolve l'errore su Render
  preview: {
    allowedHosts: true
  },
  server: {
    allowedHosts: true
  }