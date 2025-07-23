
import { BlogPost } from "@/types/blog";
import { blogPosts } from "@/data/blogPosts";

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  images?: Array<{
    loc: string;
    caption: string;
  }>;
  hreflang?: Array<{
    href: string;
    hreflang: string;
  }>;
}

export const generateSitemap = (): string => {
  const baseURL = "https://www.rencontrecoquine.info";
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapURL[] = [
    {
      loc: `${baseURL}/`,
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0",
      hreflang: [{
        href: `${baseURL}/`,
        hreflang: "fr"
      }]
    },
    {
      loc: `${baseURL}/blog`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.8",
      hreflang: [{
        href: `${baseURL}/blog`,
        hreflang: "fr"
      }]
    }
  ];
  
  blogPosts.forEach((post: BlogPost) => {
    urls.push({
      loc: `${baseURL}/blog/${post.slug}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7",
      images: [
        {
          loc: `${baseURL}${post.imageUrl}`,
          caption: post.title
        }
      ],
      hreflang: [{
        href: `${baseURL}/blog/${post.slug}`,
        hreflang: "fr"
      }]
    });
  });

  // Ajouter toutes les pages légales
  const legalPages = [
    'mentions-legales',
    'politique-confidentialite', 
    'conditions-utilisation',
    'politique-cookies'
  ];
  
  legalPages.forEach(page => {
    urls.push({
      loc: `${baseURL}/${page}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.3",
      hreflang: [{
        href: `${baseURL}/${page}`,
        hreflang: "fr"
      }]
    });
  });

  // Generate sitemap without XML declaration
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
  sitemap += 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ';
  sitemap += 'xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  urls.forEach(url => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url.loc}</loc>\n`;
    sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${url.priority}</priority>\n`;
    
    // Add image information if available
    if (url.images && url.images.length > 0) {
      url.images.forEach(image => {
        sitemap += '    <image:image>\n';
        sitemap += `      <image:loc>${image.loc}</image:loc>\n`;
        sitemap += `      <image:caption>${image.caption}</image:caption>\n`;
        sitemap += '    </image:image>\n';
      });
    }
    
    // Add hreflang information if available
    if (url.hreflang && url.hreflang.length > 0) {
      url.hreflang.forEach(link => {
        sitemap += `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />\n`;
      });
    }
    
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

export const generateSitemapIndex = (): string => {
  const baseURL = "https://www.rencontrecoquine.info";
  const today = new Date().toISOString().split('T')[0];
  
  // Generate sitemap index without XML declaration
  let sitemapIndex = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  sitemapIndex += '  <sitemap>\n';
  sitemapIndex += `    <loc>${baseURL}/sitemap-content.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${today}</lastmod>\n`;
  sitemapIndex += '  </sitemap>\n';
  sitemapIndex += '</sitemapindex>';
  
  return sitemapIndex;
};

// Cette fonction n'est plus utilisée, mais est conservée pour la référence
// Elle pourrait être utile si vous décidez de revenir à une structure à trois fichiers
export const generateSimpleSitemap = (): string => {
  const baseURL = "https://www.rencontrecoquine.info";
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseURL}/</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <priority>1.0</priority>\n';
  sitemap += '  </url>\n';
  
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseURL}/blog</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <priority>0.8</priority>\n';
  sitemap += '  </url>\n';
  
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseURL}/sitemap-content.xml</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <priority>0.5</priority>\n';
  sitemap += '  </url>\n';
  
  sitemap += '</urlset>';
  
  return sitemap;
};
