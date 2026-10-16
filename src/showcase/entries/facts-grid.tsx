import { useState } from 'react';
import { FactsGrid } from '../../components/facts-grid';
import { Control } from './control';
import { Entry } from './entry';

const LAYOUTS = ['grid', 'inline'] as const;
type Layout = (typeof LAYOUTS)[number];

const ALIGNS = ['start', 'end'] as const;
type Align = (typeof ALIGNS)[number];

export function FactsGridEntry() {
  const [layout, setLayout] = useState<Layout>('grid');
  const [align, setAlign] = useState<Align>('start');

  return (
    <Entry
      name="FactsGrid"
      description="Label-over-value facts, laid out as an auto-fit grid or a flex-wrap inline row."
    >
      <FactsGrid
        layout={layout}
        align={align}
        items={[
          { label: 'Date', value: 'Jun 2' },
          { label: 'Passes', value: '3/3' },
          { label: 'Cost', value: '$0.12' },
        ]}
      />
      <Control label="layout" options={LAYOUTS} value={layout} onChange={setLayout} />
      <Control label="align" options={ALIGNS} value={align} onChange={setAlign} />
    </Entry>
  );
}
