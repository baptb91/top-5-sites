
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useQuizModal } from '@/hooks/useQuizModal';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizOption, QuizResult } from '@/types/quiz';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';

const QuizModal = () => {
  const { isOpen, closeQuizModal } = useQuizModal();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [resultSite, setResultSite] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState(0);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgressValue(((currentQuestionIndex + 1) / quizQuestions.length) * 100);
    } else {
      calculateResults();
      setShowResults(true);
      setProgressValue(100);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgressValue(((currentQuestionIndex - 1) / quizQuestions.length) * 100);
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {
      'Spiice': 0,
      'JM Date': 0,
      'Infidèles': 0,
      'BeSexy': 0,
      'Power Dating': 0,
    };

    // Calculer les scores pour chaque site
    Object.entries(selectedOptions).forEach(([questionId, optionId]) => {
      const question = quizQuestions.find(q => q.id === questionId);
      if (question) {
        const option = question.options.find(o => o.id === optionId) as QuizOption;
        if (option) {
          Object.entries(option.scores).forEach(([siteId, score]) => {
            scores[siteId] += score;
          });
        }
      }
    });

    // Trouver le site avec le score le plus élevé
    const results: QuizResult[] = Object.entries(scores).map(([siteId, score]) => ({
      siteId,
      score,
    }));

    results.sort((a, b) => b.score - a.score);
    setResultSite(results[0].siteId);
    
    // Log pour le débogage
    console.log('Quiz results:', results);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setShowResults(false);
    setResultSite(null);
    setProgressValue(0);
  };

  const closeAndReset = () => {
    closeQuizModal();
    setTimeout(resetQuiz, 300);
  };
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isOptionSelected = currentQuestion && selectedOptions[currentQuestion.id];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={closeAndReset}>
      <DialogContent className="max-w-md rounded-xl p-0 sm:max-w-lg md:max-w-2xl">
        <div className="relative">
          {/* Barre de progression */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gray-200">
            <motion.div
              className="h-full bg-romance-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Bouton de fermeture */}
          <button 
            onClick={closeAndReset} 
            className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="p-6 pb-4 pt-10">
            <h2 className="mb-1 text-xl font-bold text-gray-900">
              Trouvez votre site de rencontre idéal
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Répondez à ces {quizQuestions.length} questions pour découvrir la plateforme qui vous correspond le mieux
            </p>
          </div>

          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mb-4 text-lg font-medium text-gray-800">
                    {currentQuestion.text}
                  </h3>
                  
                  <RadioGroup
                    value={selectedOptions[currentQuestion.id] || ""}
                    onValueChange={(value) => handleOptionSelect(currentQuestion.id, value)}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option) => (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all ${
                          selectedOptions[currentQuestion.id] === option.id
                            ? "border-romance-500 bg-romance-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <span>{option.text}</span>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestionIndex === 0}
                      className={`flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors ${
                        currentQuestionIndex === 0
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Précédent
                    </button>
                    
                    <button
                      onClick={handleNext}
                      disabled={!isOptionSelected}
                      className={`flex items-center gap-1 rounded-lg bg-romance-500 px-4 py-2 text-sm font-medium text-white transition-colors ${
                        isOptionSelected
                          ? "hover:bg-romance-600"
                          : "cursor-not-allowed opacity-50"
                      }`}
                    >
                      {isLastQuestion ? "Voir les résultats" : "Suivant"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-romance-100 p-3">
                      <CheckCircle className="h-10 w-10 text-romance-500" />
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Votre site idéal est :
                  </h3>
                  
                  <div className="mt-4 rounded-2xl bg-romance-50 p-6">
                    <h4 className="mb-1 text-3xl font-bold text-romance-600">
                      {resultSite}
                    </h4>
                    <p className="mb-4 text-gray-600">
                      D'après vos réponses, ce site correspond parfaitement à vos attentes !
                    </p>
                    
                    <Button 
                      onClick={() => {
                        closeAndReset();
                        const element = document.getElementById(resultSite || '');
                        if (element) {
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            toast({
                              title: `Découvrez ${resultSite}`,
                              description: "Nous vous avons trouvé votre plateforme idéale !",
                            });
                          }, 300);
                        }
                      }}
                      className="w-full bg-romance-500 text-white hover:bg-romance-600"
                    >
                      Découvrir {resultSite}
                    </Button>
                    
                    <button
                      onClick={resetQuiz}
                      className="mt-3 w-full text-sm text-gray-500 underline underline-offset-2 hover:text-romance-600"
                    >
                      Recommencer le quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
