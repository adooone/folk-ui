import { useState } from 'react';
import { Input } from '../../components/input';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function InputEntry() {
  const [value, setValue] = useState('');
  const [size, setSize] = useState<Size>('medium');
  const surface = useSurface();

  return (
    <Entry
      name="Input"
      description="A hand-drawn text field with a paper texture background and an ink underline on focus."
    >
      <Input
        label="Project name"
        placeholder="Enter a name..."
        size={size}
        surface={surface}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
