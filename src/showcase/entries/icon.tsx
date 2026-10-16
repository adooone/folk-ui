import { useState } from 'react';
import { Icon } from '../../components/icon';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

const WOBBLES = ['0', '0.5', '1'] as const;
type Wobble = (typeof WOBBLES)[number];

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconEntry() {
  const [size, setSize] = useState<Size>('medium');
  const [wobble, setWobble] = useState<Wobble>('0.5');

  return (
    <Entry name="Icon" description="Renders any icon content over a wobbly blob background.">
      <Icon icon={<StarIcon />} size={size} wobble={Number(wobble)} />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
      <Control label="wobble" options={WOBBLES} value={wobble} onChange={setWobble} />
    </Entry>
  );
}
