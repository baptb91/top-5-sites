
import { motion } from "framer-motion";
import BlogList from "@/components/BlogList";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";

const Blog = () => {
  // Log blog posts to help debugging
  console.log("Blog posts:", blogPosts);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-romance-50"
    >
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <header className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Blog Rencontres Coquines
          </motion.h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez nos articles et conseils pour des rencontres réussies. 
            Des astuces pratiques et des guides complets pour optimiser votre expérience.
          </p>
        </header>

        <BlogList posts={blogPosts} />
      </div>
    </motion.div>
  );
};

export default Blog;
