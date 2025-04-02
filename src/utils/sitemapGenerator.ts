
import { blogPosts } from "@/data/blogPosts";

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const generateSitemap = (): string => {
  const baseURL = "https://rencontrecoquine.info";
  const today = new Date().toISOString().split('T')[0];
  
  // Définir les URLs de base avec leurs priorités
  const urls: SitemapURL[] = [
    {
      loc: `${baseURL}/`,
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0"
    },
    {
      loc: `${baseURL}/blog`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.8"
    }
  ];
  
  // Ajouter chaque article de blog
  blogPosts.forEach(post => {
    urls.push({
      loc: `${baseURL}/blog/${post.slug}`,
      lastmod: today, // Date actuelle pour tous les articles
      changefreq: "monthly",
      priority: "0.7"
    });
  });

  // Ajouter la page mentions légales
  urls.push({
    loc: `${baseURL}/mentions-legales`,
    lastmod: today,
    changefreq: "yearly",
    priority: "0.3"
  });

  // Générer le XML sans l'en-tête XML (ajouté séparément)
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url.loc}</loc>\n`;
    sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${url.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

export const generateSitemapIndex = (): string => {
  const baseURL = "https://rencontrecoquine.info";
  const today = new Date().toISOString().split('T')[0];
  
  // Générer le XML sans l'en-tête XML (ajouté séparément)
  let sitemapIndex = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  sitemapIndex += '  <sitemap>\n';
  sitemapIndex += `    <loc>${baseURL}/sitemap.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${today}</lastmod>\n`;
  sitemapIndex += '  </sitemap>\n';
  sitemapIndex += '</sitemapindex>';
  
  return sitemapIndex;
};

// Fonction pour écrire les fichiers sitemap dans le dossier public lors du build
export const writeSitemapFiles = (): void => {
  try {
    // Cette fonction est utilisée uniquement en environnement Node.js (build time)
    // et ne sera pas exécutée dans le navigateur
    const fs = require('fs');
    const path = require('path');
    
    const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' + generateSitemap();
    const sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n' + generateSitemapIndex();
    
    // Écrire les fichiers dans le dossier public
    fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), sitemap);
    fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap-index.xml'), sitemapIndex);
    
    console.log('Sitemap files written successfully');
  } catch (error) {
    console.error('Error writing sitemap files:', error);
  }
};
