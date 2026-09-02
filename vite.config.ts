import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches GitHub Pages project-site URL:
// https://calijace2023.github.io/calijace2023.github.io-portfolio-site/
// If you deploy to a USERNAME.github.io root repo instead, change base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/calijace2023.github.io-portfolio-site/',
})
