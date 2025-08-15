import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { makeSitemaps } from './scripts/makeSitemaps';

// Vite plugin to run after build completes
const sitemapPlugin = () => ({
  name: 'ep-sitemap-generator',
  apply: 'build' as const,
  closeBundle() {
    try {
      makeSitemaps();
    } catch (err) {
      console.error('Sitemap generation failed:', err);
    }
  },
});

export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}));
