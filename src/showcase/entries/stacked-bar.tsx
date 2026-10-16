import { useState } from 'react';
import { StackedBar } from '../../components/stacked-bar';
import { Control } from './control';
import { Entry } from './entry';

const SEGMENTS = [
  { label: 'Passing', value: 42, color: '#8FB996' },
  { label: 'Failing', value: 6, color: '#C98B8B' },
  { label: 'Skipped', value: 3, color: '#A8A399' },
];

const WIDTHS = ['160', '240', '320'] as const;
type WidthOption = (typeof WIDTHS)[number];

export function StackedBarEntry() {
  const [width, setWidth] = useState<WidthOption>('240');

  return (
    <Entry
      name="StackedBar"
      description="A single bar split into colored segments proportional to their value."
    >
      <StackedBar segments={SEGMENTS} width={Number(width)} />
      <Control label="width" options={WIDTHS} value={width} onChange={setWidth} />
    </Entry>
  );
}
