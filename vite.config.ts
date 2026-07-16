import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works both at a user page root
  // (username.github.io) and a project subpath (username.github.io/repo).
  base: './',
  plugins: [react()],
})
