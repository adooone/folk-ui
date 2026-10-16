import { useState } from 'react';
import { Accordion } from '../../components/accordion';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

export function AccordionEntry() {
  const surface = useSurface();
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
    </Entry>
  );
}
