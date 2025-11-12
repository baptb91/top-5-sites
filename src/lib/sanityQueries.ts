import { sanityClient } from './sanity';
import { SanityBlogPost } from '@/types/sanity';

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      content,
      "imageUrl": mainImage.asset->url,
      date,
      modifiedDate,
      readTime,
      "authorName": author->name,
      keywords
    }`;
    
    const post = await sanityClient.fetch<SanityBlogPost>(query, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    const query = `*[_type == "post"] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      "imageUrl": mainImage.asset->url,
      date,
      readTime,
      "authorName": author->name,
      keywords
    }`;
    
    const posts = await sanityClient.fetch<SanityBlogPost[]>(query);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return [];
  }
}
