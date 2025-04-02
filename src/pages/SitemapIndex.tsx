
import { useEffect } from "react";
import { generateSitemapIndex } from "@/utils/sitemapGenerator";

const SitemapIndex = () => {
  useEffect(() => {
    // Générer le sitemap index
    const sitemapIndex = generateSitemapIndex();
    
    // Écrire le XML directement dans le document
    document.open('text/xml');
    document.write('<?xml version="1.0" encoding="UTF-8"?>');
    document.write(sitemapIndex);
    document.close();
  }, []);

  // Le rendu React normal ne sera pas utilisé car nous écrivons directement au document
  return null;
};

export default SitemapIndex;
