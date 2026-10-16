import { useState } from 'react';
import { IconButton } from '../../components/icon-button';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['default', 'ghost', 'danger'] as const;
type Variant = (typeof VARIANTS)[number];

function HeartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function IconButtonEntry() {
  const [variant, setVariant] = useState<Variant>('default');

  return (
    <Entry name="IconButton" description="An icon-only button sharing Button's blob background.">
      <IconButton icon={<HeartIcon />} label="Like" variant={variant} />
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
    </Entry>
  );
}
