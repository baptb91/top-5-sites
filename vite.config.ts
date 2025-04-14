import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    cssCodeSplit: false, // Combine CSS into a single file
    sourcemap: false, // Disable sourcemaps in production
    outDir: 'dist',
    // Generate a template that routes all requests to index.html
    // This is crucial for SPA routing with history API
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for major libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('framer-motion') || 
                id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui') || 
                id.includes('tailwind') || 
                id.includes('class-variance-authority')) {
              return 'ui-libs';
            }
            return 'vendor-deps';  // Other dependencies
          }
          // UI components chunk
          if (id.includes('src/components/ui/')) {
            return 'ui';
          }
        },
        assetFileNames: (assetInfo) => {
          // Keep XML files and robots.txt at the root level
          if (assetInfo.name && 
              (assetInfo.name.endsWith('.xml') || 
               assetInfo.name.endsWith('robots.txt'))) {
            return '[name]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs in production for now for debugging
        drop_debugger: true // Remove debugger statements
      }
    }
  },
}));
