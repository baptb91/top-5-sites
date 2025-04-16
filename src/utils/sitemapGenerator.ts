
import { BlogPost } from "@/types/blog";
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
  
  blogPosts.forEach((post: BlogPost) => {
    urls.push({
      loc: `${baseURL}/blog/${post.slug}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7"
    });
  });

  urls.push({
    loc: `${baseURL}/mentions-legales`,
    lastmod: today,
    changefreq: "yearly",
    priority: "0.3"
  });

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
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
  
  let sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapIndex += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  sitemapIndex += '  <sitemap>\n';
  sitemapIndex += `    <loc>${baseURL}/sitemap.xml</loc>\n`;
  sitemapIndex += `    <lastmod>${today}</lastmod>\n`;
  sitemapIndex += '  </sitemap>\n';
  sitemapIndex += '</sitemapindex>';
  
  return sitemapIndex;
};
