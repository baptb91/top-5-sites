
import { useEffect, useState } from "react";
import { generateSitemap } from "@/utils/sitemapGenerator";
import { Navigate } from "react-router-dom";

const Sitemap = () => {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // Generate sitemap
    const sitemap = generateSitemap();
    
    // Create a Blob with the correct MIME type and XML declaration at the beginning
    const xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n' + sitemap;
    const blob = new Blob([xmlContent], {
      type: 'application/xml; charset=utf-8'
    });
    
    // Create a URL for the Blob
    const blobURL = URL.createObjectURL(blob);
    
    // Open the XML in a new tab or download it directly
    const newWindow = window.open(blobURL, '_blank');
    
    // If the browser blocks opening, offer download
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = "sitemap.xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    // Clean up the Blob URL
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
