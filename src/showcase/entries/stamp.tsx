import { useState } from 'react';
import { Stamp } from '../../components/stamp';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['neutral', 'info', 'success', 'warning', 'error'] as const;
type Variant = (typeof VARIANTS)[number];

export function StampEntry() {
  const [variant, setVariant] = useState<Variant>('success');

  return (
    <Entry name="Stamp" description="A small status chip stamped onto the page.">
      <Stamp variant={variant}>Done</Stamp>
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
    </Entry>
  );
}
