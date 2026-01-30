import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getBlogPostBySlug } from "@/lib/sanityQueries";
import { SanityBlogPost } from "@/types/sanity";
import { PortableText } from "@portabletext/react";
import { blogPosts } from "@/data/blogPosts";
import { BlogPost as LocalBlogPost } from "@/types/blog";
import ReactMarkdown from "react-markdown";
import "../styles/blog.css";

type PostData = {
  type: 'sanity';
  data: SanityBlogPost;
} | {
  type: 'local';
  data: LocalBlogPost;
};

const BlogPostComponent = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      
      // Try Sanity first
      const sanityPost = await getBlogPostBySlug(slug);
      if (sanityPost) {
        setPost({ type: 'sanity', data: sanityPost });
        setLoading(false);
        return;
      }
      
      // Fallback to local posts
      const localPost = blogPosts.find(p => p.slug === slug);
      if (localPost) {
        setPost({ type: 'local', data: localPost });
      } else {
        setPost(null);
      }
      
      setLoading(false);
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

  // Extract common data based on post type
  const title = post.type === 'sanity' ? post.data.title : post.data.title;
  const excerpt = post.type === 'sanity' ? post.data.excerpt : post.data.excerpt;
  const imageUrl = post.type === 'sanity' ? post.data.imageUrl : post.data.imageUrl;
  const date = post.type === 'sanity' ? post.data.date : post.data.date;
  const readTime = post.type === 'sanity' ? post.data.readTime : post.data.readTime;
  const authorName = post.type === 'sanity' ? post.data.authorName : undefined;
  const keywords = post.type === 'sanity' ? post.data.keywords : undefined;
  const postSlug = post.type === 'sanity' ? post.data.slug.current : post.data.slug;

  const metaDescription = excerpt?.length > 155 ? excerpt.substring(0, 155) + '...' : excerpt;
  const keywordsStr = keywords?.join(', ') || `rencontres en ligne, ${title.toLowerCase()}`;
  const publishDate = new Date(date).toISOString();
  const modifiedDate = post.type === 'sanity' && post.data.modifiedDate 
    ? new Date(post.data.modifiedDate).toISOString() 
    : new Date().toISOString();
  const canonicalUrl = `https://rencontrecoquine.info/blog/${postSlug}`;
  
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
      conseil: ({ children }: any) => (
        <div className="conseil-box">
          <div className="icon">💡</div>
          <div className="content">
            <p className="title">Conseil</p>
            <div className="text">{children}</div>
          </div>
        </div>
      ),
      exemple: ({ children }: any) => (
        <div className="exemple-box">
          <div className="icon">📝</div>
          <div className="content">
            <p className="title">Exemple</p>
            <div className="text">{children}</div>
          </div>
        </div>
      ),
      attention: ({ children }: any) => (
        <div className="attention-box">
          <div className="icon">⚠️</div>
          <div className="content">
            <p className="title">Attention</p>
            <div className="text">{children}</div>
          </div>
        </div>
      ),
      rappel: ({ children }: any) => (
        <div className="rappel-box">
          <div className="icon">💡</div>
          <div className="content">
            <p className="title">Rappel Important</p>
            <div className="text">{children}</div>
          </div>
        </div>
      ),
      astuce: ({ children }: any) => (
        <div className="astuce-box">
          <div className="icon">💡</div>
          <div className="content">
            <p className="title">Astuce</p>
            <div className="text">{children}</div>
          </div>
        </div>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>{title} | RencontreCoquine.info</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywordsStr} />
        <meta name="author" content={authorName || "RencontreCoquine.info"} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta httpEquiv="content-language" content="fr" />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl || `https://rencontrecoquine.info/logo.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="RencontreCoquine.info" />
        
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:section" content="Rencontres Coquines" />
        <meta property="article:tag" content={postSlug.replace(/-/g, ', ')} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl || `https://rencontrecoquine.info/logo.png`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": imageUrl || "https://rencontrecoquine.info/logo.png",
            "datePublished": publishDate,
            "dateModified": modifiedDate,
            "author": {
              "@type": "Organization",
              "name": authorName || "RencontreCoquine.info"
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
            "keywords": keywordsStr
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
              {title}
            </h1>

            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto rounded-lg mb-8 shadow-lg"
              />
            )}

            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime || "5 min de lecture"}
              </div>
              {authorName && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {authorName}
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg shadow-sm p-8 border border-border">
                {post.type === 'sanity' ? (
                  <PortableText 
                    value={post.data.content}
                    components={portableTextComponents}
                  />
                ) : (
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8 text-foreground">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">{children}</h3>,
                      p: ({ children }) => <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc pl-6 mb-4 text-foreground/90">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 text-foreground/90">{children}</ol>,
                      li: ({ children }) => <li className="mb-2">{children}</li>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <Link to={href || '#'} className="text-primary hover:underline">
                          {children}
                        </Link>
                      ),
                      strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                    }}
                  >
                    {post.data.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPostComponent;
