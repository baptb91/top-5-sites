
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { useQuizModal } from '@/hooks/useQuizModal';

const QuizButton = () => {
  const { openQuizModal } = useQuizModal();

  return (
    <motion.button
      onClick={openQuizModal}
      className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-romance-600 to-romance-400 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-romance-300/50 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HelpCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
      <span className="font-medium">Trouvez votre site idéal</span>
      <motion.span
        className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-romance-500"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        🔥
      </motion.span>
    </motion.button>
  );
};

export default QuizButton;
