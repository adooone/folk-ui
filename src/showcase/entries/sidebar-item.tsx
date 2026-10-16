import { useState } from 'react';
import { SidebarItem } from '../../components/sidebar-item';
import { Control } from './control';
import { Entry } from './entry';

const ACTIVE_OPTIONS = ['false', 'true'] as const;
type ActiveOption = (typeof ACTIVE_OPTIONS)[number];

export function SidebarItemEntry() {
  const [active, setActive] = useState<ActiveOption>('false');

  return (
    <Entry name="SidebarItem" description="A clickable row inside a sidebar list.">
      <SidebarItem active={active === 'true'} count={12}>
        Inbox
      </SidebarItem>
      <SidebarItem>Drafts</SidebarItem>
      <Control label="active" options={ACTIVE_OPTIONS} value={active} onChange={setActive} />
    </Entry>
  );
}
