
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import SiteList from "@/components/SiteList";
import MeetingMethodsSection from "@/components/MeetingMethodsSection";
import SeoContent from "@/components/SeoContent";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Top 5 Meilleurs Sites de Rencontres Coquines 2024 | Guide Complet</title>
        <meta name="description" content="Découvrez notre classement des meilleurs sites de rencontres coquines 2024. Comparatif détaillé, conseils d'experts et guides pratiques pour rencontres libertines réussies." />
        <meta name="keywords" content="sites de rencontres coquines, rencontres libertines, rencontres adultes, meilleur site rencontre coquine, comparatif sites libertins" />
        <link rel="canonical" href="https://www.rencontrecoquine.info" />
        <meta property="og:title" content="Top 5 Meilleurs Sites de Rencontres Coquines 2024 | Guide Complet" />
        <meta property="og:description" content="Découvrez notre classement des meilleurs sites de rencontres coquines. Comparatif détaillé et conseils d'experts pour des rencontres libertines réussies." />
        <meta property="og:url" content="https://www.rencontrecoquine.info" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "RencontreCoquine.info",
              "url": "https://www.rencontrecoquine.info",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.rencontrecoquine.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Top 5 Meilleurs Sites de Rencontres Coquines en 2024",
              "image": "https://www.rencontrecoquine.info/og-image.png",
              "author": {
                "@type": "Organization",
                "name": "RencontreCoquine.info"
              },
              "publisher": {
                "@type": "Organization",
                "name": "RencontreCoquine.info",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.rencontrecoquine.info/og-image.png"
                }
              },
              "datePublished": "2024-04-24",
              "dateModified": "${new Date().toISOString().split('T')[0]}"
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
          
          <section className="mb-20">
            <div className="mb-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
              >
                Top 5 des Meilleurs Sites de Rencontres Coquines
              </motion.h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Notre sélection exclusive des plateformes les plus performantes pour des rencontres 
                passionnées et discrètes. Découvrez les sites les mieux notés et testés par nos experts.
              </p>
            </div>
            <SiteList />
          </section>

          <div className="max-w-7xl mx-auto">
            <MeetingMethodsSection />
            <SeoContent />
          </div>

          <footer className="mt-20 border-t border-gray-200 pt-8 pb-4">
            <div className="text-center">
              <nav className="space-x-4 text-sm text-gray-600">
                <Link 
                  to="/mentions-legales" 
                  className="hover:text-romance-600 transition-colors"
                >
                  Mentions Légales
                </Link>
                <span>•</span>
                <Link 
                  to="/mentions-legales#privacy" 
                  className="hover:text-romance-600 transition-colors"
                >
                  Politique de Confidentialité
                </Link>
                <span>•</span>
                <Link 
                  to="/mentions-legales#terms" 
                  className="hover:text-romance-600 transition-colors"
                >
                  Conditions d'Utilisation
                </Link>
                <span>•</span>
                <Link 
                  to="/mentions-legales#cookies" 
                  className="hover:text-romance-600 transition-colors"
                >
                  Politique des Cookies
                </Link>
              </nav>
              <p className="mt-4 text-sm text-gray-500">
                © {new Date().getFullYear()} RencontreCoquine.info - Tous droits réservés
              </p>
            </div>
          </footer>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
