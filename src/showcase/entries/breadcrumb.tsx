import { useState } from 'react';
import { Breadcrumb } from '../../components/breadcrumb';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

const ITEMS = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'library', label: 'Library', href: '#' },
  { id: 'components', label: 'Components', href: '#' },
  { id: 'breadcrumb', label: 'Breadcrumb' },
];

export function BreadcrumbEntry() {
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="Breadcrumb"
      description="A navigation trail with a chevron separator; the last crumb marks the current page."
    >
      <Breadcrumb items={ITEMS} surface={surface} />
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
