import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'],
    cors: {
      origin: ["http://localhost:5173", "https://098d-2401-4900-889d-e668-50b9-5135-c46-b4b3.ngrok-free.app"],
      credentials: true,
    },
  },
})