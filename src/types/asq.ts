export type AgeGroup = '2 months' | '4 months' | '6 months' | '9 months' | '12 months' | '18 months' | '24 months' | '30 months' | '36 months' | '48 months' | '60 months';

export type Answer = 'yes' | 'sometimes' | 'not yet';

export interface Question {
  id: string;
  text: string;
  area: DevelopmentalArea;
}

export type DevelopmentalArea = 'communication' | 'gross-motor' | 'fine-motor' | 'problem-solving' | 'personal-social';

export interface Score {
  area: DevelopmentalArea;
  score: number;
  status: 'on-track' | 'monitor' | 'refer';
}

export interface ASQData {
  ageGroup: AgeGroup;
  areas: Record<DevelopmentalArea, Question[]>;
  cutoffScores: Record<DevelopmentalArea, { monitor: number; refer: number }>;
}