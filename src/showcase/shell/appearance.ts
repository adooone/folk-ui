export type FaceKey = 'default' | 'cormorant' | 'kyiv-sans' | 'kyiv-serif';

export const faceFamilies: Record<FaceKey, string | null> = {
  default: null,
  cormorant: "'Cormorant Garamond', Georgia, serif",
  'kyiv-sans': "'Kyiv Sans', system-ui, sans-serif",
  'kyiv-serif': "'Kyiv Serif', Georgia, serif",
};

export const faceKeys = Object.keys(faceFamilies) as FaceKey[];

export const textScales = [100, 112.5, 125] as const;

export interface Appearance {
  body: FaceKey;
  title: FaceKey;
  scale: number;
}

export const defaultAppearance: Appearance = { body: 'default', title: 'default', scale: 100 };

export function nextItem<T>(items: readonly T[], current: T): T {
  return items[(items.indexOf(current) + 1) % items.length];
}

const variables = [
  ['--paper-font-default', 'body'],
  ['--paper-font-title', 'title'],
  ['--paper-font-hand', 'title'],
  ['--paper-font-mono', 'body'],
] as const;

export function applyAppearance({ body, title, scale }: Appearance) {
  const root = document.documentElement;
  for (const [name, role] of variables) {
    const family = faceFamilies[role === 'body' ? body : title];
    if (family) root.style.setProperty(name, family);
    else root.style.removeProperty(name);
  }
  root.style.fontSize = `${scale}%`;
}
