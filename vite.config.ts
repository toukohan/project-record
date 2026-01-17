import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment, set base to repo name
// Update this to match your repository name if deploying to GitHub Pages
// For custom domains or root deployment, use '/'
const base = process.env.GITHUB_ACTIONS ? '/landing/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
