import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { colors, shadows } from '../../tokens';
import { getSurfaceStyles } from '../../utils/textures';
import type { Surface } from './surface-context';

interface SheetProps {
  children: ReactNode;
  surface: Surface;
}

// Full-height, edge-to-edge paper on the right — func-ui's Glass panel, in
// paper. It is its own scroll container (the ref), so the section observer
// and the width scrub key off this element directly.
export const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  { children, surface },
  ref,
) {
  const isChalkboard = surface === 'chalkboard';

  return (
    <div
      ref={ref}
      className="relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden"
      style={{
        ...getSurfaceStyles(isChalkboard ? 'chalkboard' : 'white'),
        color: isChalkboard ? colors.chalkboardText : colors.textPrimary,
        boxShadow: shadows['ink-md'],
      }}
    >
      <div className="flex min-h-full flex-col gap-16 p-6 lg:p-12">{children}</div>
    </div>
  );
});
