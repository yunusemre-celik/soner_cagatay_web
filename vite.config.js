import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Netlify'da dosyaların bulunmasını sağlar (boş sayfa sorununu çözer)
  build: {
    outDir: 'dist', // Çıktı klasörü
  },
  server: {
    port: 3000,
  }
})