import { useState } from 'react';
import { IconButton } from '../../components/icon-button';
import { Menu } from '../../components/menu';
import { MoreIcon } from '../../utils/icons';
import { Control } from './control';
import { Entry } from './entry';

const ALIGNS = ['start', 'end'] as const;
type Align = (typeof ALIGNS)[number];

export function MenuEntry() {
  const [align, setAlign] = useState<Align>('start');

  return (
    <Entry
      name="Menu"
      description="An anchored action menu with roving keyboard focus, separators, and a danger tone for destructive items."
    >
      <Menu
        align={align}
        trigger={<IconButton icon={<MoreIcon />} label="More options" variant="ghost" />}
        items={[
          { id: 'edit', label: 'Edit' },
          { id: 'duplicate', label: 'Duplicate' },
          { id: 'sep', type: 'separator' },
          { id: 'delete', label: 'Delete', danger: true },
        ]}
      />
      <Control label="align" options={ALIGNS} value={align} onChange={setAlign} />
    </Entry>
  );
}
