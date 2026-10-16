import { useState } from 'react';
import { MetaLine } from '../../components/meta-line';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['2xs', 'xs', 'sm', 'base'] as const;
type Size = (typeof SIZES)[number];

export function MetaLineEntry() {
  const [size, setSize] = useState<Size>('base');

  return (
    <Entry
      name="MetaLine"
      description="A faint, non-wrapping handwritten line for timestamps and secondary metadata."
    >
      <MetaLine size={size}>Updated 3 minutes ago</MetaLine>
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
