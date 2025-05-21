import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    manifest: true, // helpful for debugging & integrations
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
defineConfig({
  // ... existing config
  build: {
    // Add this to force full cache-busting
    sourcemap: true, // optional but helps Netlify detect changes
    emptyOutDir: true, // <--- ensures old files are cleared between builds
  },
}
}));
