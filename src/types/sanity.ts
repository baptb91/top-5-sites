export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any[]; // Portable Text format
  imageUrl?: string;
  date: string;
  modifiedDate?: string;
  readTime?: string;
  authorName?: string;
  keywords?: string[];
}
