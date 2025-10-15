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
        console.log('🚀 SEO Plugin: Génération des sitemaps v2 et pages statiques...');
        
        // 1. Générer les nouveaux sitemaps v2 structurés
        try {
          const { generateV2Sitemaps } = await import('./scripts/generateV2Sitemaps');
          await generateV2Sitemaps();
          console.log('✅ Sitemaps v2 générés avec succès');
        } catch (error) {
          console.log('⚠️ Fallback vers génération classique des sitemaps...');
          
          // Générer les sitemaps classiques en fallback
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
          console.log('✅ Sitemaps classiques générés');
        }
        
        // 2. Copier tous les sitemaps v2 vers dist/
        const v2Files = [
          'sitemap-v2-index.xml',
          'sitemap-v2-content-main.xml',
          'sitemap-v2-content-blog.xml', 
          'sitemap-v2-content-legal.xml'
        ];
        
        v2Files.forEach(filename => {
          try {
            const publicPath = path.resolve(__dirname, `./public/${filename}`);
            const distPath = path.resolve(__dirname, `./dist/${filename}`);
            if (fs.existsSync(publicPath)) {
              fs.copyFileSync(publicPath, distPath);
              console.log(`✅ Copié: ${filename}`);
            }
          } catch (error) {
            console.log(`⚠️ ${filename} non trouvé`);
          }
        });
        
        // 2. Générer les pages statiques du blog avec le nouveau script optimisé
        try {
          // Exécuter le script de génération de pages HTML blog
          const { execSync } = await import('child_process');
          const scriptPath = path.resolve(__dirname, './scripts/generate-blog-html.js');
          
          execSync(`node "${scriptPath}"`, { 
            stdio: 'inherit',
            cwd: __dirname 
          });
          
          // Copier les fichiers générés dans public/blog vers dist/blog
          const publicBlogDir = path.resolve(__dirname, './public/blog');
          const distBlogDir = path.resolve(__dirname, './dist/blog');
          
          if (fs.existsSync(publicBlogDir)) {
            // Créer le dossier de destination s'il n'existe pas
            if (!fs.existsSync(distBlogDir)) {
              fs.mkdirSync(distBlogDir, { recursive: true });
            }
            
            // Copier tous les fichiers HTML
            const blogFiles = fs.readdirSync(publicBlogDir).filter(f => f.endsWith('.html'));
            blogFiles.forEach(file => {
              fs.copyFileSync(
                path.join(publicBlogDir, file),
                path.join(distBlogDir, file)
              );
            });
            console.log(`✅ ${blogFiles.length} pages blog copiées vers dist/blog/`);
          }
          
          console.log('✅ Static blog pages generated successfully');
        } catch (error) {
          console.error('❌ Erreur génération pages blog:', error);
          
          // Fallback simple en cas d'erreur
          try {
            const { generateAllStaticPages } = await import(path.resolve(__dirname, './scripts/generateStaticPages.ts'));
            await generateAllStaticPages();
            console.log('✅ Fallback: pages statiques générées');
          } catch (fallbackError) {
            console.error('❌ Échec du fallback:', fallbackError);
          }
        }
        
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
    seoPlugin(), // Activer en développement ET production pour forcer la génération
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
