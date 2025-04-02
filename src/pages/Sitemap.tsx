
import { useEffect } from "react";
import { generateSitemap } from "@/utils/sitemapGenerator";

const Sitemap = () => {
  useEffect(() => {
    // Générer le sitemap
    const sitemap = generateSitemap();
    
    // Écrire le XML directement dans le document
    document.open('text/xml');
    document.write('<?xml version="1.0" encoding="UTF-8"?>');
    document.write(sitemap);
    document.close();
  }, []);

  // Le rendu React normal ne sera pas utilisé car nous écrivons directement au document
  return null;
};

export default Sitemap;
