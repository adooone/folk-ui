import { useState } from 'react';
import { Spinner } from '../../components/spinner';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large'] as const;
type Size = (typeof SIZES)[number];

export function SpinnerEntry() {
  const [size, setSize] = useState<Size>('medium');
  const surface = useSurface();

  return (
    <Entry
      name="Spinner"
      description="An indeterminate loading indicator — a rotating ink arc that respects reduced-motion."
    >
      <Spinner size={size} surface={surface} />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
