import { useState } from 'react';
import { Button } from '../../components/button';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['primary', 'secondary', 'ghost', 'danger', 'link'] as const;
type Variant = (typeof VARIANTS)[number];

export function ButtonEntry() {
  const [variant, setVariant] = useState<Variant>('primary');

  return (
    <Entry name="Button" description="A blob-backed button with five variants and a hover wobble.">
      <Button variant={variant}>Save changes</Button>
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
    </Entry>
  );
}
