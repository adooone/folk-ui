import { useState } from 'react';
import { Textarea } from '../../components/textarea';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function TextareaEntry() {
  const [value, setValue] = useState('');
  const [size, setSize] = useState<Size>('medium');
  const surface = useSurface();

  return (
    <Entry
      name="Textarea"
      description="A multi-line text input with a paper texture background and an ink underline on focus."
    >
      <Textarea
        label="Notes"
        placeholder="Write your notes..."
        size={size}
        surface={surface}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
