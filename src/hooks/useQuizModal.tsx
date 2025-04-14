
import { create } from 'zustand';

interface QuizModalStore {
  isOpen: boolean;
  openQuizModal: () => void;
  closeQuizModal: () => void;
}

export const useQuizModal = create<QuizModalStore>((set) => ({
  isOpen: false,
  openQuizModal: () => set({ isOpen: true }),
  closeQuizModal: () => set({ isOpen: false }),
}));
