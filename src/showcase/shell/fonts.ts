export type FontKey = 'luminari' | 'cormorant' | 'cinzel' | 'almendra';

export interface FontOption {
  key: FontKey;
  family: string;
}

export const fonts: readonly FontOption[] = [
  { key: 'luminari', family: "'Luminari', serif" },
  { key: 'cormorant', family: "'Cormorant Garamond', serif" },
  { key: 'cinzel', family: "'Cinzel Decorative', serif" },
  { key: 'almendra', family: "'Almendra Display', serif" },
];
