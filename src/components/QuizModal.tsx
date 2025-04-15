
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Définition des types pour le quiz
interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    sites: Array<{
      name: string;
      weight: number;
    }>;
  }[];
}

interface QuizResult {
  siteName: string;
  score: number;
  affiliateLink: string;
  description: string;
}

// Questions du quiz
const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel type de rencontre recherchez-vous principalement ?",
    options: [
      {
        id: "1a",
        text: "Des relations sans engagement",
        sites: [
          { name: "Spiice", weight: 5 },
          { name: "BeSexy", weight: 4 },
          { name: "Power Dating", weight: 3 }
        ]
      },
      {
        id: "1b",
        text: "Des aventures discrètes",
        sites: [
          { name: "Infidèles", weight: 5 },
          { name: "JM Date", weight: 3 },
          { name: "Spiice", weight: 2 }
        ]
      },
      {
        id: "1c",
        text: "Des relations sérieuses mais passionnées",
        sites: [
          { name: "JM Date", weight: 5 },
          { name: "Power Dating", weight: 3 },
          { name: "Spiice", weight: 2 }
        ]
      },
      {
        id: "1d",
        text: "Des expériences libertines",
        sites: [
          { name: "BeSexy", weight: 5 },
          { name: "Infidèles", weight: 3 },
          { name: "Spiice", weight: 2 }
        ]
      }
    ]
  },
  {
    id: 2,
    question: "Quelle importance accordez-vous à la discrétion ?",
    options: [
      {
        id: "2a",
        text: "C'est ma priorité absolue",
        sites: [
          { name: "Infidèles", weight: 5 },
          { name: "JM Date", weight: 3 },
          { name: "BeSexy", weight: 2 }
        ]
      },
      {
        id: "2b",
        text: "Important mais pas essentiel",
        sites: [
          { name: "Spiice", weight: 4 },
          { name: "Power Dating", weight: 3 },
          { name: "JM Date", weight: 3 }
        ]
      },
      {
        id: "2c",
        text: "Peu important, je suis transparent(e)",
        sites: [
          { name: "BeSexy", weight: 4 },
          { name: "Power Dating", weight: 4 },
          { name: "Spiice", weight: 3 }
        ]
      }
    ]
  },
  {
    id: 3,
    question: "Quel âge ont généralement les personnes qui vous intéressent ?",
    options: [
      {
        id: "3a",
        text: "18-25 ans",
        sites: [
          { name: "Spiice", weight: 5 },
          { name: "Power Dating", weight: 4 },
          { name: "BeSexy", weight: 3 }
        ]
      },
      {
        id: "3b",
        text: "25-35 ans",
        sites: [
          { name: "Spiice", weight: 4 },
          { name: "JM Date", weight: 4 },
          { name: "Power Dating", weight: 3 }
        ]
      },
      {
        id: "3c",
        text: "35-50 ans",
        sites: [
          { name: "JM Date", weight: 5 },
          { name: "Infidèles", weight: 4 },
          { name: "BeSexy", weight: 3 }
        ]
      },
      {
        id: "3d",
        text: "50 ans et plus",
        sites: [
          { name: "JM Date", weight: 5 },
          { name: "Infidèles", weight: 3 },
          { name: "BeSexy", weight: 2 }
        ]
      }
    ]
  },
  {
    id: 4,
    question: "Quelle fonctionnalité est la plus importante pour vous ?",
    options: [
      {
        id: "4a",
        text: "Messagerie cryptée et sécurisée",
        sites: [
          { name: "Infidèles", weight: 5 },
          { name: "Spiice", weight: 4 },
          { name: "JM Date", weight: 3 }
        ]
      },
      {
        id: "4b",
        text: "Algorithme de matching efficace",
        sites: [
          { name: "Power Dating", weight: 5 },
          { name: "Spiice", weight: 4 },
          { name: "JM Date", weight: 3 }
        ]
      },
      {
        id: "4c",
        text: "Chat vidéo et échange de photos",
        sites: [
          { name: "BeSexy", weight: 5 },
          { name: "JM Date", weight: 4 },
          { name: "Power Dating", weight: 3 }
        ]
      },
      {
        id: "4d",
        text: "Communauté active et événements",
        sites: [
          { name: "BeSexy", weight: 5 },
          { name: "JM Date", weight: 4 },
          { name: "Spiice", weight: 3 }
        ]
      }
    ]
  },
  {
    id: 5,
    question: "Comment préférez-vous entamer une conversation ?",
    options: [
      {
        id: "5a",
        text: "Direct et sans détour",
        sites: [
          { name: "BeSexy", weight: 5 },
          { name: "Power Dating", weight: 4 },
          { name: "Spiice", weight: 3 }
        ]
      },
      {
        id: "5b",
        text: "Progressivement, en apprenant à se connaître",
        sites: [
          { name: "JM Date", weight: 5 },
          { name: "Spiice", weight: 3 },
          { name: "Power Dating", weight: 2 }
        ]
      },
      {
        id: "5c",
        text: "De façon ludique et séductrice",
        sites: [
          { name: "Spiice", weight: 5 },
          { name: "BeSexy", weight: 4 },
          { name: "Power Dating", weight: 3 }
        ]
      },
      {
        id: "5d",
        text: "Discrètement, en testant la compatibilité",
        sites: [
          { name: "Infidèles", weight: 5 },
          { name: "JM Date", weight: 3 },
          { name: "Spiice", weight: 2 }
        ]
      }
    ]
  }
];

