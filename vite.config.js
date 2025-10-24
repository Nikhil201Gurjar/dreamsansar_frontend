import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // root: '.', // should point to the folder containing index.html
  // build: {
  //   rollupOptions: {
  //     input: 'index.html',
  //   },
  // },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  }
})
