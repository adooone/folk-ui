import { useState } from 'react';
import { Button } from '../../components/button';
import { Modal } from '../../components/modal';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function ModalEntry() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<Size>('medium');

  return (
    <Entry name="Modal" description="A paper sheet overlay with a textured backdrop.">
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Journal Entry" size={size}>
        <p>
          This modal sits on a textured backdrop with an organic feel. Click the backdrop or the
          close button to dismiss.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Save
          </Button>
        </div>
      </Modal>
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
