export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  readTime: string;
  keywords?: string[]; // Mots-clés SEO spécifiques à l'article
  modifiedDate?: string; // Date de dernière modification pour le SEO
  authorName?: string; // Nom de l'auteur pour le rich snippet
}