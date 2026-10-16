import { Children, isValidElement } from 'react';
import type { ReactNode } from 'react';
import { Text } from '../../components/text';
import { accentInk } from '../lib/accent';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';

interface EntryProps {
  name: string;
  description: string;
  children: ReactNode;
}

// func-ui's entry anatomy: accent name, one sentence, the demo on a stable
// row, then the Control stack underneath. Controls are passed as children
// alongside the demo and pulled out here, so entry files stay flat.
export function Entry({ name, description, children }: EntryProps) {
  const surface = useSurface();
  const items = Children.toArray(children);
  const controls = items.filter((child) => isValidElement(child) && child.type === Control);
  const demo = items.filter((child) => !(isValidElement(child) && child.type === Control));

  return (
    <div>
      <Text
        as="h3"
        face="mono"
        size="sm"
        weight="semibold"
        className="uppercase tracking-wide"
        style={{ color: accentInk(surface) }}
      >
        {name}
      </Text>
      <Text as="p" tone="secondary" className="mt-2 max-w-md">
        {description}
      </Text>
      <div className="mt-5 flex min-h-[72px] flex-wrap items-center gap-4">{demo}</div>
      {controls.length > 0 && <div className="mt-4 flex flex-col gap-2">{controls}</div>}
    </div>
  );
}
