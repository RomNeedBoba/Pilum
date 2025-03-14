import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/Pilum/ ", // Set this to the root since you are using a custom domain
})