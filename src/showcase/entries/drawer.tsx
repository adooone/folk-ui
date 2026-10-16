import { useState } from 'react';
import { Button } from '../../components/button';
import { Drawer } from '../../components/drawer';
import { Control } from './control';
import { Entry } from './entry';

const SIDES = ['left', 'right'] as const;
type Side = (typeof SIDES)[number];

export function DrawerEntry() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<Side>('left');

  return (
    <Entry
      name="Drawer"
      description="A slide-in panel with a blurred scrim, a focus trap, and Escape-to-close."
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)} side={side} width={280}>
        <p>
          The Drawer slides in with a blurred scrim behind it. Escape or a click on the scrim closes
          it.
        </p>
        <div className="mt-6 flex justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Drawer>
      <Control label="side" options={SIDES} value={side} onChange={setSide} />
    </Entry>
  );
}
