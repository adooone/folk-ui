import { useState } from 'react';
import { Checkbox } from '../../components/checkbox';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['medium', 'small'] as const;
type Size = (typeof SIZES)[number];

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

export function CheckboxEntry() {
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState<Size>('medium');
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="Checkbox"
      description="A hand-drawn checkbox with a wobbly blob background and an ink checkmark."
    >
      <Checkbox
        label="Enable feature"
        size={size}
        surface={surface}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
