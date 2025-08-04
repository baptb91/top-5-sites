
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales d'Utilisation | RencontreCoquine.info</title>
        <meta name="description" content="Conditions générales d'utilisation du site RencontreCoquine.info" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.rencontrecoquine.info/conditions-utilisation" />
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
                <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>

                <h2 className="text-2xl font-semibold mb-6">1. Acceptation des Conditions</h2>
                <p className="mb-6 text-gray-700">
                  En accédant et en utilisant ce site, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                </p>

                <h2 className="text-2xl font-semibold mb-6">2. Description du Service</h2>
                <p className="mb-6 text-gray-700">
                  RencontreCoquine.info est un site de comparaison de plateformes de rencontres pour adultes. Nous fournissons des informations, des évaluations et des conseils pour aider les utilisateurs à trouver les services qui répondent le mieux à leurs besoins.
                </p>

                <h2 className="text-2xl font-semibold mb-6">3. Contenu du Site</h2>
                <p className="mb-6 text-gray-700">
                  Le contenu de ce site est destiné uniquement à un public adulte. En accédant à ce site, vous confirmez être âgé d'au moins 18 ans ou l'âge légal de la majorité dans votre juridiction, si celui-ci est supérieur à 18 ans.
                </p>

                <h2 className="text-2xl font-semibold mb-6">4. Propriété Intellectuelle</h2>
                <p className="mb-6 text-gray-700">
                  Tous les contenus publiés sur ce site (textes, images, logos, etc.) sont protégés par le droit d'auteur et autres lois sur la propriété intellectuelle. Toute reproduction ou utilisation non autorisée de ces contenus est strictement interdite.
                </p>

                <h2 className="text-2xl font-semibold mb-6">5. Liens vers des Sites Tiers</h2>
                <p className="mb-6 text-gray-700">
                  Notre site peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement pour votre commodité. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute responsabilité quant à leur contenu ou leurs pratiques.
                </p>

                <h2 className="text-2xl font-semibold mb-6">6. Limitation de Responsabilité</h2>
                <p className="mb-6 text-gray-700">
                  Les informations fournies sur ce site le sont à titre informatif uniquement. Nous nous efforçons de maintenir le site à jour et précis, mais nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations.
                </p>
                <p className="mb-6 text-gray-700">
                  En aucun cas, nous ne serons responsables des dommages directs, indirects, spéciaux, consécutifs ou exemplaires résultant de l'utilisation ou de l'impossibilité d'utiliser notre site.
                </p>

                <h2 className="text-2xl font-semibold mb-6">7. Modifications des Conditions</h2>
                <p className="mb-6 text-gray-700">
                  Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les modifications prendront effet dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement ces conditions.
                </p>

                <h2 className="text-2xl font-semibold mb-6">8. Loi Applicable</h2>
                <p className="mb-6 text-gray-700">
                  Les présentes conditions sont régies par la loi française. Tout litige relatif à l'interprétation ou à l'exécution des présentes conditions sera soumis à la compétence exclusive des tribunaux français.
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

export default TermsOfService;
