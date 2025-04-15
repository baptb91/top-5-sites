
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import QuizModal from "./QuizModal";

const QuizButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 flex justify-center">
      <Button 
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden rounded-full bg-romance-600 px-6 py-3 text-white transition-all duration-300 hover:bg-romance-700"
      >
        <span className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Trouvez votre site idéal en 30 secondes
        </span>
        <span className="absolute bottom-0 left-0 h-1 w-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 sm:rounded-2xl">
          <QuizModal onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuizButton;
