import { SidebarCard } from '../../components/sidebar-card';
import { Text } from '../../components/text';
import { Entry } from './entry';

export function SidebarCardEntry() {
  return (
    <Entry name="SidebarCard" description="A parchment-textured card sized for a sidebar panel.">
      <SidebarCard>
        <Text as="p" size="sm">
          Pinned notes live here, tucked into the sidebar.
        </Text>
      </SidebarCard>
    </Entry>
  );
}
