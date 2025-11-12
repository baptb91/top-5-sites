import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getBlogPostBySlug } from "@/lib/sanityQueries";
import { SanityBlogPost } from "@/types/sanity";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<SanityBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const fetchedPost = await getBlogPostBySlug(slug);
      setPost(fetchedPost);
      setLoading(false);
      
      console.log(`BlogPost accessed with slug: ${slug}`);
      console.log(`Post found:`, fetchedPost ? "Yes" : "No");
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Chargement...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <Navigate to={`/not-found?original-path=/blog/${slug}`} replace />
    );
  }

  const metaDescription = post.excerpt?.length > 155 ? post.excerpt.substring(0, 155) + '...' : post.excerpt;
  const keywords = post.keywords?.join(', ') || `rencontres en ligne, ${post.title.toLowerCase()}`;
  const publishDate = new Date(post.date).toISOString();
  const modifiedDate = post.modifiedDate ? new Date(post.modifiedDate).toISOString() : new Date().toISOString();
  const canonicalUrl = `https://rencontrecoquine.info/blog/${post.slug.current}`;
  
  // Custom components for Portable Text with styled boxes
  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>,
      h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-4 mt-8 text-foreground">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">{children}</h3>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 text-foreground/90">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 text-foreground/90">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
      number: ({ children }: any) => <li className="mb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold text-foreground">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      link: ({ children, value }: any) => (
        <a href={value.href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      // Custom style for "Conseil" boxes
      conseil: ({ children }: any) => (
        <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 my-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-primary mb-1">💡 Conseil</p>
              <div className="text-foreground/90">{children}</div>
            </div>
          </div>
        </div>
      ),
      // Custom style for "Exemple" boxes
      exemple: ({ children }: any) => (
        <div className="bg-secondary/30 border-l-4 border-secondary rounded-r-lg p-4 my-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <svg className="w-4 h-4 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-secondary-foreground mb-1">📝 Exemple</p>
              <div className="text-foreground/90">{children}</div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | RencontreCoquine.info</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={post.authorName || "RencontreCoquine.info"} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta httpEquiv="content-language" content="fr" />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.imageUrl || `https://rencontrecoquine.info/logo.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="RencontreCoquine.info" />
        
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:section" content="Rencontres Coquines" />
        <meta property="article:tag" content={post.slug.current.replace(/-/g, ', ')} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.imageUrl || `https://rencontrecoquine.info/logo.png`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.imageUrl || "https://rencontrecoquine.info/logo.png",
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "author": {
              "@type": "Organization",
              "name": post.authorName || "RencontreCoquine.info"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RencontreCoquine.info",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rencontrecoquine.info/logo.png"
              }
            },
            "description": metaDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            },
            "isAccessibleForFree": "True",
            "inLanguage": "fr-FR",
            "keywords": keywords
          })}
        </script>
      </Helmet>

      <motion.article
        id="article-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        <div className="container mx-auto px-4 py-8">
          <Link to="/blog" className="text-primary hover:underline mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="bg-primary text-primary-foreground py-2 px-4 inline-block rounded mb-6 text-sm font-medium">
              CONSEILS POUR VOS RENCONTRES EN LIGNE
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-auto rounded-lg mb-8 shadow-lg"
              />
            )}

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime || "5 min de lecture"}
              </div>
              {post.authorName && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.authorName}
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg shadow-sm p-8 border border-border">
                <PortableText 
                  value={post.content}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPost;