// Informations sur les sites
const siteInfo: Record<string, { affiliateLink: string; description: string }> = {
  "Spiice": {
    affiliateLink: "https://spiice.rencontre-fan.com/?abc=703d1cecccb43f40&xa=n&acme=wid.85911&media=&source=Ticktok&s1=NomDuCompte&s2=Bio",
    description: "La nouvelle référence qui fait grimper la température, idéale pour les rencontres dynamiques et décontractées."
  },
  "JM Date": {
    affiliateLink: "https://k.related-dating.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.85911&media=seo&tpls=3&v=sexy",
    description: "L'expert des rencontres passionnées et authentiques, parfait pour ceux qui recherchent des connexions profondes."
  },
  "Infidèles": {
    affiliateLink: "https://k.related-dating.com/?abc=0e1679787e276c50&xa=n&acme=wid.85911&media=seo&tpls=1",
    description: "Le site de référence pour les rencontres discrètes, offrant une confidentialité maximale."
  },
  "BeSexy": {
    affiliateLink: "https://k.related-dating.com/?abc=dad1c2d8a4afc009&xa=n&acme=wid.85911&media=seo",
    description: "L'univers libertin qui fait tomber les barrières, pour explorer vos fantasmes sans tabous."
  },
  "Power Dating": {
    affiliateLink: "https://k.related-dating.com/?abc=4ef7627c47edba3a&xa=n&acme=wid.85911&media=seo&tpls=1",
    description: "La puissance des rencontres nouvelle génération, avec un algorithme de matching performant."
  }
};

const QuizModal = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleOptionSelect = (optionId: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionId;
    setSelectedOptions(newSelectedOptions);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      calculateResult(newSelectedOptions);
    }
  };

  const calculateResult = (selections: string[]) => {
    const scores: Record<string, number> = {
      "Spiice": 0,
      "JM Date": 0,
      "Infidèles": 0,
      "BeSexy": 0,
      "Power Dating": 0
    };

    // Calcul des scores
    selections.forEach((selectionId, index) => {
      const question = questions[index];
      const option = question.options.find(opt => opt.id === selectionId);
      
      if (option) {
        option.sites.forEach(site => {
          scores[site.name] += site.weight;
        });
      }
    });

    // Trouver le site avec le score le plus élevé
    let maxScore = 0;
    let bestSite = "";
    
    Object.entries(scores).forEach(([siteName, score]) => {
      if (score > maxScore) {
        maxScore = score;
        bestSite = siteName;
      }
    });

    setResult({
      siteName: bestSite,
      score: maxScore,
      affiliateLink: siteInfo[bestSite].affiliateLink,
      description: siteInfo[bestSite].description
    });
    
    setQuizCompleted(true);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Animation variants pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative flex min-h-[60vh] w-full flex-col bg-white p-6">
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200"
      >
        <X className="h-5 w-5" />
      </button>

      {!quizCompleted ? (
        <>
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Trouvez votre site de rencontres idéal
            </h3>
            <p className="text-gray-600">
              Répondez à quelques questions pour découvrir la plateforme qui correspond le mieux à vos attentes.
            </p>
          </div>

          <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div 
              className="h-full bg-romance-500 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <p className="mb-4 text-sm text-gray-500">
            Question {currentQuestionIndex + 1} sur {questions.length}
          </p>

          <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h4 className="mb-6 text-xl font-semibold text-gray-800">
              {questions[currentQuestionIndex].question}
            </h4>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {questions[currentQuestionIndex].options.map((option) => (
                <motion.button
                  key={option.id}
                  variants={itemVariants}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-all hover:bg-romance-50 hover:border-romance-300 ${
                    selectedOptions[currentQuestionIndex] === option.id
                      ? "border-romance-500 bg-romance-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.text}</span>
                    <ChevronRight className="h-5 w-5 text-romance-500" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col items-center justify-center text-center"
        >
          <div className="mb-6 rounded-full bg-romance-100 p-4">
            <CheckCircle className="h-12 w-12 text-romance-500" />
          </div>
          
          <h3 className="mb-2 text-2xl font-bold text-gray-900">
            Votre site idéal est : {result?.siteName}
          </h3>
          
          <p className="mb-6 max-w-md text-gray-600">
            {result?.description}
          </p>
          
          <p className="mb-8 text-sm text-gray-500">
            Ce résultat est basé sur vos préférences et notre analyse des meilleures plateformes.
          </p>
          
          <a
            href={result?.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center space-x-2 rounded-full bg-romance-500 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-romance-600"
          >
            <span>Découvrir {result?.siteName}</span>
            <ChevronRight className="h-5 w-5" />
          </a>
          
          <button
            onClick={onClose}
            className="text-sm text-gray-500 underline hover:text-gray-700"
          >
            Fermer et revenir au site
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default QuizModal;
