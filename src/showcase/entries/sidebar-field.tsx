import { useState } from 'react';
import { Select } from '../../components/select';
import { SidebarField } from '../../components/sidebar-field';
import { Entry } from './entry';

const TEXTURE_OPTIONS = [
  { value: 'parchment', label: 'Parchment' },
  { value: 'kraft', label: 'Kraft' },
  { value: 'canvas', label: 'Canvas' },
];

export function SidebarFieldEntry() {
  const [texture, setTexture] = useState('parchment');

  return (
    <Entry
      name="SidebarField"
      description="Pairs a SidebarLabel with a control, stacked in a sidebar."
    >
      <SidebarField label="Texture">
        <Select options={TEXTURE_OPTIONS} value={texture} onChange={setTexture} size="small" />
      </SidebarField>
    </Entry>
  );
}
