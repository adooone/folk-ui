import { useState } from 'react';
import { Skeleton } from '../../components/skeleton';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['text', 'rect', 'circle'] as const;
type Variant = (typeof VARIANTS)[number];

const SIZE_BY_VARIANT: Record<Variant, { width: number; height: number }> = {
  text: { width: 200, height: 20 },
  rect: { width: 200, height: 100 },
  circle: { width: 48, height: 48 },
};

export function SkeletonEntry() {
  const [variant, setVariant] = useState<Variant>('text');
  const { width, height } = SIZE_BY_VARIANT[variant];
  const surface = useSurface();

  return (
    <Entry
      name="Skeleton"
      description="A loading placeholder in text, rectangle, and circle variants with a paper-grain pulse."
    >
      <Skeleton variant={variant} width={width} height={height} surface={surface} />
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
    </Entry>
  );
}
