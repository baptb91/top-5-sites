
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Cookies | RencontreCoquine.info</title>
        <meta name="description" content="Politique d'utilisation des cookies sur le site RencontreCoquine.info" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.rencontrecoquine.info/politique-cookies" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <Header />
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg mx-auto max-w-4xl"
              >
                <h1 className="text-4xl font-bold mb-8">Politique de Cookies</h1>

                <h2 className="text-2xl font-semibold mb-6">1. Qu'est-ce qu'un Cookie ?</h2>
                <p className="mb-6 text-gray-700">
                  Un cookie est un petit fichier texte enregistré sur votre appareil lors de la visite d'un site web. 
                  Les cookies nous permettent de reconnaître votre appareil et de stocker des informations sur vos préférences ou actions passées sur notre site.
                </p>

                <h2 className="text-2xl font-semibold mb-6">2. Types de Cookies Utilisés</h2>
                <p className="mb-6 text-gray-700">
                  Notre site utilise différents types de cookies :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies de performance :</strong> Pour analyser l'utilisation du site et améliorer son fonctionnement</li>
                  <li><strong>Cookies de fonctionnalité :</strong> Pour mémoriser vos préférences</li>
                  <li><strong>Cookies de ciblage :</strong> Pour vous proposer du contenu personnalisé</li>
                  <li><strong>Cookies tiers :</strong> Placés par des services tiers pour les fonctionnalités intégrées</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">3. Finalités des Cookies</h2>
                <p className="mb-6 text-gray-700">
                  Nous utilisons les cookies pour :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li>Assurer le bon fonctionnement technique du site</li>
                  <li>Mesurer l'audience et comprendre comment les utilisateurs naviguent sur notre site</li>
                  <li>Personnaliser votre expérience en fonction de vos préférences</li>
                  <li>Améliorer continuellement nos services</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">4. Gestion des Cookies</h2>
                <p className="mb-6 text-gray-700">
                  Vous pouvez contrôler et/ou supprimer les cookies à votre guise. Pour plus d'informations, consultez aboutcookies.org. 
                  Vous pouvez supprimer tous les cookies déjà présents sur votre appareil et configurer la plupart des navigateurs pour qu'ils bloquent leur installation.
                </p>
                <p className="mb-6 text-gray-700">
                  Pour gérer les cookies dans votre navigateur :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li><strong>Chrome :</strong> Menu {'->'} Paramètres {'->'} Confidentialité et sécurité {'->'} Cookies et autres données des sites</li>
                  <li><strong>Firefox :</strong> Menu {'->'} Options {'->'} Vie privée et sécurité {'->'} Cookies et données de sites</li>
                  <li><strong>Safari :</strong> Préférences {'->'} Confidentialité {'->'} Cookies et données de sites web</li>
                  <li><strong>Edge :</strong> Menu {'->'} Paramètres {'->'} Confidentialité, recherche et services {'->'} Effacer les données de navigation</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">5. Conséquences du Refus des Cookies</h2>
                <p className="mb-6 text-gray-700">
                  Si vous choisissez de refuser les cookies, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                  Les cookies essentiels ne peuvent pas être refusés car ils sont nécessaires au fonctionnement du site.
                </p>

                <h2 className="text-2xl font-semibold mb-6">6. Durée de Conservation des Cookies</h2>
                <p className="mb-6 text-gray-700">
                  La durée de vie des cookies peut varier selon leur type :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li>Cookies de session : supprimés lorsque vous fermez votre navigateur</li>
                  <li>Cookies persistants : restent sur votre appareil jusqu'à leur expiration ou leur suppression manuelle</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">7. Mises à Jour de la Politique</h2>
                <p className="mb-6 text-gray-700">
                  Nous nous réservons le droit de modifier cette politique de cookies à tout moment. 
                  Toute modification prendra effet immédiatement après sa publication sur le site.
                </p>

                <div className="text-sm text-gray-500 mt-12">
                  <p>Dernière mise à jour : Mai 2025</p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
