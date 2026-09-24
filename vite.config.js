import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caprazBag: resolve(__dirname, 'hizmetler/kopek-capraz-bag-tto-ameliyati/index.html'),
        kirikCerrahi: resolve(__dirname, 'hizmetler/kedi-kopek-kirik-travma-cerrahisi/index.html'),
        patella: resolve(__dirname, 'hizmetler/patella-luksasyonu-tedavisi/index.html'),
        fizikTedavi: resolve(__dirname, 'hizmetler/veteriner-fizik-tedavi-rehabilitasyon/index.html'),
        sonerCagatay: resolve(__dirname, 'hakkimizda/uzm-dr-soner-cagatay/index.html'),
      }
    }
  },
  server: {
    port: 3000,
  }
})