
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | RencontreCoquine.info</title>
        <meta name="description" content="Politique de confidentialité détaillée du site RencontreCoquine.info, protection de vos données personnelles" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.rencontrecoquine.info/politique-confidentialite" />
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
                <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

                <h2 className="text-2xl font-semibold mb-6">1. Collecte des Données</h2>
                <p className="mb-6 text-gray-700">
                  Nous collectons les informations que vous nous fournissez lors de l'utilisation de notre site, notamment :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li>Informations d'identification : adresse email, nom d'utilisateur</li>
                  <li>Données de navigation : pages consultées, temps passé sur le site</li>
                  <li>Informations techniques : adresse IP, type d'appareil, navigateur</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">2. Utilisation des Données</h2>
                <p className="mb-6 text-gray-700">
                  Les données personnelles collectées sont utilisées pour :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li>Personnaliser votre expérience sur notre site</li>
                  <li>Améliorer nos services et fonctionnalités</li>
                  <li>Communiquer avec vous concernant votre compte ou nos services</li>
                  <li>Analyser l'utilisation de notre site pour en améliorer les performances</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">3. Protection des Données</h2>
                <p className="mb-6 text-gray-700">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>

                <h2 className="text-2xl font-semibold mb-6">4. Cookies et Technologies Similaires</h2>
                <p className="mb-6 text-gray-700">
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.
                </p>

                <h2 className="text-2xl font-semibold mb-6">5. Vos Droits</h2>
                <p className="mb-6 text-gray-700">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">6. Partage des Données</h2>
                <p className="mb-6 text-gray-700">
                  Nous ne partageons vos données personnelles qu'avec des tiers de confiance qui nous aident à exploiter notre site, à condition qu'ils s'engagent à les traiter de manière confidentielle.
                </p>

                <h2 className="text-2xl font-semibold mb-6">7. Conservation des Données</h2>
                <p className="mb-6 text-gray-700">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services ou respecter nos obligations légales.
                </p>

                <h2 className="text-2xl font-semibold mb-6">8. Modifications de la Politique</h2>
                <p className="mb-6 text-gray-700">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur notre site.
                </p>

                <h2 className="text-2xl font-semibold mb-6">9. Contact</h2>
                <p className="mb-6 text-gray-700">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse email indiquée dans nos mentions légales.
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

export default PrivacyPolicy;
