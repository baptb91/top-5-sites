
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
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="text-romance-600 hover:underline mb-8 inline-block">
          ← Retour aux articles
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
