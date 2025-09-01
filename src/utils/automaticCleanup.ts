// Système de nettoyage automatique intégré au build
import { seoCleanup } from './seoCleanup';
import { googleSearchConsole } from './googleSearchConsoleIntegration';

// Configuration du nettoyage automatique
interface AutoCleanupConfig {
  enabled: boolean;
  onBuild: boolean;
  onDeploy: boolean;
  schedule: 'daily' | 'weekly' | 'monthly';
  environment: 'development' | 'production';
}

const defaultConfig: AutoCleanupConfig = {
  enabled: true,
  onBuild: true,
  onDeploy: true,
  schedule: 'monthly',
  environment: 'production'
};

// Classe pour gérer le nettoyage automatique
class AutomaticCleanupManager {
  private config: AutoCleanupConfig;
  private isRunning = false;
  private lastExecution: Date | null = null;

  constructor(config: Partial<AutoCleanupConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  // Vérifier si le nettoyage doit être exécuté
  private shouldRunCleanup(): boolean {
    if (!this.config.enabled || this.isRunning) {
      return false;
    }

    // En développement, ne pas exécuter automatiquement
    if (this.config.environment === 'development') {
      return false;
    }

    // Si c'est le premier lancement
    if (!this.lastExecution) {
      return true;
    }

    // Vérifier selon la fréquence configurée
    const now = new Date();
    const timeSinceLastExecution = now.getTime() - this.lastExecution.getTime();
    
    switch (this.config.schedule) {
      case 'daily':
        return timeSinceLastExecution > 24 * 60 * 60 * 1000; // 24h
      case 'weekly':
        return timeSinceLastExecution > 7 * 24 * 60 * 60 * 1000; // 7 jours
      case 'monthly':
        return timeSinceLastExecution > 30 * 24 * 60 * 60 * 1000; // 30 jours
      default:
        return false;
    }
  }

  // Exécuter le nettoyage automatique
  public async runAutoCleanup(): Promise<boolean> {
    if (!this.shouldRunCleanup()) {
      console.log('⏭️ Nettoyage automatique: pas nécessaire pour le moment');
      return false;
    }

    console.log('🤖 NETTOYAGE AUTOMATIQUE SEO - DÉMARRAGE');
    console.log('========================================');
    
    this.isRunning = true;
    
    try {
      // 1. Nettoyage complet
      console.log('🧹 Phase 1: Nettoyage des URLs obsolètes...');
      const report = await seoCleanup.performFullCleanup();
      
      // 2. Soumission automatique
      console.log('📤 Phase 2: Soumission à Google Search Console...');
      const sitemapUrl = 'https://www.rencontrecoquine.info/sitemap.xml';
      await googleSearchConsole.submitSitemap(sitemapUrl);
      
      // 3. Indexation prioritaire
      console.log('⚡ Phase 3: Indexation prioritaire...');
      const priorityUrls = [
        'https://www.rencontrecoquine.info/',
        'https://www.rencontrecoquine.info/blog'
      ];
      await googleSearchConsole.requestIndexing(priorityUrls);
      
      this.lastExecution = new Date();
      
      console.log('✅ Nettoyage automatique terminé avec succès');
      console.log(`📊 Résumé: ${report.validUrls} URLs valides, ${report.removedUrls} supprimées`);
      console.log(`📅 Prochaine exécution: ${new Date(Date.now() + this.getScheduleInterval()).toLocaleDateString('fr-FR')}`);
      
      return true;
      
    } catch (error) {
      console.error('❌ Erreur pendant le nettoyage automatique:', error);
      return false;
    } finally {
      this.isRunning = false;
    }
  }

  // Obtenir l'intervalle de fréquence en millisecondes
  private getScheduleInterval(): number {
    switch (this.config.schedule) {
      case 'daily': return 24 * 60 * 60 * 1000;
      case 'weekly': return 7 * 24 * 60 * 60 * 1000;
      case 'monthly': return 30 * 24 * 60 * 60 * 1000;
      default: return 30 * 24 * 60 * 60 * 1000;
    }
  }

  // Hook pour le processus de build
  public async onBuild(): Promise<void> {
    if (!this.config.onBuild) return;
    
    console.log('🏗️ Hook de build: vérification SEO...');
    await this.runAutoCleanup();
  }

  // Hook pour le déploiement
  public async onDeploy(): Promise<void> {
    if (!this.config.onDeploy) return;
    
    console.log('🚀 Hook de déploiement: notification Google...');
    
    try {
      const sitemapUrl = 'https://www.rencontrecoquine.info/sitemap.xml';
      await googleSearchConsole.submitSitemap(sitemapUrl);
      console.log('✅ Notification de déploiement envoyée à Google');
    } catch (error) {
      console.error('❌ Erreur notification déploiement:', error);
    }
  }

  // Obtenir le statut du système
  public getStatus() {
    return {
      enabled: this.config.enabled,
      isRunning: this.isRunning,
      lastExecution: this.lastExecution?.toISOString() || null,
      nextExecution: this.lastExecution 
        ? new Date(this.lastExecution.getTime() + this.getScheduleInterval()).toISOString()
        : new Date().toISOString(),
      schedule: this.config.schedule,
      environment: this.config.environment
    };
  }

  // Forcer l'exécution manuelle
  public async forceCleanup(): Promise<boolean> {
    console.log('🔧 Nettoyage manuel forcé...');
    
    const wasEnabled = this.config.enabled;
    this.config.enabled = true;
    this.lastExecution = null; // Forcer l'exécution
    
    const result = await this.runAutoCleanup();
    
    this.config.enabled = wasEnabled;
    return result;
  }
}

// Instance globale du gestionnaire automatique
export const autoCleanup = new AutomaticCleanupManager({
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development'
});

// Fonctions utilitaires exportées
export const runCleanupOnBuild = () => autoCleanup.onBuild();
export const runCleanupOnDeploy = () => autoCleanup.onDeploy();
export const forceManualCleanup = () => autoCleanup.forceCleanup();
export const getCleanupStatus = () => autoCleanup.getStatus();

// Initialisation automatique en production
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // Lancer le nettoyage automatique après le chargement de la page
  window.addEventListener('load', () => {
    setTimeout(() => {
      autoCleanup.runAutoCleanup();
    }, 5000); // Délai de 5 secondes pour éviter l'impact sur les performances
  });
}

export type { AutoCleanupConfig };
export { AutomaticCleanupManager };