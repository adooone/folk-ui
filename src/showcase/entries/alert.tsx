import { useState } from 'react';
import { Alert } from '../../components/alert';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['info', 'success', 'warning', 'error'] as const;
type Variant = (typeof VARIANTS)[number];

export function AlertEntry() {
  const [variant, setVariant] = useState<Variant>('info');

  return (
    <Entry
      name="Alert"
      description="A compact single-line message with an icon and a tinted accent border."
    >
      <Alert variant={variant}>Use paper textures sparingly for maximum impact.</Alert>
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
    </Entry>
  );
}
