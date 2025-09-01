#!/usr/bin/env tsx

// Script de nettoyage SEO complet et automatisé
import fs from 'fs';
import path from 'path';
import { seoCleanup, scheduleMonthlyCleanup } from '../src/utils/seoCleanup';
import { googleSearchConsole, quickIndexUrls, quickSubmitSitemap } from '../src/utils/googleSearchConsoleIntegration';
import { blogPosts } from '../src/data/blogPosts';

const OUTPUT_DIR = './dist';
const PUBLIC_DIR = './public';

// Fonction pour s'assurer qu'un répertoire existe
const ensureDirectory = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Nettoyage complet et optimisation SEO
const performCompleteCleanup = async () => {
  console.log('🧹 NETTOYAGE SEO COMPLET - DÉMARRAGE');
  console.log('====================================');
  console.log(`📅 Date: ${new Date().toLocaleDateString('fr-FR')}`);
  console.log('');

  try {
    // Étape 1: Analyse et nettoyage des URLs
    console.log('📋 ÉTAPE 1: ANALYSE ET NETTOYAGE');
    console.log('--------------------------------');
    
    const cleanupReport = await seoCleanup.performFullCleanup();
    
    console.log('✅ URLs nettoyées:', cleanupReport.removedUrls.length);
    console.log('✅ URLs valides conservées:', cleanupReport.validUrls);
    console.log('');

    // Étape 2: Génération du sitemap propre
    console.log('📋 ÉTAPE 2: GÉNÉRATION SITEMAP OPTIMISÉ');
    console.log('--------------------------------------');
    
    const cleanSitemap = seoCleanup.generateCleanSitemap();
    const sitemapWithDeclaration = `<?xml version="1.0" encoding="UTF-8"?>\n${cleanSitemap}`;
    
    // Créer les répertoires
    ensureDirectory(PUBLIC_DIR);
    ensureDirectory(OUTPUT_DIR);
    
    // Sauvegarder le sitemap nettoyé
    const cleanSitemapPath = path.join(PUBLIC_DIR, 'sitemap-clean.xml');
    fs.writeFileSync(cleanSitemapPath, sitemapWithDeclaration, 'utf8');
    
    if (fs.existsSync(OUTPUT_DIR)) {
      fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-clean.xml'), sitemapWithDeclaration, 'utf8');
    }
    
    console.log('✅ Sitemap nettoyé généré');
    console.log('');

    // Étape 3: Mise à jour des sitemaps de production
    console.log('📋 ÉTAPE 3: MISE À JOUR SITEMAPS PRODUCTION');
    console.log('------------------------------------------');
    
    // Remplacer les anciens sitemaps par les versions nettoyées
    const productionFiles = [
      'sitemap.xml',
      'sitemap-v2-content.xml',
      'sitemap-content.xml'
    ];
    
    productionFiles.forEach(filename => {
      const targetPath = path.join(PUBLIC_DIR, filename);
      fs.writeFileSync(targetPath, sitemapWithDeclaration, 'utf8');
      
      if (fs.existsSync(OUTPUT_DIR)) {
        fs.writeFileSync(path.join(OUTPUT_DIR, filename), sitemapWithDeclaration, 'utf8');
      }
    });
    
    console.log('✅ Sitemaps de production mis à jour');
    console.log('');

    // Étape 4: Soumission à Google Search Console
    console.log('📋 ÉTAPE 4: SOUMISSION GOOGLE SEARCH CONSOLE');
    console.log('--------------------------------------------');
    
    const baseUrl = 'https://www.rencontrecoquine.info';
    const sitemapUrl = `${baseUrl}/sitemap.xml`;
    
    // Soumettre le sitemap nettoyé
    const sitemapSubmission = await quickSubmitSitemap(sitemapUrl);
    console.log('✅ Sitemap soumis à Google:', sitemapSubmission.status);
    
    // Demander l'indexation prioritaire des URLs valides
    const priorityUrls = [
      `${baseUrl}/`,
      `${baseUrl}/blog`,
      ...blogPosts.slice(0, 5).map(post => `${baseUrl}/blog/${post.slug}`)
    ];
    
    const indexingRequests = await quickIndexUrls(priorityUrls);
    console.log('✅ Indexation prioritaire demandée pour', indexingRequests.length, 'URLs');
    console.log('');

    // Étape 5: Génération du rapport final
    console.log('📋 ÉTAPE 5: RAPPORT FINAL');
    console.log('------------------------');
    
    const finalReport = {
      cleanupDate: new Date().toISOString(),
      summary: {
        totalUrlsAnalyzed: cleanupReport.totalUrls,
        validUrlsKept: cleanupReport.validUrls,
        obsoleteUrlsRemoved: cleanupReport.removedUrls,
        sitemapStatus: 'updated',
        googleSubmissionStatus: sitemapSubmission.status,
        priorityIndexingRequested: indexingRequests.length
      },
      details: {
        cleanupReport,
        indexingRequests: indexingRequests.map(r => ({
          url: r.url,
          status: r.status,
          timestamp: r.timestamp
        })),
        sitemapSubmission,
        nextCleanupDate: cleanupReport.nextCleanupDate
      },
      recommendations: [
        'Vérifier l\'indexation dans Google Search Console dans 24-48h',
        'Surveiller les métriques d\'indexation durant la semaine',
        'Planifier le prochain nettoyage mensuel',
        'Tester manuellement 3-4 URLs importantes'
      ]
    };
    
    // Sauvegarder le rapport
    const reportPath = path.join(PUBLIC_DIR, 'seo-cleanup-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2), 'utf8');
    
    console.log('📊 RAPPORT DE NETTOYAGE SEO');
    console.log('===========================');
    console.log(`📈 URLs analysées: ${finalReport.summary.totalUrlsAnalyzed}`);
    console.log(`✅ URLs valides conservées: ${finalReport.summary.validUrlsKept}`);
    console.log(`🗑️ URLs obsolètes supprimées: ${finalReport.summary.obsoleteUrlsRemoved}`);
    console.log(`🗺️ Statut sitemap: ${finalReport.summary.sitemapStatus}`);
    console.log(`🚀 Soumission Google: ${finalReport.summary.googleSubmissionStatus}`);
    console.log(`⭐ Indexation prioritaire: ${finalReport.summary.priorityIndexingRequested} URLs`);
    console.log('');
    
    console.log('📋 PROCHAINES ÉTAPES:');
    finalReport.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
    console.log('');
    
    console.log('🎉 NETTOYAGE SEO TERMINÉ AVEC SUCCÈS !');
    console.log(`📊 Rapport sauvegardé: ${reportPath}`);
    console.log(`📅 Prochain nettoyage: ${new Date(finalReport.details.nextCleanupDate).toLocaleDateString('fr-FR')}`);
    
    return finalReport;

  } catch (error) {
    console.error('❌ ERREUR PENDANT LE NETTOYAGE SEO:');
    console.error(error);
    process.exit(1);
  }
};

// Configuration du nettoyage mensuel automatique
const setupMonthlyCleanup = () => {
  console.log('📅 Configuration du nettoyage mensuel automatique...');
  
  const monthlyCleanup = scheduleMonthlyCleanup();
  
  console.log('✅ Nettoyage mensuel configuré');
  console.log('   - Fréquence: tous les 30 jours');
  console.log('   - Processus: automatique');
  console.log('   - Rapport: généré à chaque exécution');
  
  return monthlyCleanup;
};

// Validation finale
const validateCleanup = () => {
  console.log('🔍 VALIDATION POST-NETTOYAGE');
  console.log('----------------------------');
  
  const requiredFiles = [
    'sitemap.xml',
    'sitemap-clean.xml', 
    'seo-cleanup-report.json'
  ];
  
  let allValid = true;
  
  requiredFiles.forEach(filename => {
    const filePath = path.join(PUBLIC_DIR, filename);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      console.log(`✅ ${filename} - Taille: ${Math.round(stats.size / 1024)}KB`);
    } else {
      console.log(`❌ ${filename} - MANQUANT`);
      allValid = false;
    }
  });
  
  if (allValid) {
    console.log('🎯 Validation terminée - Tous les fichiers sont présents');
  } else {
    console.log('⚠️ Validation échouée - Des fichiers sont manquants');
  }
  
  return allValid;
};

// Exécution du script
const main = async () => {
  try {
    // Nettoyage complet
    await performCompleteCleanup();
    
    // Configuration du nettoyage automatique
    setupMonthlyCleanup();
    
    // Validation finale
    const isValid = validateCleanup();
    
    console.log('');
    console.log('🏁 PROCESSUS TERMINÉ');
    console.log('===================');
    console.log(isValid ? '✅ Succès total' : '⚠️ Succès avec avertissements');
    
    process.exit(isValid ? 0 : 1);
    
  } catch (error) {
    console.error('💥 ERREUR CRITIQUE:', error);
    process.exit(1);
  }
};

// Lancer le script si appelé directement
if (require.main === module) {
  main();
}

// Export pour utilisation programmatique
export { performCompleteCleanup, setupMonthlyCleanup, validateCleanup };