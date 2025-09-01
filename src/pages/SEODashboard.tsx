// Page dédiée au tableau de bord SEO
import React from 'react';
import { Helmet } from 'react-helmet';
import SEOManager from '@/components/SEOManager';

const SEODashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tableau de Bord SEO | RencontreCoquine.info</title>
        <meta name="description" content="Gestion et optimisation SEO automatisée pour un meilleur référencement" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <SEOManager />
      </div>
    </>
  );
};

export default SEODashboard;