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
        
        // 2. Forcer la génération des pages statiques maintenant
        try {
          const { generateAllStaticPages } = await import(path.resolve(__dirname, './scripts/generateStaticPages.ts'));
          await generateAllStaticPages();
          console.log('✅ Static pages generated successfully');
        } catch (error) {
          console.log('⚠️ Fallback static page generation...');
          
          // Import des vrais slugs des articles de blog
          const { blogPosts } = await import(path.resolve(__dirname, './src/data/blogPosts.ts'));
          
          // Créer les dossiers
          const blogDir = path.resolve(__dirname, './dist/blog');
          if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true });
          }
          
          // Générer chaque page d'article
          blogPosts.forEach((post: any) => {
            const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${post.title} | RencontreCoquine.info</title>
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="https://www.rencontrecoquine.info/blog/${post.slug}" />
</head>
<body>
  <main>
    <h1>${post.title}</h1>
    <p>Contenu optimisé pour les moteurs de recherche. Version interactive disponible avec JavaScript.</p>
  </main>
</body>
</html>`;
            
            fs.writeFileSync(path.join(blogDir, `${post.slug}.html`), html, 'utf8');
            console.log(`✅ Generated: /blog/${post.slug}.html`);
          });
          
          console.log('✅ Fallback static pages generated successfully');
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
