
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
        <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl">
          Top 5 Sites de<br />Rencontres Coquines
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Le guide ultime des meilleures plateformes pour des rencontres
          discrètes et sans engagement. Classement mis à jour régulièrement.
        </p>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-romance-50 to-white/0" />
    </header>
  );
};

export default Header;
