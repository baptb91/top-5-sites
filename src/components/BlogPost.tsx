
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-romance-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="text-romance-600 hover:underline mb-8 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>
          
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600 border-b border-gray-200 pb-8">
              <time dateTime={post.date} className="font-medium">
                {post.date}
              </time>
              <span className="mx-3">•</span>
              <span className="font-medium">{post.readTime}</span>
            </div>
          </header>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[500px] object-cover rounded-2xl mb-12 shadow-xl"
          />

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-romance-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
