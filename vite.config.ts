import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), ssr({ pageFiles: ['src/pages/**/*.page.*([a-z])'] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
