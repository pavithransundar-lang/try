
export const STUDENT_NAME = "Celine";
export const TOTAL_TOKENS = 5;

export const CASTLE_DESIGNS = ['classic', 'fairytale', 'crystal', 'forest'] as const;
export type CastleType = typeof CASTLE_DESIGNS[number];

export const QUEST_STEPS = [
  { name: 'Butterfly Garden' },
  { name: 'Magic Forest' },
  { name: 'Crystal Bridge' },
  { name: 'Royal Gate' },
  { name: 'The Royal Castle' },
];

export const BUTTERFLY_TYPES = ['blue', 'pink', 'monarch', 'green'] as const;
