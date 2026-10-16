import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Page } from '../../components/page';

interface SheetProps {
  children: ReactNode;
}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet({ children }, ref) {
  return (
    <div ref={ref} className="min-w-0 flex-1 p-10">
      <Page className="h-full">{children}</Page>
    </div>
  );
});
