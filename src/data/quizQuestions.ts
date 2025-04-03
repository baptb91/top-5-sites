
import { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'Quelle est votre tranche d\'âge ?',
    options: [
      {
        id: 'q1_a',
        text: '18-25 ans',
        scores: { 'Spiice': 10, 'JM Date': 5, 'Infidèles': 5, 'BeSexy': 7, 'Power Dating': 8 }
      },
      {
        id: 'q1_b',
        text: '26-35 ans',
        scores: { 'Spiice': 8, 'JM Date': 8, 'Infidèles': 8, 'BeSexy': 9, 'Power Dating': 7 }
      },
      {
        id: 'q1_c',
        text: '36-45 ans',
        scores: { 'Spiice': 5, 'JM Date': 10, 'Infidèles': 9, 'BeSexy': 8, 'Power Dating': 6 }
      },
      {
        id: 'q1_d',
        text: '46 ans et plus',
        scores: { 'Spiice': 3, 'JM Date': 9, 'Infidèles': 7, 'BeSexy': 6, 'Power Dating': 5 }
      }
    ]
  },
  {
    id: 'q2',
    text: 'Quel type de relation recherchez-vous principalement ?',
    options: [
      {
        id: 'q2_a',
        text: 'Relation sérieuse',
        scores: { 'Spiice': 7, 'JM Date': 10, 'Infidèles': 2, 'BeSexy': 3, 'Power Dating': 6 }
      },
      {
        id: 'q2_b',
        text: 'Aventure sans lendemain',
        scores: { 'Spiice': 8, 'JM Date': 5, 'Infidèles': 9, 'BeSexy': 10, 'Power Dating': 8 }
      },
      {
        id: 'q2_c',
        text: 'Amitié avec avantages',
        scores: { 'Spiice': 9, 'JM Date': 6, 'Infidèles': 8, 'BeSexy': 7, 'Power Dating': 9 }
      },
      {
        id: 'q2_d',
        text: 'Relation discrète',
        scores: { 'Spiice': 6, 'JM Date': 7, 'Infidèles': 10, 'BeSexy': 8, 'Power Dating': 7 }
      }
    ]
  },
  {
    id: 'q3',
    text: 'Quelle importance accordez-vous à la discrétion ?',
    options: [
      {
        id: 'q3_a',
        text: 'Primordiale, je veux rester totalement anonyme',
        scores: { 'Spiice': 6, 'JM Date': 7, 'Infidèles': 10, 'BeSexy': 8, 'Power Dating': 5 }
      },
      {
        id: 'q3_b',
        text: 'Importante, mais je peux partager quelques informations',
        scores: { 'Spiice': 8, 'JM Date': 8, 'Infidèles': 7, 'BeSexy': 7, 'Power Dating': 8 }
      },
      {
        id: 'q3_c',
        text: 'Modérée, je suis à l\'aise pour partager mon profil',
        scores: { 'Spiice': 9, 'JM Date': 9, 'Infidèles': 5, 'BeSexy': 6, 'Power Dating': 9 }
      },
      {
        id: 'q3_d',
        text: 'Peu importante, je suis transparent(e)',
        scores: { 'Spiice': 10, 'JM Date': 6, 'Infidèles': 3, 'BeSexy': 5, 'Power Dating': 10 }
      }
    ]
  },
  {
    id: 'q4',
    text: 'Quelle fonctionnalité est la plus importante pour vous ?',
    options: [
      {
        id: 'q4_a',
        text: 'Messagerie instantanée réactive',
        scores: { 'Spiice': 10, 'JM Date': 7, 'Infidèles': 8, 'BeSexy': 7, 'Power Dating': 9 }
      },
      {
        id: 'q4_b',
        text: 'Profils détaillés et vérifiés',
        scores: { 'Spiice': 8, 'JM Date': 10, 'Infidèles': 6, 'BeSexy': 7, 'Power Dating': 8 }
      },
      {
        id: 'q4_c',
        text: 'Mode fantôme et options de confidentialité',
        scores: { 'Spiice': 6, 'JM Date': 7, 'Infidèles': 10, 'BeSexy': 8, 'Power Dating': 7 }
      },
      {
        id: 'q4_d',
        text: 'Galeries photos privées et chat vidéo',
        scores: { 'Spiice': 7, 'JM Date': 8, 'Infidèles': 7, 'BeSexy': 10, 'Power Dating': 8 }
      }
    ]
  },
  {
    id: 'q5',
    text: 'Comment préférez-vous l\'interface utilisateur ?',
    options: [
      {
        id: 'q5_a',
        text: 'Moderne et intuitive',
        scores: { 'Spiice': 10, 'JM Date': 7, 'Infidèles': 6, 'BeSexy': 8, 'Power Dating': 9 }
      },
      {
        id: 'q5_b',
        text: 'Classique et facile à utiliser',
        scores: { 'Spiice': 6, 'JM Date': 10, 'Infidèles': 7, 'BeSexy': 7, 'Power Dating': 8 }
      },
      {
        id: 'q5_c',
        text: 'Discrète et épurée',
        scores: { 'Spiice': 7, 'JM Date': 8, 'Infidèles': 10, 'BeSexy': 7, 'Power Dating': 6 }
      },
      {
        id: 'q5_d',
        text: 'Colorée et stimulante',
        scores: { 'Spiice': 8, 'JM Date': 6, 'Infidèles': 5, 'BeSexy': 10, 'Power Dating': 7 }
      }
    ]
  }
];
