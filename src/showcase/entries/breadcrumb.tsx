import { Breadcrumb } from '../../components/breadcrumb';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

const ITEMS = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'library', label: 'Library', href: '#' },
  { id: 'components', label: 'Components', href: '#' },
  { id: 'breadcrumb', label: 'Breadcrumb' },
];

export function BreadcrumbEntry() {
  const surface = useSurface();

  return (
    <Entry
      name="Breadcrumb"
      description="A navigation trail with a chevron separator; the last crumb marks the current page."
    >
      <Breadcrumb items={ITEMS} surface={surface} />
    </Entry>
  );
}
