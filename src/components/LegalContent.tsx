
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LegalContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link 
              to="/mentions-legales" 
              className="px-4 py-2 bg-romance-500 text-white rounded hover:bg-romance-600 transition-colors"
            >
              Mentions Légales
            </Link>
            <Link 
              to="/conditions-utilisation" 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              CGU
            </Link>
            <Link 
              to="/politique-confidentialite" 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link 
              to="/politique-cookies" 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cookies
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-6">1. Informations Légales</h2>
          <p className="mb-6 text-gray-700">
            Le présent site est édité par RencontreCoquine.info, site d'information et de comparaison de plateformes de rencontres pour adultes.
          </p>
          <p className="mb-6 text-gray-700">
            Directeur de la publication : Le directeur de la publication<br />
            Contact : contact@rencontrecoquine.info<br />
          </p>

          <h2 className="text-2xl font-semibold mb-6">2. Hébergement</h2>
          <p className="mb-6 text-gray-700">
            Le site est hébergé par Netlify, Inc.,<br />
            Siège social : 2325 3rd Street, Suite 215, San Francisco, California 94107, USA<br />
            Site web : https://www.netlify.com
          </p>

          <h2 className="text-2xl font-semibold mb-6">3. Propriété Intellectuelle</h2>
          <p className="mb-6 text-gray-700">
            L'ensemble des éléments composant le site (textes, graphismes, logiciels, photographies, images, vidéos, sons,
            plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site
            lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
          </p>
          <p className="mb-6 text-gray-700">
            Ces éléments sont la propriété exclusive de RencontreCoquine.info. Toute reproduction ou représentation, totale ou partielle,
            du site ou de l'un des éléments qui le composent, sans l'autorisation expresse de RencontreCoquine.info, est interdite et
            constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>

          <h2 className="text-2xl font-semibold mb-6">4. Liens Hypertextes</h2>
          <p className="mb-6 text-gray-700">
            Le site RencontreCoquine.info peut contenir des liens hypertextes vers d'autres sites internet qui ne sont pas sous
            le contrôle de RencontreCoquine.info. RencontreCoquine.info ne peut être tenu responsable du contenu de ces sites et
            des liens qu'ils contiennent.
          </p>

          <h2 className="text-2xl font-semibold mb-6">5. Protection des Données Personnelles</h2>
          <p className="mb-6 text-gray-700">
            RencontreCoquine.info s'engage à respecter votre vie privée et à protéger les informations que vous lui communiquez.
            Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre 
            <Link to="/politique-confidentialite" className="text-romance-600 hover:underline ml-1">
              Politique de Confidentialité
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold mb-6">6. Cookies</h2>
          <p className="mb-6 text-gray-700">
            RencontreCoquine.info utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations sur
            notre utilisation des cookies, veuillez consulter notre 
            <Link to="/politique-cookies" className="text-romance-600 hover:underline ml-1">
              Politique de Cookies
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold mb-6">7. Conditions Générales d'Utilisation</h2>
          <p className="mb-6 text-gray-700">
            L'utilisation du site RencontreCoquine.info est soumise au respect des 
            <Link to="/conditions-utilisation" className="text-romance-600 hover:underline ml-1">
              Conditions Générales d'Utilisation
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold mb-6">8. Loi Applicable et Juridiction</h2>
          <p className="mb-6 text-gray-700">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>

          <div className="text-sm text-gray-500 mt-12">
            <p>Dernière mise à jour : Mai 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalContent;
