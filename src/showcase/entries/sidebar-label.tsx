import { SidebarLabel } from '../../components/sidebar-label';
import { Entry } from './entry';

export function SidebarLabelEntry() {
  return (
    <Entry name="SidebarLabel" description="A small heading used above a sidebar section.">
      <SidebarLabel>Appearance</SidebarLabel>
    </Entry>
  );
}
