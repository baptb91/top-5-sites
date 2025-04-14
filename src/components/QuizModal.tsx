
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: { id: string; text: string; sites: string[] }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Quel type de relation recherchez-vous principalement ?",
    options: [
      { id: "a", text: "Une relation sérieuse et engagée", sites: ["JM Date"] },
      { id: "b", text: "Des rencontres passionnées sans engagement", sites: ["Spiice", "BeSexy"] },
      { id: "c", text: "Des aventures discrètes", sites: ["Infidèles"] },
      { id: "d", text: "Je suis ouvert à différentes possibilités", sites: ["Power Dating", "Spiice"] }
    ]
  },
  {
    id: 2,
    text: "Quelle importance accordez-vous à la discrétion ?",
    options: [
      { id: "a", text: "C'est ma priorité absolue", sites: ["Infidèles"] },
      { id: "b", text: "C'est important, mais pas essentiel", sites: ["Spiice", "Power Dating"] },
      { id: "c", text: "Je n'ai pas besoin de discrétion particulière", sites: ["JM Date", "BeSexy"] },
      { id: "d", text: "Ça dépend des circonstances", sites: ["Spiice", "Power Dating"] }
    ]
  },
  {
    id: 3,
    text: "Qu'est-ce qui est le plus important pour vous dans une application de rencontre ?",
    options: [
      { id: "a", text: "Une communauté active et nombreuse", sites: ["JM Date", "Spiice"] },
      { id: "b", text: "Des fonctionnalités innovantes et modernes", sites: ["Spiice", "Power Dating"] },
      { id: "c", text: "La sécurité et la vérification des profils", sites: ["JM Date", "Infidèles"] },
      { id: "d", text: "Une expérience libertine et sans tabou", sites: ["BeSexy"] }
    ]
  },
  {
    id: 4,
    text: "Quelle tranche d'âge vous intéresse le plus ?",
    options: [
      { id: "a", text: "18-30 ans", sites: ["Spiice", "Power Dating"] },
      { id: "b", text: "30-45 ans", sites: ["JM Date", "Infidèles"] },
      { id: "c", text: "45+ ans", sites: ["JM Date"] },
      { id: "d", text: "Tous âges confondus", sites: ["BeSexy", "Spiice"] }
    ]
  },
  {
    id: 5,
    text: "Comment préférez-vous communiquer avec vos matchs ?",
    options: [
      { id: "a", text: "Messagerie instantanée et réactive", sites: ["Spiice", "Power Dating"] },
      { id: "b", text: "Échanges plus approfondis et détaillés", sites: ["JM Date"] },
      { id: "c", text: "Communication discrète avec options de confidentialité", sites: ["Infidèles"] },
      { id: "d", text: "Chat vidéo et échange de médias", sites: ["BeSexy", "Spiice"] }
    ]
  }
];

const QuizModal = ({ isOpen, onClose }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedSite, setRecommendedSite] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      // Réinitialiser le quiz lorsque le modal est fermé
      setTimeout(() => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
      }, 300);
    }
  }, [isOpen]);

  const handleAnswer = (siteArray: string[]) => {
    const newAnswers = [...answers, ...siteArray];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculer le site le plus recommandé
      const siteCounts: {[key: string]: number} = {};
      newAnswers.forEach(site => {
        siteCounts[site] = (siteCounts[site] || 0) + 1;
      });
      
      // Trouver le site avec le plus de votes
      let maxCount = 0;
      let maxSite = "";
      
      Object.entries(siteCounts).forEach(([site, count]) => {
        if (count > maxCount) {
          maxCount = count;
          maxSite = site;
        }
      });
      
      setRecommendedSite(maxSite);
      setShowResult(true);
    }
  };

  const handleCloseResult = () => {
    toast({
      title: "Résultat sauvegardé!",
      description: `Nous avons enregistré votre préférence pour ${recommendedSite}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </DialogClose>
        
        <div className="px-2 py-4">
          {!showResult ? (
            <>
              <h2 className="mb-6 text-center text-xl font-semibold text-gray-900">
                {questions[currentQuestion].text}
              </h2>
              
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.sites)}
                    className="w-full rounded-lg border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:border-romance-300 hover:bg-romance-50"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === currentQuestion ? "bg-romance-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Votre site idéal</h2>
              <div className="mx-auto my-6 w-24 rounded-full bg-romance-100 p-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <img 
                    src={`/lovable-uploads/${
                      recommendedSite === "Spiice" ? "5464b755-8f01-429c-83fd-eb700f419b4c.png" : 
                      recommendedSite === "JM Date" ? "bf6fe96a-7b07-4b5f-a8e9-61a9977d06ea.png" :
                      recommendedSite === "Infidèles" ? "ce51fe8e-dfe9-4f07-8311-41a128f4e000.png" :
                      recommendedSite === "BeSexy" ? "365ab1bb-4f55-4356-987c-3e75a85f877f.png" :
                      "0cf2281f-d919-430e-ac86-f518fb2c0b13.png"
                    }`}
                    alt={recommendedSite}
                    className="h-16 w-16"
                  />
                </motion.div>
              </div>
              <p className="mb-4 text-lg font-medium text-gray-700">
                D'après vos réponses, <span className="font-bold text-romance-600">{recommendedSite}</span> correspond le mieux à vos attentes !
              </p>
              <p className="mb-6 text-sm text-gray-600">
                Découvrez pourquoi ce site est fait pour vous en consultant son profil détaillé ci-dessous.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseResult}
                className="inline-flex items-center rounded-full bg-romance-500 px-6 py-3 text-white transition-colors hover:bg-romance-600"
              >
                Voir la présentation de {recommendedSite}
              </motion.button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
