import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base : "/StarLens_nasaspace/" ,
  build: {
    outDir: 'dist', // Output folder for production build
    assetsDir: 'assets', // Where to put assets like images
  },
})
