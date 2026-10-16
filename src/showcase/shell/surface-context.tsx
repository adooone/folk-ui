import { createContext, useContext } from 'react';

export type Surface = 'paper' | 'chalkboard';

const SurfaceContext = createContext<Surface>('paper');

export const SurfaceProvider = SurfaceContext.Provider;

export function useSurface(): Surface {
  return useContext(SurfaceContext);
}

// Set around an entry whose component has no chalkboard surface: on a
// chalkboard sheet, Entry lays that demo on a paper inset instead.
const PaperDemoContext = createContext(false);

export const PaperDemoProvider = PaperDemoContext.Provider;

export function usePaperDemo(): boolean {
  return useContext(PaperDemoContext);
}
