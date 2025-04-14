
import { useEffect } from "react";
import { generateSitemapIndex } from "@/utils/sitemapGenerator";

const SitemapIndex = () => {
  useEffect(() => {
    // Générer le sitemap index
    const sitemapIndex = generateSitemapIndex();
    
    // Définir le type de contenu comme XML
    document.contentType = "application/xml;charset=UTF-8";
    
    // Écrire directement le XML dans le document
    document.write(sitemapIndex);
    document.close();
  }, []);

  // Le rendu React normal ne sera pas utilisé car nous écrivons directement au document
  return null;
};

export default SitemapIndex;
