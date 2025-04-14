
export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  scores: Record<string, number>;
}

export interface QuizResult {
  siteId: string;
  score: number;
}
