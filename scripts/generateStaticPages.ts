import fs from 'fs';
import path from 'path';
import { getStaticPagesConfig, generateStaticHTML } from '../src/utils/staticPageGenerator';

const OUTPUT_DIR = './dist';

// Assurer que le répertoire dist existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Fonction pour créer un répertoire s'il n'existe pas
const ensureDirectory = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Fonction principale pour générer toutes les pages statiques
const generateAllStaticPages = () => {
  console.log('🚀 Génération des pages statiques...');
  
  // S'assurer que le répertoire de sortie existe
  ensureDirectory(OUTPUT_DIR);
  
  const staticPages = getStaticPagesConfig();
  let generatedCount = 0;
  
  console.log(`📋 Génération de ${staticPages.length} pages statiques...`);
  
  staticPages.forEach(pageConfig => {
    try {
      // Générer le HTML pour cette page
      const html = generateStaticHTML(pageConfig);
      
      // Déterminer le chemin de fichier
      let filePath: string;
      
      if (pageConfig.path === '/') {
        // Page d'accueil
        filePath = path.join(OUTPUT_DIR, 'index.html');
      } else if (pageConfig.path.startsWith('/blog/')) {
        // Articles de blog
        const slug = pageConfig.path.replace('/blog/', '');
        const blogDir = path.join(OUTPUT_DIR, 'blog');
        ensureDirectory(blogDir);
        filePath = path.join(blogDir, `${slug}.html`);
      } else {
        // Autres pages
        const pageName = pageConfig.path.replace('/', '');
        filePath = path.join(OUTPUT_DIR, `${pageName}.html`);
      }
      
      // Écrire le fichier HTML
      fs.writeFileSync(filePath, html, 'utf8');
      
      console.log(`✅ Généré: ${pageConfig.path} -> ${path.relative('.', filePath)}`);
      generatedCount++;
      
    } catch (error) {
      console.error(`❌ Erreur lors de la génération de ${pageConfig.path}:`, error);
    }
  });
  
  // Générer aussi blog/index.html pour /blog
  const blogPageConfig = staticPages.find(p => p.path === '/blog');
  if (blogPageConfig) {
    const blogDir = path.join(OUTPUT_DIR, 'blog');
    ensureDirectory(blogDir);
    const blogIndexPath = path.join(blogDir, 'index.html');
    const html = generateStaticHTML(blogPageConfig);
    fs.writeFileSync(blogIndexPath, html, 'utf8');
    console.log(`✅ Généré: /blog/index.html -> ${path.relative('.', blogIndexPath)}`);
    generatedCount++;
  }
  
  console.log(`🎉 ${generatedCount} pages statiques générées avec succès !`);
  
  // Générer un fichier de mapping pour les redirections
  generateRedirectMapping(staticPages);
};

// Fonction pour générer le mapping des redirections
const generateRedirectMapping = (staticPages: any[]) => {
  const mapping = {
    staticPages: staticPages.map(page => ({
      path: page.path,
      file: page.path === '/' ? '/index.html' : 
            page.path.startsWith('/blog/') ? `/blog/${page.path.replace('/blog/', '')}.html` :
            `/${page.path.replace('/', '')}.html`,
      lastModified: page.lastModified || new Date().toISOString()
    })),
    generatedAt: new Date().toISOString()
  };
  
  const mappingPath = path.join(OUTPUT_DIR, 'static-pages-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf8');
  console.log(`📝 Mapping généré: ${path.relative('.', mappingPath)}`);
};

// Lancer la génération si le script est exécuté directement
if (require.main === module) {
  generateAllStaticPages();
}

export { generateAllStaticPages };