import { useState } from 'react';
import { CommandLine } from '../../components/command-line';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const BOXED_OPTIONS = ['false', 'true'] as const;
type BoxedOption = (typeof BOXED_OPTIONS)[number];

export function CommandLineEntry() {
  const [boxed, setBoxed] = useState<BoxedOption>('false');
  const surface = useSurface();

  return (
    <Entry
      name="CommandLine"
      description="A copyable shell command, shown bare or boxed with a prompt glyph."
    >
      <CommandLine command="pnpm install folk-ui" boxed={boxed === 'true'} surface={surface} />
      <Control label="boxed" options={BOXED_OPTIONS} value={boxed} onChange={setBoxed} />
    </Entry>
  );
}
