import { defineConfig } from 'vite';

export default defineConfig({
  base: '/class-1030/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 600
  }
});
