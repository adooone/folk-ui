import { useState } from 'react';
import { Tabs } from '../../components/tabs';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

const ITEMS = [
  { id: 'design', label: 'Design', children: <p>Design tools and visual language.</p> },
  { id: 'code', label: 'Code', children: <p>Implementation details and architecture.</p> },
  { id: 'preview', label: 'Preview', children: <p>Live preview of the current configuration.</p> },
];

export function TabsEntry() {
  const surface = useSurface();
  const [activeKey, setActiveKey] = useState('design');

  return (
    <Entry name="Tabs" description="Button-based tab controls with a Card content area.">
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Tabs items={ITEMS} activeKey={activeKey} onSelect={setActiveKey} surface={surface} />
      </div>
    </Entry>
  );
}
