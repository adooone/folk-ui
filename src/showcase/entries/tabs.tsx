import { useState } from 'react';
import { Tabs } from '../../components/tabs';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

const ITEMS = [
  { id: 'design', label: 'Design', children: <p>Design tools and visual language.</p> },
  { id: 'code', label: 'Code', children: <p>Implementation details and architecture.</p> },
  { id: 'preview', label: 'Preview', children: <p>Live preview of the current configuration.</p> },
];

export function TabsEntry() {
  const [surface, setSurface] = useState<Surface>('paper');
  const [activeKey, setActiveKey] = useState('design');

  return (
    <Entry name="Tabs" description="Button-based tab controls with a Card content area.">
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Tabs items={ITEMS} activeKey={activeKey} onSelect={setActiveKey} surface={surface} />
      </div>
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
