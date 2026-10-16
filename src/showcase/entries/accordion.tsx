import { useState } from 'react';
import { Accordion } from '../../components/accordion';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

export function AccordionEntry() {
  const [surface, setSurface] = useState<Surface>('paper');
  const [expanded, setExpanded] = useState(true);

  return (
    <Entry
      name="Accordion"
      description="Collapsible content section with a rotating disclosure triangle."
    >
      <div className="w-full max-w-sm">
        <Accordion
          title="Shipping details"
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          surface={surface}
        >
          <p>Ships within 2-3 business days. Free returns within 30 days.</p>
        </Accordion>
      </div>
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
