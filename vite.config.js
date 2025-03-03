import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 5174, // Change this to your desired port
  },
  plugins: [react(), tailwindcss()],
});
