
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin pour générer les sitemaps lors du build
const sitemapPlugin = () => {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle: async () => {
      try {
        // Import dynamic directly from the file
        const sitemapPath = path.resolve(__dirname, './src/utils/sitemapGenerator.ts');
        
        // We need to compile the TypeScript file before importing it
        // Using a dynamic import with esbuild
        const { build } = await import('esbuild');
        const { outputFiles } = await build({
          entryPoints: [sitemapPath],
          bundle: true,
          write: false,
          format: 'cjs',
          platform: 'node',
          target: 'node16',
        });
        
        // Write the compiled file to a temporary location
        const tempFile = path.resolve(__dirname, './temp-sitemap-generator.cjs');
        fs.writeFileSync(tempFile, outputFiles[0].text);
        
        // Import the compiled module
        const { generateSitemap, generateSitemapIndex } = require(tempFile);
        
        // Assurer que la déclaration XML est correctement ajoutée
        const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' + generateSitemap();
        const sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n' + generateSitemapIndex();
        
        // Écrire les fichiers dans le dossier dist
        fs.writeFileSync(path.resolve(__dirname, './dist/sitemap.xml'), sitemap);
        fs.writeFileSync(path.resolve(__dirname, './dist/sitemap-index.xml'), sitemapIndex);
        
        // Clean up the temporary file
        fs.unlinkSync(tempFile);
        
        console.log('✅ Sitemap files generated successfully');
      } catch (error) {
        console.error('Error generating sitemap files:', error);
        console.error(error);
      }
    }
  };
};

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
    mode === 'production' && sitemapPlugin(),
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
