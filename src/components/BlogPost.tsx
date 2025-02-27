
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Markdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-gray-900">Article non trouvé</h1>
        <Link to="/blog" className="text-romance-600 hover:underline">
          Retour aux articles
        </Link>
      </div>
    );
  }

  return (
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
            <time dateTime={post.date} className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </time>
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
  );
};

export default BlogPost;
