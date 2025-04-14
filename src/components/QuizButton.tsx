
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
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }}
      // Animation de rebond continue pour attirer l'attention
      variants={{
        bounce: {
          y: [0, -8, 0],
        }
      }}
      whileInView="bounce"
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      <HelpCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
      <span className="font-medium">Trouvez votre site idéal</span>
      
      {/* Indicateur animé pour attirer l'attention */}
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
      
      {/* Animation de pulsation autour du bouton */}
      <motion.span
        className="absolute -inset-1 rounded-full bg-romance-400 opacity-30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{ zIndex: -1 }}
      />
    </motion.button>
  );
};

export default QuizButton;
