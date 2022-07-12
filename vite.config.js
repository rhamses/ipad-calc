import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const pwaOptions = {
  registerType: 'autoUpdate',
  includeAssets: ['img/icons/icone-512.svg', 'favicon.ico', 'robots.txt', 'img/icons/apple-touch-icon.png'],
  manifest: {
    name: 'iCalc',
    short_name: 'iCalc',
    description: 'A calculator for any screen',
    theme_color: '#000',
    icons: [
      {
        src: 'img/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'img/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'img/icons/icone-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      }
    ]
  },
  workbox: {
    sourcemap: true
  }
}

const ssl = {
  key: '/Users/rhamses/192.168.1.129-key.pem',
  cert: '/Users/rhamses/192.168.1.129.pem'
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: ssl
  },
  plugins: [vue(), VitePWA(pwaOptions)]
})
