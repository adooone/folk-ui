import type { ReactNode } from 'react';
import { Label } from '../../components/label';
import { Text } from '../../components/text';
import { colors } from '../../tokens';

interface EntryProps {
  name: string;
  description: string;
  children: ReactNode;
}

export function Entry({ name, description, children }: EntryProps) {
  return (
    <div className="flex flex-col gap-3">
      <Label style={{ color: colors.accentGreen }}>{name}</Label>
      <Text as="p">{description}</Text>
      <div className="flex min-h-32 flex-wrap items-center gap-4">{children}</div>
    </div>
  );
}
