
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import BlogList from "@/components/BlogList";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";

const Blog = () => {
  // Log blog posts to help debugging
  console.log("Blog posts:", blogPosts);

  return (
    <>
      <Helmet>
        <title>Blog Rencontres Coquines | Articles et Conseils pour Rencontres Réussies</title>
        <meta name="description" content="Découvrez nos meilleurs conseils, astuces et guides pratiques pour optimiser vos expériences sur les sites de rencontres coquines et libertines." />
        <meta name="keywords" content="blog rencontres coquines, conseils rencontres coquines, astuces séduction, guide rencontres libertines" />
        <link rel="canonical" href="https://www.rencontrecoquine.info/blog" />
        <meta property="og:title" content="Blog Rencontres Coquines | Articles et Conseils pour Rencontres Réussies" />
        <meta property="og:description" content="Guides pratiques et conseils d'experts pour vos rencontres coquines. Apprenez à optimiser votre profil, éviter les pièges et séduire efficacement." />
        <meta property="og:url" content="https://www.rencontrecoquine.info/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      
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
    </>
  );
};

export default Blog;
