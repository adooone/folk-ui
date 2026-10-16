import type { Category } from '../lib/entries';
import { entries } from '../lib/entries';
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

export function ComponentsSection() {
  const componentEntries = entries.filter((entry) => entry.section === 'components');

  return (
    <SectionBlock
      id="components"
      title="components"
      lead="Every piece of the library, grouped the way it ships."
    >
      {CATEGORY_ORDER.map((category) => {
        const categoryEntries = componentEntries.filter((entry) => entry.category === category);
        if (categoryEntries.length === 0) return null;

        return (
          <div key={category} className="flex flex-col gap-10">
            <CategoryHeading>{category}</CategoryHeading>
            {categoryEntries.map(({ id, Entry }) => (
              <Entry key={id} />
            ))}
          </div>
        );
      })}
    </SectionBlock>
  );
}
