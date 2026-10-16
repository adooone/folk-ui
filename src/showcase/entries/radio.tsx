import { useState } from 'react';
import { RadioGroup } from '../../components/radio';
import { Control } from './control';
import { Entry } from './entry';

const OPTIONS = [
  { value: 'paper', label: 'Paper' },
  { value: 'kraft', label: 'Kraft' },
  { value: 'canvas', label: 'Canvas' },
];

const ORIENTATIONS = ['vertical', 'horizontal'] as const;
type Orientation = (typeof ORIENTATIONS)[number];

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

export function RadioEntry() {
  const [value, setValue] = useState('kraft');
  const [orientation, setOrientation] = useState<Orientation>('vertical');
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="Radio"
      description="A single-select control with a circular box, an ink dot, and a watercolor blob."
    >
      <RadioGroup
        options={OPTIONS}
        value={value}
        onChange={setValue}
        orientation={orientation}
        surface={surface}
      />
      <Control
        label="orientation"
        options={ORIENTATIONS}
        value={orientation}
        onChange={setOrientation}
      />
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
