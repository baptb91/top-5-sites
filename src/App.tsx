
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogPost from "./components/BlogPost";
import Sitemap from "./pages/Sitemap";
import SitemapIndex from "./pages/SitemapIndex";
import { Toaster } from "@/components/ui/toaster";
import { generateSitemap, generateSitemapIndex } from "./utils/sitemapGenerator";

// Define a ScrollToTop component to handle scrolling to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Create a component that handles potentially serving pre-rendered HTML for bots
const SeoHandler = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Add a specific class to the body to help identify when the SPA is fully loaded
    document.body.classList.add('js-loaded');
    
    // Log navigation for debugging purposes
    console.log(`Navigation to: ${pathname}`);

    // Mettre à jour les sitemaps dynamiquement
    if (pathname === "/" || pathname.startsWith("/blog")) {
      try {
        // Générer et mettre à disposition les sitemaps pour les moteurs de recherche
        const sitemap = generateSitemap();
        const sitemapIndex = generateSitemapIndex();
        
        // Stocker les sitemaps dans le localStorage pour référence
        localStorage.setItem('sitemap', sitemap);
        localStorage.setItem('sitemapIndex', sitemapIndex);
        
        console.log("Sitemaps generated dynamically");
        
        // En environnement de production, on pourrait envoyer ces sitemaps à un service qui les enregistre sur le serveur
        if (import.meta.env.PROD) {
          // Code pour envoyer les sitemaps à un service externe si nécessaire
        }
      } catch (error) {
        console.error("Error generating sitemaps:", error);
      }
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <SeoHandler />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/sitemap.xml" element={<Sitemap />} />
        <Route path="/sitemap-index.xml" element={<SitemapIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
