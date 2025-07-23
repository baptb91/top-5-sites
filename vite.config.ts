import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin to generate sitemaps and static pages during build
const seoPlugin = () => {
  return {
    name: 'vite-plugin-seo',
    closeBundle: async () => {
      try {
        // 1. Generate sitemaps
        const sitemapPath = path.resolve(__dirname, './src/utils/sitemapGenerator.ts');
        
        const { build } = await import('esbuild');
        const { outputFiles } = await build({
          entryPoints: [sitemapPath],
          bundle: true,
          write: false,
          format: 'cjs',
          platform: 'node',
          target: 'node16',
        });
        
        const tempSitemapFile = path.resolve(__dirname, './temp-sitemap-generator.cjs');
        fs.writeFileSync(tempSitemapFile, outputFiles[0].text);
        
        const { generateSitemap, generateSitemapIndex } = require(tempSitemapFile);
        
        const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>\n';
        const sitemap = xmlDeclaration + generateSitemap();
        const sitemapIndex = xmlDeclaration + generateSitemapIndex();
        
        fs.writeFileSync(path.resolve(__dirname, './dist/sitemap-content.xml'), sitemap);
        fs.writeFileSync(path.resolve(__dirname, './dist/sitemap-index.xml'), sitemapIndex);
        
        fs.unlinkSync(tempSitemapFile);
        console.log('✅ Sitemap files generated successfully');
        
        // 2. Generate static pages
        const staticPagesPath = path.resolve(__dirname, './scripts/generateStaticPages.ts');
        
        const { outputFiles: staticOutputFiles } = await build({
          entryPoints: [staticPagesPath],
          bundle: true,
          write: false,
          format: 'cjs',
          platform: 'node',
          target: 'node16',
          external: ['fs', 'path']
        });
        
        const tempStaticFile = path.resolve(__dirname, './temp-static-generator.cjs');
        fs.writeFileSync(tempStaticFile, staticOutputFiles[0].text);
        
        const { generateAllStaticPages } = require(tempStaticFile);
        generateAllStaticPages();
        
        fs.unlinkSync(tempStaticFile);
        console.log('✅ Static pages generated successfully');
        
      } catch (error) {
        console.error('Error generating SEO files:', error);
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
    mode === 'production' && seoPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    cssCodeSplit: false, 
    sourcemap: false,
    outDir: 'dist',
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    }
  },
}));
