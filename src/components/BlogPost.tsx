
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogPosts";
import Markdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Helmet>
          <title>Article non trouvé | RencontreCoquine.info</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-2xl font-bold text-gray-900">Article non trouvé</h1>
        <Link to="/blog" className="text-romance-600 hover:underline">
          Retour aux articles
        </Link>
      </div>
    );
  }

  // Extraction des premières phrases de l'excerpt pour la meta description
  const metaDescription = post.excerpt.length > 155 ? post.excerpt.substring(0, 155) + '...' : post.excerpt;
  
  // Création de mots-clés à partir du slug et du titre
  const keywords = `rencontres coquines, ${post.slug.replace(/-/g, ', ')}, ${post.title.toLowerCase().split(' ').slice(0, 5).join(', ')}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Guide Rencontres Coquines 2024</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.rencontrecoquine.info/blog/${post.slug}`} />
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`https://www.rencontrecoquine.info${post.imageUrl}`} />
        <meta property="og:url" content={`https://www.rencontrecoquine.info/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:section" content="Rencontres Coquines" />
        <meta property="article:tag" content={post.slug.replace(/-/g, ', ')} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`https://www.rencontrecoquine.info${post.imageUrl}`} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.title}",
              "image": "https://www.rencontrecoquine.info${post.imageUrl}",
              "datePublished": "${new Date(post.date).toISOString()}",
              "dateModified": "${new Date().toISOString()}",
              "author": {
                "@type": "Organization",
                "name": "RencontreCoquine.info"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RencontreCoquine.info",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.rencontrecoquine.info/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png"
                }
              },
              "description": "${metaDescription.replace(/"/g, '\\"')}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.rencontrecoquine.info/blog/${post.slug}"
              }
            }
          `}
        </script>
      </Helmet>

      <motion.article
        id="article-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <div className="container mx-auto px-4 py-8">
          <Link to="/blog" className="text-romance-600 hover:underline mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="bg-romance-500 text-white py-2 px-4 inline-block rounded mb-6 text-sm font-medium">
              CONSEILS POUR VOS RENCONTRES EN LIGNE
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <Markdown 
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">{children}</h3>,
                    p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                    ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>,
                    li: ({children}) => <li className="mb-2">{children}</li>,
                    a: ({children, href}) => (
                      <Link to={href || '/'} className="text-romance-600 hover:underline">
                        {children}
                      </Link>
                    ),
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-romance-500 pl-4 italic my-4 text-gray-700">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPost;
