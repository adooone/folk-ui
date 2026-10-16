import { useState } from 'react';
import { Disclosure } from '../../components/disclosure';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const UNDERLINES = ['off', 'on'] as const;
type Underline = (typeof UNDERLINES)[number];

export function DisclosureEntry() {
  const [expanded, setExpanded] = useState(false);
  const [underline, setUnderline] = useState<Underline>('off');
  const surface = useSurface();

  return (
    <Entry name="Disclosure" description="A show-more/show-less toggle button.">
      <div className="flex flex-col gap-2">
        <Disclosure
          expanded={expanded}
          onToggle={() => setExpanded((prev) => !prev)}
          collapsedLabel="Show more"
          expandedLabel="Show less"
          underline={underline === 'on'}
          surface={surface}
        >
          Show more
        </Disclosure>
        {expanded && <p>This extra line only appears once the disclosure is expanded.</p>}
      </div>
      <Control label="underline" options={UNDERLINES} value={underline} onChange={setUnderline} />
    </Entry>
  );
}
