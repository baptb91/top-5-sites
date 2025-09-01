// Composant de gestion SEO avec interface utilisateur
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { seoCleanup } from '@/utils/seoCleanup';
import { googleSearchConsole } from '@/utils/googleSearchConsoleIntegration';

interface SEOStatus {
  sitemapStatus: 'clean' | 'needs-cleanup' | 'error';
  indexingStatus: 'good' | 'issues' | 'unknown';
  lastCleanup: string | null;
  nextCleanup: string | null;
  totalUrls: number;
  validUrls: number;
  removedUrls: number;
}

export const SEOManager: React.FC = () => {
  const [status, setStatus] = useState<SEOStatus>({
    sitemapStatus: 'unknown' as any,
    indexingStatus: 'unknown',
    lastCleanup: null,
    nextCleanup: null,
    totalUrls: 0,
    validUrls: 0,
    removedUrls: 0
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [lastReport, setLastReport] = useState<any>(null);

  // Charger le statut SEO au montage
  useEffect(() => {
    loadSEOStatus();
  }, []);

  const loadSEOStatus = async () => {
    try {
      // Charger le dernier rapport s'il existe
      const reportResponse = await fetch('/seo-cleanup-report.json').catch(() => null);
      if (reportResponse?.ok) {
        const report = await reportResponse.json();
        setLastReport(report);
        setStatus({
          sitemapStatus: 'clean',
          indexingStatus: 'good',
          lastCleanup: report.cleanupDate,
          nextCleanup: report.details.nextCleanupDate,
          totalUrls: report.summary.totalUrlsAnalyzed,
          validUrls: report.summary.validUrlsKept,
          removedUrls: report.summary.obsoleteUrlsRemoved
        });
      } else {
        setStatus(prev => ({
          ...prev,
          sitemapStatus: 'needs-cleanup',
          indexingStatus: 'unknown'
        }));
      }
    } catch (error) {
      console.error('Erreur chargement statut SEO:', error);
      setStatus(prev => ({ ...prev, sitemapStatus: 'error' }));
    }
  };

  const runFullCleanup = async () => {
    setIsLoading(true);
    try {
      console.log('🧹 Lancement du nettoyage SEO complet...');
      
      // Exécuter le nettoyage complet
      const report = await seoCleanup.performFullCleanup();
      
      // Soumettre le sitemap nettoyé
      const sitemapUrl = 'https://www.rencontrecoquine.info/sitemap.xml';
      await googleSearchConsole.submitSitemap(sitemapUrl);
      
      // Mettre à jour le statut
      setStatus({
        sitemapStatus: 'clean',
        indexingStatus: 'good',
        lastCleanup: new Date().toISOString(),
        nextCleanup: report.nextCleanupDate,
        totalUrls: report.totalUrls,
        validUrls: report.validUrls,
        removedUrls: report.removedUrls
      });
      
      setLastReport(report);
      
      console.log('✅ Nettoyage SEO terminé avec succès');
      
    } catch (error) {
      console.error('❌ Erreur pendant le nettoyage:', error);
      setStatus(prev => ({ ...prev, sitemapStatus: 'error' }));
    }
    setIsLoading(false);
  };

  const getStatusColor = (statusType: string, value: string) => {
    if (statusType === 'sitemap') {
      switch (value) {
        case 'clean': return 'bg-green-500';
        case 'needs-cleanup': return 'bg-yellow-500';
        case 'error': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    }
    if (statusType === 'indexing') {
      switch (value) {
        case 'good': return 'bg-green-500';
        case 'issues': return 'bg-yellow-500';
        default: return 'bg-gray-500';
      }
    }
    return 'bg-gray-500';
  };

  const getStatusText = (statusType: string, value: string) => {
    if (statusType === 'sitemap') {
      switch (value) {
        case 'clean': return 'Propre';
        case 'needs-cleanup': return 'Nettoyage requis';
        case 'error': return 'Erreur';
        default: return 'Inconnu';
      }
    }
    if (statusType === 'indexing') {
      switch (value) {
        case 'good': return 'Bon';
        case 'issues': return 'Problèmes détectés';
        default: return 'Inconnu';
      }
    }
    return 'Inconnu';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Gestionnaire SEO</h1>
        <p className="text-muted-foreground">
          Nettoyage automatique et optimisation pour Google Search Console
        </p>
      </div>

      {/* Statut actuel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Statut SEO Actuel
          </CardTitle>
          <CardDescription>
            Vue d'ensemble de l'état d'indexation de votre site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Sitemap</p>
              <Badge className={getStatusColor('sitemap', status.sitemapStatus)}>
                {getStatusText('sitemap', status.sitemapStatus)}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Indexation</p>
              <Badge className={getStatusColor('indexing', status.indexingStatus)}>
                {getStatusText('indexing', status.indexingStatus)}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">URLs Valides</p>
              <p className="text-2xl font-bold">{status.validUrls}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">URLs Supprimées</p>
              <p className="text-2xl font-bold">{status.removedUrls}</p>
            </div>
          </div>
          
          {status.lastCleanup && (
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Dernier nettoyage:</span>{' '}
                  {new Date(status.lastCleanup).toLocaleDateString('fr-FR')}
                </div>
                <div>
                  <span className="font-medium">Prochain nettoyage:</span>{' '}
                  {status.nextCleanup ? new Date(status.nextCleanup).toLocaleDateString('fr-FR') : 'Non planifié'}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧹 Actions de Nettoyage
          </CardTitle>
          <CardDescription>
            Lancez un nettoyage complet pour optimiser l'indexation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <AlertDescription>
                Le nettoyage automatique va :
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Analyser toutes les URLs de votre site</li>
                  <li>Supprimer les URLs obsolètes de Google</li>
                  <li>Générer un sitemap optimisé</li>
                  <li>Soumettre le nouveau sitemap à Google Search Console</li>
                  <li>Demander l'indexation prioritaire des pages importantes</li>
                </ul>
              </AlertDescription>
            </Alert>
            
            <Button 
              onClick={runFullCleanup} 
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Nettoyage en cours...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  🚀 Lancer le Nettoyage SEO Complet
                </span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Rapport détaillé */}
      {lastReport && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📋 Dernier Rapport
            </CardTitle>
            <CardDescription>
              Détails du dernier nettoyage effectué
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-1">URLs Analysées</p>
                  <p className="text-2xl font-bold">{lastReport.summary?.totalUrlsAnalyzed || 0}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-1">URLs Conservées</p>
                  <p className="text-2xl font-bold text-green-600">{lastReport.summary?.validUrlsKept || 0}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium mb-1">URLs Supprimées</p>
                  <p className="text-2xl font-bold text-red-600">{lastReport.summary?.obsoleteUrlsRemoved || 0}</p>
                </div>
              </div>
              
              {lastReport.recommendations && (
                <div>
                  <h4 className="font-medium mb-2">Recommandations :</h4>
                  <ul className="space-y-1">
                    {lastReport.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-muted-foreground">{index + 1}.</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SEOManager;