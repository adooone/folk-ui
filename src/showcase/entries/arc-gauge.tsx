import { useState } from 'react';
import { ArcGauge } from '../../components/arc-gauge';
import { Control } from './control';
import { Entry } from './entry';

const VALUES = ['18', '72', '94'] as const;
type ValueOption = (typeof VALUES)[number];

export function ArcGaugeEntry() {
  const [value, setValue] = useState<ValueOption>('72');

  return (
    <Entry name="ArcGauge" description="A 280° rough track with the value arc drawn over it.">
      <ArcGauge value={Number(value)} max={100} label="Capacity" floor={0.2} />
      <Control label="value" options={VALUES} value={value} onChange={setValue} />
    </Entry>
  );
}
