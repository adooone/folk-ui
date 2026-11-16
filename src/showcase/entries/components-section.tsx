import { Stamp } from '../../components/stamp';
import type { Category } from '../lib/entries';
import { entries } from '../lib/entries';
import { PaperDemoProvider, useSurface } from '../shell/surface-context';
import { CategoryHeading } from './category-heading';
import { SectionBlock } from './section-block';

const CATEGORY_ORDER: Category[] = [
  'Typography',
  'Basic',
  'Form',
  'Layout',
  'Navigation',
  'Sidebar & settings',
  'Feedback',
  'Charts',
  'Overlay',
];

interface ComponentsSectionProps {
  onOpenDetail: (id: string) => void;
}

export function ComponentsSection({ onOpenDetail }: ComponentsSectionProps) {
  const surface = useSurface();

  return (
    <SectionBlock
      id="components"
      title="components"
      lead="Every piece of the library, grouped the way it ships."
    >
      {CATEGORY_ORDER.map((category) => {
        const categoryEntries = entries.filter((entry) => entry.category === category);
        if (categoryEntries.length === 0) return null;

        return (
          <div key={category} className="flex flex-col gap-10">
            <CategoryHeading>{category}</CategoryHeading>
            {categoryEntries.map(({ id, Entry, paperOnly = false }) => (
              <div key={id} className="relative">
                <PaperDemoProvider value={paperOnly}>
                  <Entry />
                </PaperDemoProvider>
                <Stamp
                  size="small"
                  variant="neutral"
                  surface={surface}
                  onClick={() => onOpenDetail(id)}
                  className="absolute right-0 top-0"
                >
                  details
                </Stamp>
              </div>
            ))}
          </div>
        );
      })}
    </SectionBlock>
  );
}
