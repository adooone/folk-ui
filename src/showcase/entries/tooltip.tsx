import { useState } from 'react';
import { Button } from '../../components/button';
import { Tooltip } from '../../components/tooltip';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;
type Placement = (typeof PLACEMENTS)[number];

export function TooltipEntry() {
  const [placement, setPlacement] = useState<Placement>('top');
  const surface = useSurface();

  return (
    <Entry
      name="Tooltip"
      description="An inked label with a hand-drawn arrow, shown on hover or focus."
    >
      <Tooltip content="Saves your changes" placement={placement} surface={surface}>
        <Button variant="primary">Save</Button>
      </Tooltip>
      <Control label="placement" options={PLACEMENTS} value={placement} onChange={setPlacement} />
    </Entry>
  );
}
