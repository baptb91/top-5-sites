
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import QuizModal from "./QuizModal";

const QuizButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Animation pour faire rebondir le bouton
  const bounceAnimation = {
    y: [0, -10, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  };

  return (
    <div className="my-8 text-center">
      <motion.button
        animate={bounceAnimation}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-romance-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-romance-600"
      >
        <HelpCircle className="h-5 w-5" />
        Trouvez votre site idéal
      </motion.button>
      
      {isOpen && (
        <QuizModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
        />
      )}
    </div>
  );
};

export default QuizButton;
