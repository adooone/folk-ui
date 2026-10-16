import { Button } from '../../components/button';
import { Island } from '../../components/island';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

export function IslandEntry() {
  const surface = useSurface();

  return (
    <Entry
      name="Island"
      description="A floating container fixed to the viewport, for controls that should always stay visible."
    >
      <div style={{ position: 'relative', contain: 'layout', height: 120, width: '100%' }}>
        <Island surface={surface}>
          <span>Unsaved changes</span>
          <Button variant="primary" size="small">
            Save
          </Button>
        </Island>
      </div>
    </Entry>
  );
}
