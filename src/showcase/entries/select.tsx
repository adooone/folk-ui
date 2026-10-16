import { useState } from 'react';
import { Select } from '../../components/select';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const OPTIONS = [
  { value: 'paper', label: 'Paper' },
  { value: 'canvas', label: 'Canvas' },
  { value: 'parchment', label: 'Parchment' },
  { value: 'kraft', label: 'Kraft' },
];

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function SelectEntry() {
  const [value, setValue] = useState('paper');
  const [size, setSize] = useState<Size>('medium');
  const surface = useSurface();

  return (
    <Entry
      name="Select"
      description="A paper-styled dropdown with a hand-drawn chevron icon and a textured background."
    >
      <Select
        label="Texture"
        options={OPTIONS}
        value={value}
        onChange={setValue}
        size={size}
        surface={surface}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
