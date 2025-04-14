
import { useEffect, useState } from "react";
import { generateSitemap } from "@/utils/sitemapGenerator";
import { Navigate } from "react-router-dom";

const Sitemap = () => {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // Générer le sitemap
    const sitemap = generateSitemap();
    
    // Créer un Blob avec le type MIME correct
    const blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + sitemap], {
      type: 'application/xml; charset=utf-8'
    });
    
    // Créer une URL pour le Blob
    const blobURL = URL.createObjectURL(blob);
    
    // Ouvrir le XML dans un nouvel onglet ou le télécharger directement
    const newWindow = window.open(blobURL, '_blank');
    
    // Si le navigateur bloque l'ouverture, proposer le téléchargement
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = "sitemap.xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    // Nettoyer l'URL du Blob
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
      setRedirected(true);
    }, 100);
  }, []);

  if (redirected) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="p-8">
      <h1>Génération du sitemap.xml...</h1>
      <p>Si le téléchargement ne démarre pas, veuillez vérifier les paramètres de votre navigateur.</p>
    </div>
  );
};

export default Sitemap;
