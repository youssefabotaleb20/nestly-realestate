import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set this to your GitHub repo name (e.g. '/nestly-realestate/')
// so all assets resolve correctly on GitHub Pages.
const REPO_NAME = '/nestly-realestate/'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
