import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/job-craft-frontend/',   // 👈 EXACT repo name, with capital J
})
