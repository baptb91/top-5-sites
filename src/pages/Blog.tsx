
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
        <title>Blog Rencontres Coquines 2024 | Conseils d'Experts pour Séduction et Rencontres Réussies</title>
        <meta name="description" content="Articles exclusifs et conseils d'experts pour optimiser vos expériences sur les sites de rencontres coquines. Techniques de séduction, astuces pour profils attractifs et guides de conversation." />
        <meta name="keywords" content="blog rencontres coquines, conseils rencontres coquines, astuces séduction, guide rencontres libertines, premier message, profil attractif" />
        <link rel="canonical" href="https://www.rencontrecoquine.info/blog" />
        <meta property="og:title" content="Blog Rencontres Coquines 2024 | Conseils d'Experts pour des Rencontres Réussies" />
        <meta property="og:description" content="Articles exclusifs et guides pratiques pour optimiser vos expériences de rencontres. Apprenez à créer un profil irrésistible, éviter les pièges courants et maîtriser l'art de la séduction en ligne." />
        <meta property="og:url" content="https://www.rencontrecoquine.info/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rencontrecoquine.info/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Blog Rencontres Coquines",
              "url": "https://www.rencontrecoquine.info/blog",
              "description": "Articles et guides pour réussir vos rencontres coquines en ligne",
              "publisher": {
                "@type": "Organization",
                "name": "RencontreCoquine.info",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.rencontrecoquine.info/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png"
                }
              }
            }
          `}
        </script>
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
