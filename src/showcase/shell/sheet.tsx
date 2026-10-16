import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Page } from '../../components/page';
import { colors } from '../../tokens';
import type { Surface } from './surface-context';

interface SheetProps {
  children: ReactNode;
  surface: Surface;
}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  { children, surface },
  ref,
) {
  const isChalkboard = surface === 'chalkboard';

  return (
    <div ref={ref} className="min-w-0 flex-1 p-4 lg:p-10">
      <Page
        className="h-full"
        texture={isChalkboard ? 'chalkboard' : true}
        style={isChalkboard ? { color: colors.chalkboardText } : undefined}
      >
        {children}
      </Page>
    </div>
  );
});
