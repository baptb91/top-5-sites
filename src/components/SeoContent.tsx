import { motion } from "framer-motion";
import Image from "./ui/image";

const SeoContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold mb-8">Comment choisir un site de rencontre coquine ?</h2>
          
          <div className="my-8">
            <Image
              src="/lovable-uploads/1b836fd3-2a34-42fa-ab3f-8bf1e3d74f96.png"
              alt="Femme souriante utilisant un site de rencontre en ligne avec discrétion"
              className="rounded-lg w-full object-cover h-64"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-6">Notre Processus d'Évaluation</h3>
          <p className="mb-6 text-gray-700">
            Pour vous garantir une expérience de qualité, notre équipe suit une méthodologie rigoureuse :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Test approfondi avec des profils réels (hommes entre 30 et 50 ans)</li>
            <li>Vérification stricte de la fiabilité (modération, détection des faux profils)</li>
            <li>Contrôle des systèmes de paiement (sécurité, cryptage, options disponibles)</li>
            <li>Analyse du taux d'activité des membres (connexions hebdomadaires)</li>
            <li>Évaluation complète des fonctionnalités (chat, photos privées, événements)</li>
            <li>Transparence des tarifs et des conditions d'utilisation</li>
          </ul>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/lovable-uploads/dd60dd92-a4da-447c-987f-e67953948868.png"
              alt="Utilisatrice consultant son profil de rencontre dans un environnement confortable"
              className="rounded-lg w-full object-cover h-48"
            />
            <Image
              src="/lovable-uploads/246a3f22-6751-41e7-86cc-87af7137a6d9.png"
              alt="Femme sportive connectée sur une plateforme de rencontre"
              className="rounded-lg w-full object-cover h-48"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-6">La Rencontre Coquine en Ligne : Sûre et Efficace</h3>
          <p className="mb-6 text-gray-700">
            Le monde des rencontres coquines s'est largement digitalisé, offrant de nouvelles opportunités 
            pour des rencontres discrètes et passionnées. Les plateformes spécialisées sont devenues le moyen 
            privilégié pour faire des rencontres adaptées à vos envies, en toute confidentialité.
          </p>

          <div className="my-8">
            <Image
              src="/lovable-uploads/ffdead25-0da0-4d75-9f7e-8f480ba001b9.png"
              alt="Membre active utilisant l'application de rencontre dans un cadre lumineux"
              className="rounded-lg w-full object-cover h-64"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-6">Avantages des Sites de Rencontres Coquines</h3>
          
          <h4 className="text-xl font-medium mb-4">Discrétion Absolue</h4>
          <p className="mb-6 text-gray-700">
            La confidentialité est la priorité numéro une. Les sites que nous recommandons offrent :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Modes de navigation privés</li>
            <li>Options de contrôle de visibilité du profil</li>
            <li>Paiements discrets et sécurisés</li>
            <li>Protection maximale des données personnelles</li>
          </ul>

          <h4 className="text-xl font-medium mb-4">Multiplicité des Rencontres</h4>
          <p className="mb-6 text-gray-700">
            Contrairement aux rencontres traditionnelles, les plateformes en ligne permettent :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Des échanges simultanés avec plusieurs personnes</li>
            <li>Une sélection précise selon vos critères</li>
            <li>Des rencontres rapides et sans prise de tête</li>
            <li>Un large choix de profils actifs et vérifiés</li>
          </ul>

          <h4 className="text-xl font-medium mb-4">Rencontres par Affinités</h4>
          <p className="mb-6 text-gray-700">
            Les sites modernes permettent de filtrer vos recherches selon :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Vos préférences physiques et critères d'âge</li>
            <li>Le type de rencontre recherché</li>
            <li>La localisation géographique</li>
            <li>Les disponibilités et moments propices</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-6">Sites Gratuits vs Sites Payants</h3>
          <p className="mb-6 text-gray-700">
            Notre expérience montre clairement que les sites payants offrent une bien meilleure qualité de service.
            Les avantages incluent :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Une modération active et efficace</li>
            <li>Des profils vérifiés et authentiques</li>
            <li>Une communauté d'utilisateurs investis et sérieux</li>
            <li>Des fonctionnalités avancées pour optimiser vos rencontres</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-6">La Sécurité Avant Tout</h3>
          <p className="mb-6 text-gray-700">
            Les sites que nous recommandons mettent l'accent sur votre sécurité avec :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>Une équipe de modération disponible 24/7</li>
            <li>Des systèmes de blocage instantané des profils indésirables</li>
            <li>La vérification des photos et des informations</li>
            <li>Un support client réactif et professionnel</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-6">Le Marché des Rencontres Coquines</h3>
          <p className="mb-6 text-gray-700">
            Le secteur des rencontres coquines s'est considérablement professionnalisé. Que vous soyez :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>En couple à la recherche d'aventures discrètes</li>
            <li>Célibataire cherchant des moments intenses</li>
            <li>Curieux d'expérimenter de nouvelles expériences</li>
            <li>Amateur de rencontres sans prise de tête</li>
          </ul>

          <p className="text-gray-700">
            Nos sites partenaires répondront à vos attentes avec professionnalisme et discrétion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoContent;
