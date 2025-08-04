
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import SiteList from "@/components/SiteList";
import MeetingMethodsSection from "@/components/MeetingMethodsSection";
import SeoContent from "@/components/SeoContent";
import InternalLinking from "@/components/InternalLinking";

const Index = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Top Sites Rencontres Coquines en 2025 | Classement + Avis</title>
        <meta name="description" content="Découvrez notre classement exclusif des meilleurs sites coquins en 2025. Avis détaillés, tests réels et comparatif des fonctionnalités pour trouver votre plateforme idéale." />
        <meta name="keywords" content="comparatif sites rencontres coquines 2025, avis sites libertins sécurisés, classement applications discrètes adultes, site rencontre adulte vérifié 18+, application coquine sans engagement, meilleur site libertin français modéré" />
        <link rel="canonical" href="https://www.rencontrecoquine.info" />
        
        <meta property="og:title" content="Top Sites Rencontres Coquines en 2025 | Classement + Avis" />
        <meta property="og:description" content="Découvrez notre classement exclusif des meilleurs sites coquins en 2025. Avis détaillés, tests réels et comparatif des fonctionnalités pour trouver votre plateforme idéale." />
        <meta property="og:url" content="https://www.rencontrecoquine.info" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rencontrecoquine.info/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Classement Sites Rencontres Adultes",
              "review": {
                "@type": "Review",
                "author": {"@type": "Organization","name": "RencontreCoquine.info"},
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.8",
                  "bestRating": "5"
                }
              }
            }
          `}
        </script>
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
              "headline": "Top 5 Meilleurs Sites de Rencontres Coquines en 2025",
              "image": "https://www.rencontrecoquine.info/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png",
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
              "datePublished": "2024-04-24",
              "dateModified": "${currentDate}",
              "description": "Guide complet des meilleurs sites de rencontres coquines en 2025, avec comparatif détaillé et conseils pour maximiser vos chances.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.rencontrecoquine.info"
              }
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Un VPN est-il nécessaire pour utiliser ces sites de rencontres ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bien que non obligatoire, un VPN est recommandé pour une confidentialité maximale. Les sites que nous recommandons utilisent déjà un cryptage SSL, mais un VPN ajoute une couche de sécurité supplémentaire, surtout sur des réseaux Wi-Fi publics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mes données sont-elles effacées après 24h ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cela dépend de la politique de chaque site. Les plateformes comme Spiice et JM Date proposent des options de confidentialité avancées permettant l'effacement automatique des messages après une période définie. Consultez notre comparatif détaillé pour plus d'informations sur chaque site."
                  }
                },
                {
                  "@type": "Question",
                  "name": "La vérification d'identité est-elle obligatoire ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La majorité des sites sérieux demandent une forme de vérification pour confirmer votre âge et réduire les faux profils. Cette vérification peut être plus ou moins poussée selon les plateformes, allant d'une simple vérification d'email à des contrôles plus approfondis pour les sites premium."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont les critères pour choisir un site de rencontres coquin ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les critères essentiels incluent la sécurité des données personnelles, la qualité de la modération, le ratio hommes/femmes, les fonctionnalités de confidentialité, la facilité d'utilisation et la présence d'une application mobile. Notre classement tient compte de 37 critères différents évalués sur chaque plateforme."
                  }
                }
              ]
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Guide des Meilleurs Sites de Rencontres Coquines",
                  "url": "https://www.rencontrecoquine.info"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog Rencontres Coquines",
                  "url": "https://www.rencontrecoquine.info/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Mentions Légales",
                  "url": "https://www.rencontrecoquine.info/mentions-legales"
                }
              ]
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
                Top Sites Rencontres Coquines en France
              </motion.h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Notre sélection exclusive des plateformes les plus performantes en 2025 pour des rencontres 
                passionnées et discrètes. Découvrez les sites les mieux notés selon 62 critères d'évaluation.
              </p>
            </div>
            <SiteList />
          </section>

          <div className="max-w-7xl mx-auto">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi choisir un site libertin ?</h2>
              <p className="text-gray-700 mb-4">
                Les sites de rencontres coquines offrent un espace sécurisé pour explorer vos désirs sans jugement. 
                Contrairement aux applications de rencontres traditionnelles, ces plateformes spécialisées vous permettent 
                d'être explicite sur vos attentes et de rencontrer des personnes partageant les mêmes envies.
              </p>
              <p className="text-gray-700">
                Notre classement privilégie les sites qui garantissent votre anonymat, protègent vos données personnelles 
                et offrent une expérience utilisateur de qualité. Chaque plateforme a été testée par notre équipe selon 
                une méthodologie rigoureuse pour vous assurer des rencontres à la fois excitantes et sécurisées.
              </p>
            </section>
            
            <MeetingMethodsSection />
            <SeoContent />
            <InternalLinking currentPage="/" />
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
