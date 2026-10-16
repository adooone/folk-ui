import { useState } from 'react';
import { Button } from '../../components/button';
import { Island } from '../../components/island';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

export function IslandEntry() {
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="Island"
      description="A floating container fixed to the viewport, for controls that should always stay visible."
    >
      <div style={{ position: 'relative', contain: 'layout', height: 120, width: '100%' }}>
        <Island surface={surface}>
          <span>Unsaved changes</span>
          <Button variant="primary" size="small">
            Save
          </Button>
        </Island>
      </div>
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
