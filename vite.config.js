import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/pokemon-favorite-app--vueJs/',
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})