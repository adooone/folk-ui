import { useState } from 'react';
import { RowSkeleton } from '../../components/row';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['none', 'card', 'nestedCard'] as const;
type Surface = (typeof SURFACES)[number];

export function RowSkeletonEntry() {
  const [surface, setSurface] = useState<Surface>('card');
  const [stamps, setStamps] = useState(0);

  return (
    <Entry
      name="RowSkeleton"
      description="Ghost placeholder row sharing Row's texture, SketchBorder, and shadow so a loading row matches the row that replaces it."
    >
      <div className="w-full max-w-md space-y-2">
        <RowSkeleton surface={surface} stamps={stamps} />
        <RowSkeleton surface={surface} stamps={stamps} />
      </div>
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
      <Control
        label="stamps"
        options={['0', '1', '2'] as const}
        value={String(stamps) as '0' | '1' | '2'}
        onChange={(value) => setStamps(Number(value))}
      />
    </Entry>
  );
}
