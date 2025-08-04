import fs from 'fs';
import path from 'path';
import { generateSitemap, generateSitemapIndex } from '../src/utils/sitemapGenerator';
import { notifyGoogleOfUpdates } from '../src/utils/googleSubmission';

const OUTPUT_DIR = './dist';
const PUBLIC_DIR = './public';

// Fonction pour s'assurer qu'un répertoire existe
const ensureDirectory = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Fonction pour générer les sitemaps optimisés
const generateOptimizedSitemaps = () => {
  console.log('🗺️  Génération des sitemaps optimisés...');
  
  // S'assurer que les répertoires existent
  ensureDirectory(OUTPUT_DIR);
  ensureDirectory(PUBLIC_DIR);
  
  try {
    // Générer le sitemap principal avec le bon format XML
    const sitemap = generateSitemap();
    const sitemapWithDeclaration = `<?xml version="1.0" encoding="UTF-8"?>\n${sitemap}`;
    
    // Générer le sitemap index
    const sitemapIndex = generateSitemapIndex();
    const sitemapIndexWithDeclaration = `<?xml version="1.0" encoding="UTF-8"?>\n${sitemapIndex}`;
    
    // Écrire les fichiers dans public/ (pour le développement)
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-v3-content.xml'), sitemapWithDeclaration, 'utf8');
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-v3-index.xml'), sitemapIndexWithDeclaration, 'utf8');
    
    // Écrire les fichiers dans dist/ (pour la production)
    if (fs.existsSync(OUTPUT_DIR)) {
      fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-v3-content.xml'), sitemapWithDeclaration, 'utf8');
      fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-v3-index.xml'), sitemapIndexWithDeclaration, 'utf8');
      
      // Créer des liens symboliques pour les anciennes versions
      const mainSitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
      const indexSitemapPath = path.join(OUTPUT_DIR, 'sitemap-index.xml');
      
      // Supprimer les anciens liens s'ils existent
      if (fs.existsSync(mainSitemapPath)) fs.unlinkSync(mainSitemapPath);
      if (fs.existsSync(indexSitemapPath)) fs.unlinkSync(indexSitemapPath);
      
      // Créer les nouveaux liens
      fs.copyFileSync(path.join(OUTPUT_DIR, 'sitemap-v3-index.xml'), mainSitemapPath);
      fs.copyFileSync(path.join(OUTPUT_DIR, 'sitemap-v3-content.xml'), path.join(OUTPUT_DIR, 'sitemap-content.xml'));
      
      console.log('✅ Sitemaps copiés dans dist/');
    }
    
    // Générer un rapport de génération
    const report = {
      generatedAt: new Date().toISOString(),
      files: [
        'sitemap-v3-index.xml',
        'sitemap-v3-content.xml'
      ],
      totalUrls: sitemap.split('<url>').length - 1,
      lastModified: new Date().toISOString().split('T')[0]
    };
    
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-generation-report.json'), JSON.stringify(report, null, 2), 'utf8');
    
    console.log(`✅ Sitemaps générés avec succès !`);
    console.log(`📊 Rapport : ${report.totalUrls} URLs indexées`);
    
    // Notifier Google automatiquement
    notifyGoogleOfUpdates().then(result => {
      console.log('🚀 Notification Google:', result.success ? 'Envoyée' : 'Erreur');
    });
    
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de la génération des sitemaps:', error);
    return false;
  }
};

// Fonction pour valider les sitemaps générés
const validateSitemaps = () => {
  console.log('🔍 Validation des sitemaps...');
  
  const files = ['sitemap-v3-index.xml', 'sitemap-v3-content.xml'];
  let allValid = true;
  
  files.forEach(filename => {
    const filePath = path.join(PUBLIC_DIR, filename);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Vérifications basiques
      const hasXmlDeclaration = content.startsWith('<?xml');
      const hasValidEncoding = content.includes('encoding="UTF-8"');
      const hasNamespace = content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
      
      if (hasXmlDeclaration && hasValidEncoding && hasNamespace) {
        console.log(`✅ ${filename} - Valide`);
      } else {
        console.log(`❌ ${filename} - Invalide`);
        allValid = false;
      }
    } else {
      console.log(`❌ ${filename} - Fichier manquant`);
      allValid = false;
    }
  });
  
  return allValid;
};

// Exécuter si appelé directement
if (require.main === module) {
  const success = generateOptimizedSitemaps();
  if (success) {
    const isValid = validateSitemaps();
    console.log(isValid ? '🎉 Tous les sitemaps sont valides!' : '⚠️ Certains sitemaps ont des problèmes');
  }
}

export { generateOptimizedSitemaps, validateSitemaps };