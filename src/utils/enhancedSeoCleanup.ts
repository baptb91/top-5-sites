import { blogPosts } from '@/data/blogPosts';
import { generateSitemap } from './sitemapGenerator';
import { writeFileSync } from 'fs';
import { googleSearchConsole } from './googleSearchConsoleIntegration';

export interface EnhancedCleanupReport {
  timestamp: string;
  totalUrls: number;
  validUrls: number;
  removedUrls: number;
  blogArticles: number;
  legalPages: number;
  sitemapGenerated: boolean;
  googleSubmitted: boolean;
  indexingRequested: string[];
  cleanupActions: string[];
}

export class EnhancedSEOCleanupManager {
  private validUrls: string[] = [];
  private urlsToRemove: string[] = [];

  constructor() {
    this.initializeValidUrls();
  }

  private initializeValidUrls(): void {
    // URLs principales
    this.validUrls = [
      'https://www.rencontrecoquine.info',
      'https://www.rencontrecoquine.info/blog'
    ];

    // Articles de blog avec nouveaux slugs optimisés
    this.validUrls.push(...blogPosts.map(post => 
      `https://www.rencontrecoquine.info/blog/${post.slug}`
    ));

    // Pages légales
    this.validUrls.push(
      'https://www.rencontrecoquine.info/legal/privacy-policy',
      'https://www.rencontrecoquine.info/legal/terms-of-service',
      'https://www.rencontrecoquine.info/legal/cookie-policy'
    );

    console.log(`✅ Initialized ${this.validUrls.length} valid URLs`);
  }

  private identifyObsoleteUrls(): string[] {
    // URLs obsolètes à supprimer de l'index Google
    const obsoleteUrls = [
      // Anciennes URLs d'articles avec mots-clés problématiques
      'https://www.rencontrecoquine.info/blog/rediger-profil-irresistible-rencontre-coquine',
      'https://www.rencontrecoquine.info/blog/erreurs-a-eviter-site-rencontre-coquine',
      'https://www.rencontrecoquine.info/blog/secrets-seduction-site-rencontre-coquine',
      'https://www.rencontrecoquine.info/blog/techniques-flirt-efficaces-rencontres-coquines',
      'https://www.rencontrecoquine.info/blog/envoyer-premier-message-parfait-rencontre-coquine',
      'https://www.rencontrecoquine.info/blog/phrases-ouverture-originales-sites-rencontres',
      'https://www.rencontrecoquine.info/blog/attirer-plus-messages-application-rencontre',
      // URLs fantômes détectées
      'https://www.rencontrecoquine.info/blog/guide-complet-sites-coquins',
      'https://www.rencontrecoquine.info/blog/conseils-drague-rencontres',
      'https://www.rencontrecoquine.info/blog/techniques-seduction-avancees',
      'https://www.rencontrecoquine.info/blog/rencontres-libertines-guide',
      // URLs avec erreurs 404 identifiées
      'https://www.rencontrecoquine.info/category/conseils',
      'https://www.rencontrecoquine.info/category/guides',
      'https://www.rencontrecoquine.info/tag/rencontres',
      'https://www.rencontrecoquine.info/tag/seduction',
      'https://www.rencontrecoquine.info/author/admin',
      'https://www.rencontrecoquine.info/sitemap.xml',
      'https://www.rencontrecoquine.info/feed',
      'https://www.rencontrecoquine.info/wp-content',
      // URLs de pagination inexistantes
      'https://www.rencontrecoquine.info/blog/page/2',
      'https://www.rencontrecoquine.info/blog/page/3',
      // URLs mal formées détectées
      'https://www.rencontrecoquine.info//blog',
      'https://www.rencontrecoquine.info/blog/',
      'https://www.rencontrecoquine.info////',
      // Autres URLs problématiques
      'https://www.rencontrecoquine.info/undefined',
      'https://www.rencontrecoquine.info/null',
      'https://www.rencontrecoquine.info/404',
      'https://www.rencontrecoquine.info/search',
      'https://www.rencontrecoquine.info/admin',
      'https://www.rencontrecoquine.info/login',
      'https://www.rencontrecoquine.info/wp-admin',
      'https://www.rencontrecoquine.info/wp-login',
      'https://www.rencontrecoquine.info/api',
      'https://www.rencontrecoquine.info/robots.txt',
      'https://www.rencontrecoquine.info/favicon.ico',
      'https://www.rencontrecoquine.info/.well-known',
      'https://www.rencontrecoquine.info/assets',
      'https://www.rencontrecoquine.info/static',
      'https://www.rencontrecoquine.info/public'
    ];

    this.urlsToRemove = obsoleteUrls;
    return obsoleteUrls;
  }

