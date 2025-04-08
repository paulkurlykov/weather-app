import { defineConfig } from 'vite'

export default defineConfig({
  base: "/weather/",
  build: {
    outDir: "/var/www/weather/dist",
    emptyOutDir: true
  }
})