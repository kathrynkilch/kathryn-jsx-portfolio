import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kathryn-jsx-portfolio/',
  plugins: [react()],
})
