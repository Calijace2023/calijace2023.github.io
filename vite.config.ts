import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root user-page repo (calijace2023.github.io) — GitHub Pages serves this
// at the bare domain root, so base stays '/'. If this ever moves to a
// project-site repo instead, change base to '/your-repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
