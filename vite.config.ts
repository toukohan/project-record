import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment, set base to repo name
// For custom domains or root deployment, use '/'
const base = process.env.GITHUB_ACTIONS ? '/how-i-work/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