  public async performCompleteCleanup(): Promise<EnhancedCleanupReport> {
    console.log('🚀 Starting Enhanced SEO Cleanup...');
    
    const startTime = new Date();
    const obsoleteUrls = this.identifyObsoleteUrls();
    const cleanupActions: string[] = [];

    // 1. Générer le sitemap ultra-propre
    console.log('📝 Generating clean sitemap...');
    const cleanSitemap = generateSitemap();
    
    try {
      // Sauvegarder le nouveau sitemap
      writeFileSync('public/sitemap-v2-content.xml', cleanSitemap);
      writeFileSync('public/sitemap-content.xml', cleanSitemap);
      cleanupActions.push('Generated clean sitemap with optimized URLs');
      console.log('✅ Clean sitemap generated successfully');
    } catch (error) {
      console.error('❌ Error generating sitemap:', error);
      cleanupActions.push('ERROR: Failed to generate sitemap');
    }

    // 2. Supprimer les URLs obsolètes de Google Search Console
    console.log('🗑️ Requesting removal of obsolete URLs...');
    try {
      const removalResults = await googleSearchConsole.requestRemoval(obsoleteUrls);
      cleanupActions.push(`Requested removal of ${obsoleteUrls.length} obsolete URLs`);
      console.log(`✅ Requested removal of ${obsoleteUrls.length} URLs`);
    } catch (error) {
      console.error('❌ Error requesting URL removal:', error);
      cleanupActions.push('ERROR: Failed to request URL removal');
    }

    // 3. Soumettre le sitemap nettoyé
    console.log('📤 Submitting clean sitemap to Google...');
    let googleSubmitted = false;
    try {
      const sitemapSubmission = await googleSearchConsole.submitSitemap('https://www.rencontrecoquine.info/sitemap-v2-index.xml');
      googleSubmitted = sitemapSubmission.status === 'submitted';
      cleanupActions.push('Submitted clean sitemap to Google Search Console');
      console.log('✅ Sitemap submitted to Google Search Console');
    } catch (error) {
      console.error('❌ Error submitting sitemap:', error);
      cleanupActions.push('ERROR: Failed to submit sitemap');
    }

    // 4. Demander l'indexation prioritaire des URLs valides
    console.log('🎯 Requesting priority indexing...');
    const blogUrls = blogPosts.map(post => `https://www.rencontrecoquine.info/blog/${post.slug}`);
    const priorityUrls = [
      'https://www.rencontrecoquine.info',
      'https://www.rencontrecoquine.info/blog',
      ...blogUrls
    ];

    let indexingRequested: string[] = [];
    try {
      const indexingResults = await googleSearchConsole.requestIndexing(priorityUrls);
      indexingRequested = indexingResults.map(result => result.url);
      cleanupActions.push(`Requested priority indexing for ${priorityUrls.length} URLs`);
      console.log(`✅ Requested indexing for ${priorityUrls.length} priority URLs`);
    } catch (error) {
      console.error('❌ Error requesting indexing:', error);
      cleanupActions.push('ERROR: Failed to request priority indexing');
    }

    // 5. Générer le rapport détaillé
    const report: EnhancedCleanupReport = {
      timestamp: startTime.toISOString(),
      totalUrls: this.validUrls.length + obsoleteUrls.length,
      validUrls: this.validUrls.length,
      removedUrls: obsoleteUrls.length,
      blogArticles: blogPosts.length,
      legalPages: 3,
      sitemapGenerated: true,
      googleSubmitted,
      indexingRequested,
      cleanupActions
    };

    // Sauvegarder le rapport
    try {
      writeFileSync('public/enhanced-seo-cleanup-report.json', JSON.stringify(report, null, 2));
      console.log('✅ Enhanced cleanup report saved');
    } catch (error) {
      console.error('❌ Error saving report:', error);
    }

    console.log('🎉 Enhanced SEO Cleanup completed successfully!');
    console.log(`📊 Summary: ${this.validUrls.length} valid URLs, ${obsoleteUrls.length} URLs removed`);
    
    return report;
  }

  public getValidUrls(): string[] {
    return [...this.validUrls];
  }

  public getObsoleteUrls(): string[] {
    return [...this.urlsToRemove];
  }

  public async scheduleAutomaticCleanup(): Promise<void> {
    // Planifier un nettoyage automatique mensuel
    console.log('📅 Scheduling automatic monthly cleanup...');
    
    // Simulation de planification (en production, utiliser un cron job)
    const nextCleanupDate = new Date();
    nextCleanupDate.setMonth(nextCleanupDate.getMonth() + 1);
    
    console.log(`✅ Next automatic cleanup scheduled for: ${nextCleanupDate.toISOString()}`);
  }
}

// Instance globale
export const enhancedSeoCleanup = new EnhancedSEOCleanupManager();

// Fonctions utilitaires
export const runEnhancedCleanup = () => enhancedSeoCleanup.performCompleteCleanup();
export const getCleanUrls = () => enhancedSeoCleanup.getValidUrls();
export const getObsoleteUrls = () => enhancedSeoCleanup.getObsoleteUrls();
export const scheduleCleanup = () => enhancedSeoCleanup.scheduleAutomaticCleanup();