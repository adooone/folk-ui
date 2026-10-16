import { useState } from 'react';
import { MetaLine } from '../../components/meta-line';
import { Row } from '../../components/row';
import { Stamp } from '../../components/stamp';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['none', 'card', 'nestedCard'] as const;
type Surface = (typeof SURFACES)[number];

export function RowEntry() {
  const [surface, setSurface] = useState<Surface>('card');

  return (
    <Entry name="Row" description="Grid-based row for ruled lists and card surfaces.">
      <div className="w-full max-w-md space-y-2">
        <Row
          surface={surface}
          id="#42"
          title="Watercolor Study"
          meta={<MetaLine>updated 2 hours ago</MetaLine>}
          trailing={<Stamp variant="success">Done</Stamp>}
        />
        <Row
          surface={surface}
          id="#17"
          title="Ink Wash Sketch"
          meta={<MetaLine>updated yesterday</MetaLine>}
          trailing={<Stamp variant="warning">Review</Stamp>}
        />
      </div>
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
