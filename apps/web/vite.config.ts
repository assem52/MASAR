import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // In development the page calls /api on its own origin; Vite forwards it to the API.
    proxy: { '/api': 'http://localhost:3000' },
  },
});
