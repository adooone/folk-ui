import { useState } from 'react';
import { Divider } from '../../components/divider';
import { Control } from './control';
import { Entry } from './entry';

const ORIENTATIONS = ['horizontal', 'vertical'] as const;
type Orientation = (typeof ORIENTATIONS)[number];

export function DividerEntry() {
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [sketch, setSketch] = useState(false);

  return (
    <Entry
      name="Divider"
      description="Separator drawn as a single pencil stroke, with an optional handwritten label."
    >
      {orientation === 'vertical' ? (
        <div className="flex h-10 items-center gap-4">
          <span>Left</span>
          <Divider orientation="vertical" sketch={sketch} />
          <span>Right</span>
        </div>
      ) : (
        <div className="w-full max-w-sm">
          <Divider label="or" sketch={sketch} />
        </div>
      )}
      <Control
        label="orientation"
        options={ORIENTATIONS}
        value={orientation}
        onChange={setOrientation}
      />
      <Control
        label="sketch"
        options={['false', 'true'] as const}
        value={sketch ? 'true' : 'false'}
        onChange={(value) => setSketch(value === 'true')}
      />
    </Entry>
  );
}
