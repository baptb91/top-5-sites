
import { useEffect } from "react";
import { generateSitemap } from "@/utils/sitemapGenerator";

const Sitemap = () => {
  useEffect(() => {
    // Générer le sitemap
    const sitemap = generateSitemap();
    
    // Définir le type de contenu comme XML
    document.contentType = "application/xml;charset=UTF-8";
    
    // Écrire directement le XML dans le document
    document.write(sitemap);
    document.close();
  }, []);

  // Le rendu React normal ne sera pas utilisé car nous écrivons directement au document
  return null;
};

export default Sitemap;
