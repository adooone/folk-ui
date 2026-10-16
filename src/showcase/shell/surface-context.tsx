import { createContext, useContext } from 'react';

export type Surface = 'paper' | 'chalkboard';

const SurfaceContext = createContext<Surface>('paper');

export const SurfaceProvider = SurfaceContext.Provider;

export function useSurface(): Surface {
  return useContext(SurfaceContext);
}
