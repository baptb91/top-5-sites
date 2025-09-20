import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { 
  generateV2SitemapIndex, 
  generateMainSitemap, 
  generateBlogSitemap, 
  generateLegalSitemap 
} from '../src/utils/sitemapGenerator';

// Fonction pour s'assurer que le répertoire existe
const ensureDirectory = (dirPath: string) => {
  try {
    mkdirSync(dirPath, { recursive: true });
  } catch (error) {
    // Le répertoire existe déjà
  }
};

// Fonction principale pour générer tous les sitemaps v2
const generateV2Sitemaps = async () => {
  console.log('🚀 Génération des sitemaps v2 structurés...');
  
  const publicDir = join(process.cwd(), 'public');
  const distDir = join(process.cwd(), 'dist');
  
  // S'assurer que les répertoires existent
  ensureDirectory(publicDir);
  ensureDirectory(distDir);
  
  try {
    // Générer le contenu des sitemaps avec les slugs corrects depuis blogPosts.ts
    const sitemapIndex = generateV2SitemapIndex();
    const mainSitemap = generateMainSitemap();
    const blogSitemap = generateBlogSitemap();
    const legalSitemap = generateLegalSitemap();
    
    console.log('🔍 Vérification des slugs utilisés dans le sitemap blog...');
    console.log('📝 Nombre d\'articles dans blogPosts:', require('../src/data/blogPosts').blogPosts.length);
    
    // Fichiers à créer
    const files = [
      {
        name: 'sitemap-v2-index.xml',
        content: `<?xml version="1.0" encoding="UTF-8"?>\n${sitemapIndex}`,
        description: 'Index principal des sitemaps'
      },
      {
        name: 'sitemap-v2-content-main.xml',
        content: `<?xml version="1.0" encoding="UTF-8"?>\n${mainSitemap}`,
        description: 'Sitemap des pages principales'
      },
      {
        name: 'sitemap-v2-content-blog.xml',
        content: `<?xml version="1.0" encoding="UTF-8"?>\n${blogSitemap}`,
        description: 'Sitemap des articles de blog'
      },
      {
        name: 'sitemap-v2-content-legal.xml',
        content: `<?xml version="1.0" encoding="UTF-8"?>\n${legalSitemap}`,
        description: 'Sitemap des pages légales'
      }
    ];
    
    // Écrire les fichiers dans public/ et dist/
    files.forEach(file => {
      const publicPath = join(publicDir, file.name);
      const distPath = join(distDir, file.name);
      
      // Écrire dans public/
      writeFileSync(publicPath, file.content, 'utf8');
      console.log(`✅ ${file.description} généré: public/${file.name}`);
      
      // Écrire dans dist/ si le répertoire existe
      try {
        writeFileSync(distPath, file.content, 'utf8');
        console.log(`✅ ${file.description} généré: dist/${file.name}`);
      } catch (error) {
        console.log(`⚠️  Dist non disponible pour ${file.name} (normal en développement)`);
      }
    });
    
    const report = {
      timestamp: new Date().toISOString(),
      sitemapsGenerated: files.map(f => f.name),
      totalUrls: {
        main: 2, // accueil + blog
        blog: blogSitemap.split('<url>').length - 1,
        legal: 4 // 4 pages légales
      },
      indexUrl: 'https://www.rencontrecoquine.info/sitemap-v2-index.xml',
      blogUrlsGenerated: blogSitemap.match(/<loc>https:\/\/www\.rencontrecoquine\.info\/blog\/([^<]+)<\/loc>/g)?.map(match => 
        match.replace(/<loc>https:\/\/www\.rencontrecoquine\.info\/blog\//, '').replace(/<\/loc>/, '')
      ) || []
    };
    
    const reportPath = join(publicDir, 'sitemap-v2-generation-report.json');
    writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    console.log('📊 Rapport de génération créé: sitemap-v2-generation-report.json');
    
    console.log('\n🎯 SITEMAPS V2 GÉNÉRÉS AVEC SUCCÈS!');
    console.log('📝 URL à soumettre dans Google Search Console:');
    console.log('   https://www.rencontrecoquine.info/sitemap-v2-index.xml');
    console.log('\n📋 Structure générée:');
    console.log('   ├── sitemap-v2-index.xml (index principal)');
    console.log('   ├── sitemap-v2-content-main.xml (accueil + blog)');
    console.log('   ├── sitemap-v2-content-blog.xml (articles)');
    console.log('   └── sitemap-v2-content-legal.xml (pages légales)');
    
    return report;
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des sitemaps v2:', error);
    throw error;
  }
};

// Fonction de validation des sitemaps
const validateV2Sitemaps = () => {
  console.log('\n🔍 Validation des sitemaps v2...');
  
  const publicDir = join(process.cwd(), 'public');
  const files = [
    'sitemap-v2-index.xml',
    'sitemap-v2-content-main.xml', 
    'sitemap-v2-content-blog.xml',
    'sitemap-v2-content-legal.xml'
  ];
  
  files.forEach(filename => {
    try {
      const content = require('fs').readFileSync(join(publicDir, filename), 'utf8');
      
      // Vérifications de base
      const checks = [
        { test: content.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), name: 'Déclaration XML' },
        { test: content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), name: 'Namespace sitemap' },
        { test: !content.includes('sitemap-v2-index.xml'), name: 'Pas d\'auto-référence' },
        { test: content.includes('https://www.rencontrecoquine.info/'), name: 'URLs valides' }
      ];
      
      const passed = checks.filter(check => check.test).length;
      const total = checks.length;
      
      if (passed === total) {
        console.log(`✅ ${filename}: ${passed}/${total} vérifications passées`);
      } else {
        console.log(`⚠️  ${filename}: ${passed}/${total} vérifications passées`);
        checks.forEach(check => {
          console.log(`   ${check.test ? '✅' : '❌'} ${check.name}`);
        });
      }
      
    } catch (error) {
      console.log(`❌ ${filename}: Fichier non trouvé ou erreur de lecture`);
    }
  });
  
  console.log('✨ Validation terminée');
};

// Exécution si appelé directement
if (require.main === module) {
  generateV2Sitemaps()
    .then(() => {
      validateV2Sitemaps();
    })
    .catch(console.error);
}

export { generateV2Sitemaps, validateV2Sitemaps };