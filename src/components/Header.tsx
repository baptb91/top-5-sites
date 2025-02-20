
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative mb-16 overflow-hidden py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Trouvez l'Amour en Ligne
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Découvrez les meilleurs sites de rencontre et conseils pour trouver
          l'amour. Des connexions authentiques vous attendent.
        </p>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-romance-50 to-white/0" />
    </header>
  );
};

export default Header;
