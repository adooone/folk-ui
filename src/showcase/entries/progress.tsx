import { useState } from 'react';
import { Progress } from '../../components/progress';
import { Control } from './control';
import { Entry } from './entry';

const VALUES = ['25', '65', '100'] as const;
type ValueOption = (typeof VALUES)[number];

export function ProgressEntry() {
  const [value, setValue] = useState<ValueOption>('65');
  const [sketch, setSketch] = useState(false);

  return (
    <Entry name="Progress" description="A minimal progress bar with configurable color and height.">
      <div className="w-full max-w-sm">
        <Progress value={Number(value)} height={6} sketch={sketch} />
      </div>
      <Control label="value" options={VALUES} value={value} onChange={setValue} />
      <Control
        label="sketch"
        options={['off', 'on'] as const}
        value={sketch ? 'on' : 'off'}
        onChange={(next) => setSketch(next === 'on')}
      />
    </Entry>
  );
}
