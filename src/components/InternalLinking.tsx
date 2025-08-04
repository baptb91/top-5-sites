import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface InternalLinkingProps {
  currentPage?: string;
  excludePages?: string[];
}

const InternalLinking = ({ currentPage, excludePages = [] }: InternalLinkingProps) => {
  const links = [
    {
      path: "/",
      title: "Meilleurs Sites de Rencontres Coquines",
      description: "Découvrez notre classement des plateformes les plus performantes"
    },
    {
      path: "/blog",
      title: "Conseils Rencontres & Séduction",
      description: "Guides d'experts pour maximiser vos chances de succès"
    },
    {
      path: "/blog/rediger-profil-irresistible-rencontre-coquine",
      title: "Créer un Profil Irrésistible",
      description: "Guide complet pour un profil qui attire les bonnes personnes"
    },
    {
      path: "/blog/erreurs-a-eviter-site-rencontre-coquine",
      title: "Erreurs à Éviter Absolument",
      description: "Les pièges qui ruinent vos chances et comment les éviter"
    },
    {
      path: "/blog/creer-connexion-instantanee-personne-en-ligne",
      title: "Créer une Connexion Instantanée",
      description: "10 astuces pour une alchimie immédiate en ligne"
    }
  ];

  const filteredLinks = links.filter(link => 
    link.path !== currentPage && !excludePages.includes(link.path)
  );

  if (filteredLinks.length === 0) return null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 p-6 bg-gradient-to-r from-romance-50 to-pink-50 rounded-xl border border-romance-200"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        📚 Articles Recommandés
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {filteredLinks.slice(0, 4).map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={link.path}
              className="block p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-romance-300 hover:shadow-md transition-all duration-200 group"
            >
              <h4 className="font-medium text-gray-900 group-hover:text-romance-600 transition-colors mb-2">
                {link.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2">
                {link.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center px-4 py-2 bg-romance-600 text-white rounded-lg hover:bg-romance-700 transition-colors"
        >
          Voir tous nos conseils →
        </Link>
      </div>
    </motion.section>
  );
};

export default InternalLinking;