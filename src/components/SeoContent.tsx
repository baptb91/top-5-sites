import { motion } from "framer-motion";
import Image from "./ui/image";
import { Link } from "react-router-dom";

const SeoContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Comment Choisir un Site de Rencontre Coquine ?</h2>
          
          <div className="my-8">
            <Image
              src="/lovable-uploads/1b836fd3-2a34-42fa-ab3f-8bf1e3d74f96.png"
              alt="Femme souriante utilisant un site de rencontre en ligne avec discrétion - Conseils pour choisir un site de rencontre coquine"
              className="rounded-lg w-full object-cover h-64 shadow-md"
              title="Guide pour choisir le meilleur site de rencontre coquine"
            />
            <p className="text-sm text-gray-500 text-center mt-2">Trouver la plateforme idéale pour des rencontres discrètes</p>
          </div>

          <div className="bg-romance-50 p-6 rounded-lg mb-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">📋 Notre Processus d'Évaluation</h3>
            <p className="mb-4 text-gray-700">
              Pour vous garantir une expérience de qualité, notre équipe suit une méthodologie rigoureuse basée sur 62 critères objectifs :
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Test approfondi avec des profils réels (hommes entre 30 et 50 ans)</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Vérification stricte de la fiabilité (modération, détection des faux profils)</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Contrôle des systèmes de paiement (sécurité, cryptage, options disponibles)</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Analyse du taux d'activité des membres (connexions hebdomadaires)</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Évaluation complète des fonctionnalités (chat, photos privées, événements)</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Transparence des tarifs et des conditions d'utilisation</span>
              </li>
            </ul>
            <div className="text-center">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block bg-romance-600 hover:bg-romance-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Découvrir notre classement complet
              </a>
            </div>
          </div>

          <div className="my-8">
            <Image
              src="/lovable-uploads/dd60dd92-a4da-447c-987f-e67953948868.png"
              alt="Utilisatrice consultant son profil de rencontre dans un environnement confortable - Sites de rencontres coquines sûrs et efficaces"
              className="rounded-lg w-full object-cover h-64 shadow-md"
              title="Rencontres coquines en ligne - Sécurité et efficacité garanties"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔐 La Rencontre Coquine en Ligne : Sûre et Efficace</h3>
          <p className="mb-6 text-gray-700">
            Le monde des rencontres coquines s'est largement digitalisé, offrant de nouvelles opportunités 
            pour des rencontres discrètes et passionnées. Les plateformes spécialisées sont devenues le moyen 
            privilégié pour faire des rencontres adaptées à vos envies, en toute confidentialité.
          </p>

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">✨ Avantages des Sites de Rencontres Coquines</h3>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-4 text-romance-600">1. Discrétion Absolue</h4>
            <p className="mb-4 text-gray-700">
              La confidentialité est la priorité numéro une. Les sites que nous recommandons offrent :
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Modes de navigation privés</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Options de contrôle de visibilité du profil</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Paiements discrets et sécurisés</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Protection maximale des données personnelles</span>
              </li>
            </ul>
          </div>

          <div className="my-8">
            <Image
              src="/lovable-uploads/246a3f22-6751-41e7-86cc-87af7137a6d9.png"
              alt="Femme sportive connectée sur une plateforme de rencontre - Avantages des sites de rencontres coquines"
              className="rounded-lg w-full object-cover h-64 shadow-md"
              title="Multiplicité des rencontres sur les plateformes coquines"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-4 text-romance-600">2. Multiplicité des Rencontres</h4>
            <p className="mb-4 text-gray-700">
              Contrairement aux rencontres traditionnelles, les plateformes en ligne permettent :
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Des échanges simultanés avec plusieurs personnes</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Une sélection précise selon vos critères</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Des rencontres rapides et sans prise de tête</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Un large choix de profils actifs et vérifiés</span>
              </li>
            </ul>

            <div className="p-4 bg-romance-50 rounded-lg mb-2">
              <p className="text-sm text-gray-700 italic">
                <span className="font-semibold">💡 Conseil d'expert :</span> Consultez notre <Link to="/blog/secrets-seduction-site-rencontre-coquine#article-top" className="text-romance-600 hover:underline">guide pratique pour séduire en ligne</Link> et maximisez vos chances de succès !
              </p>
            </div>
          </div>

          <div className="my-8">
            <Image
              src="/lovable-uploads/ffdead25-0da0-4d75-9f7e-8f480ba001b9.png"
              alt="Membre active utilisant l'application de rencontre dans un cadre lumineux - Rencontres par affinités"
              className="rounded-lg w-full object-cover h-64 shadow-md"
              title="Trouver des partenaires par affinités sur les sites de rencontres coquines"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <h4 className="text-xl font-semibold mb-4 text-romance-600">3. Rencontres par Affinités</h4>
            <p className="mb-4 text-gray-700">
              Les sites modernes permettent de filtrer vos recherches selon :
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Vos préférences physiques et critères d'âge</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Le type de rencontre recherché</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>La localisation géographique</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">•</span>
                <span>Les disponibilités et moments propices</span>
              </li>
            </ul>
          </div>

          <div className="bg-romance-50 p-6 rounded-lg mb-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">💰 Sites Gratuits vs Sites Payants</h3>
            <p className="mb-4 text-gray-700">
              Notre expérience montre clairement que les sites payants offrent une bien meilleure qualité de service. Voici pourquoi :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-romance-600 mb-2">Avantages des sites payants :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Une modération active et efficace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Des profils vérifiés et authentiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Une communauté d'utilisateurs investis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Des fonctionnalités avancées exclusives</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-700 mb-2">Inconvénients des sites gratuits :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Nombreux faux profils et arnaques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Fonctionnalités limitées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Publicités invasives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Support client inexistant ou minimal</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/blog/erreurs-a-eviter-site-rencontre-coquine#article-top" className="text-romance-600 hover:underline">
                Découvrez les erreurs à éviter absolument sur les sites de rencontres coquines
              </Link>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">🛡️ La Sécurité Avant Tout</h3>
          <p className="mb-6 text-gray-700">
            Les sites que nous recommandons mettent l'accent sur votre sécurité avec :
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Une équipe de modération disponible 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Des systèmes de blocage instantané des profils indésirables</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>La vérification des photos et des informations</span>
              </li>
              <li className="flex items-start">
                <span className="text-romance-500 mr-2">✓</span>
                <span>Un support client réactif et professionnel</span>
              </li>
            </ul>

            <div className="p-4 bg-romance-50 rounded-lg mb-2">
              <p className="text-sm text-gray-700 italic">
                <span className="font-semibold">💡 Conseil d'expert :</span> Avant de créer votre profil, consultez notre <Link to="/blog/rediger-profil-irresistible-rencontre-coquine#article-top" className="text-romance-600 hover:underline">guide pour rédiger un profil irrésistible</Link> !
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">🔍 Le Marché des Rencontres Coquines</h3>
          <p className="mb-6 text-gray-700">
            Le secteur des rencontres coquines s'est considérablement professionnalisé. Que vous soyez :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-start">
              <span className="text-romance-500 mr-2">•</span>
              <span>En couple à la recherche d'aventures discrètes</span>
            </li>
            <li className="flex items-start">
              <span className="text-romance-500 mr-2">•</span>
              <span>Célibataire cherchant des moments intenses</span>
            </li>
            <li className="flex items-start">
              <span className="text-romance-500 mr-2">•</span>
              <span>Curieux d'expérimenter de nouvelles expériences</span>
            </li>
            <li className="flex items-start">
              <span className="text-romance-500 mr-2">•</span>
              <span>Amateur de rencontres sans prise de tête</span>
            </li>
          </ul>

          <div className="bg-romance-600 text-white p-8 rounded-lg shadow-md text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Prêt(e) à faire des rencontres de qualité ?</h3>
            <p className="mb-6">
              Nos sites partenaires répondront à vos attentes avec professionnalisme et discrétion.
            </p>
            <a 
              href="https://spiice.rencontre-fan.com/?abc=703d1cecccb43f40&xa=n&acme=wid.85911&media=&source=Ticktok&s1=NomDuCompte&s2=Bio" 
              className="inline-block bg-white text-romance-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrir les meilleurs sites de rencontres coquines
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoContent;
