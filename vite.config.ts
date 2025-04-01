
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
    // Add extensions to ensure proper file resolution
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    cssCodeSplit: false, // Combine CSS into a single file
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          // Référence des fichiers individuels plutôt que des dossiers
          ui: [
            '@/components/ui/button.tsx', 
            '@/components/ui/card.tsx',
            '@/components/ui/accordion.tsx',
            '@/components/ui/alert.tsx',
            '@/components/ui/avatar.tsx',
            '@/components/ui/badge.tsx',
            '@/components/ui/calendar.tsx',
            '@/components/ui/form.tsx',
            '@/components/ui/hover-card.tsx',
            '@/components/ui/image.tsx',
            '@/components/ui/input.tsx',
            '@/components/ui/label.tsx',
            '@/components/ui/separator.tsx',
          ]
        },
        assetFileNames: (assetInfo) => {
          // Keep XML files at the root level
          if (assetInfo.name && (assetInfo.name.endsWith('sitemap.xml') || assetInfo.name.endsWith('sitemap-index.xml') || assetInfo.name.endsWith('robots.txt'))) {
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
        drop_console: true, // Remove console.log in production
        drop_debugger: true // Remove debugger statements
      }
    }
  },
}));
