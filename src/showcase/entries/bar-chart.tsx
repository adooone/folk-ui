import { useState } from 'react';
import { BarChart } from '../../components/bar-chart';
import { Control } from './control';
import { Entry } from './entry';

const BARS = [
  { label: 'Mon', value: 12, hatchedValue: 2 },
  { label: 'Tue', value: 18 },
  { label: 'Wed', value: 9, hatchedValue: 4 },
  { label: 'Thu', value: 15 },
  { label: 'Fri', value: 6, hatchedValue: 1 },
];

const HEIGHTS = ['48', '64', '96'] as const;
type HeightOption = (typeof HEIGHTS)[number];

export function BarChartEntry() {
  const [height, setHeight] = useState<HeightOption>('64');

  return (
    <Entry
      name="BarChart"
      description="Solid bars with a hachured portion for a failed or excluded part of the value."
    >
      <div className="w-full max-w-sm">
        <BarChart bars={BARS} height={Number(height)} />
      </div>
      <Control label="height" options={HEIGHTS} value={height} onChange={setHeight} />
    </Entry>
  );
}
