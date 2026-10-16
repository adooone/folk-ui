import { useState } from 'react';
import { Switch } from '../../components/switch';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function SwitchEntry() {
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState<Size>('medium');
  const surface = useSurface();

  return (
    <Entry
      name="Switch"
      description="A toggle control with a sliding ink thumb and a watercolor track when on."
    >
      <Switch
        label="Notifications"
        size={size}
        surface={surface}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
