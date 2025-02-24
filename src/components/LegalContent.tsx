
import { motion } from "framer-motion";

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
          <h1 className="text-4xl font-bold mb-8">Conditions Générales d'Utilisation et Mentions Légales</h1>

          <h2 className="text-2xl font-semibold mb-6">1. Informations Légales</h2>
          <p className="mb-6 text-gray-700">
            Le présent site est édité par [Nom de la Société], société [forme juridique] au capital de [montant] euros,
            immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro RCS],
            dont le siège social est situé [adresse complète].
          </p>
          <p className="mb-6 text-gray-700">
            Directeur de la publication : [Nom du directeur]<br />
            Contact : [email]<br />
            Téléphone : [numéro]
          </p>

          <h2 className="text-2xl font-semibold mb-6">2. Hébergement</h2>
          <p className="mb-6 text-gray-700">
            Le site est hébergé par [Nom de l'hébergeur], [forme juridique],<br />
            Siège social : [adresse de l'hébergeur]<br />
            Téléphone : [numéro]
          </p>

          <h2 className="text-2xl font-semibold mb-6">3. Conditions d'Utilisation du Service</h2>
          
          <h3 className="text-xl font-medium mb-4">3.1 Accès au Service</h3>
          <p className="mb-6 text-gray-700">
            L'accès au service est strictement réservé aux personnes majeures de plus de 18 ans. En accédant au service,
            l'utilisateur déclare et garantit être majeur selon la législation en vigueur dans son pays de résidence.
          </p>

          <h3 className="text-xl font-medium mb-4">3.2 Inscription</h3>
          <p className="mb-6 text-gray-700">
            Lors de l'inscription, l'utilisateur s'engage à fournir des informations exactes et à jour. Toute utilisation
            de fausses informations pourra entraîner la fermeture immédiate du compte.
          </p>

          <h2 className="text-2xl font-semibold mb-6">4. Protection des Données Personnelles</h2>
          <p className="mb-6 text-gray-700">
            Conformément au Règlement Général sur la Protection des Données (RGPD), les utilisateurs disposent
            d'un droit d'accès, de rectification, de suppression et d'opposition à leurs données personnelles.
          </p>

          <h3 className="text-xl font-medium mb-4">4.1 Collecte des Données</h3>
          <p className="mb-6 text-gray-700">
            Les informations recueillies font l'objet d'un traitement informatique destiné à :
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>La gestion des comptes utilisateurs</li>
            <li>L'amélioration des services proposés</li>
            <li>La personnalisation des contenus</li>
            <li>L'envoi d'informations commerciales (avec consentement)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6">5. Propriété Intellectuelle</h2>
          <p className="mb-6 text-gray-700">
            L'ensemble des éléments composant le site (textes, graphismes, logiciels, photographies, images, vidéos, sons,
            plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site
            lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
          </p>

          <h2 className="text-2xl font-semibold mb-6">6. Responsabilité</h2>
          <p className="mb-6 text-gray-700">
            La responsabilité du site ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de
            fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.
          </p>

          <h2 className="text-2xl font-semibold mb-6">7. Modification des CGU</h2>
          <p className="mb-6 text-gray-700">
            Les présentes conditions peuvent être modifiées à tout moment. Les utilisateurs du site sont donc invités
            à les consulter de manière régulière. Les nouvelles conditions s'imposent à l'utilisateur qui est invité
            à les consulter et à les accepter.
          </p>

          <h2 className="text-2xl font-semibold mb-6">8. Loi Applicable</h2>
          <p className="mb-6 text-gray-700">
            Les présentes conditions générales d'utilisation et mentions légales sont soumises au droit français.
            En cas de litige, les tribunaux français seront compétents.
          </p>

          <div className="text-sm text-gray-500 mt-12">
            <p>Dernière mise à jour : [Date]</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalContent;
