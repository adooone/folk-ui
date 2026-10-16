import { useState } from 'react';
import { IconButton } from '../../components/icon-button';
import { OverflowToolbar } from '../../components/overflow-toolbar';
import { PullIcon, PushIcon, RefreshIcon } from '../../utils/icons';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const WIDTHS = ['narrow', 'wide'] as const;
type Width = (typeof WIDTHS)[number];

const WIDTH_PX: Record<Width, number> = {
  narrow: 110,
  wide: 320,
};

export function OverflowToolbarEntry() {
  const surface = useSurface();
  const [width, setWidth] = useState<Width>('narrow');

  return (
    <Entry
      name="OverflowToolbar"
      description="Measures its width and folds the lowest-priority items into a trailing Menu until the rest fit."
    >
      <div style={{ width: WIDTH_PX[width] }}>
        <OverflowToolbar
          surface={surface}
          items={[
            {
              id: 'refresh',
              priority: 3,
              label: 'Refresh',
              content: (
                <IconButton icon={<RefreshIcon />} label="Refresh" size="small" surface={surface} />
              ),
            },
            {
              id: 'push',
              priority: 2,
              label: 'Push',
              content: (
                <IconButton icon={<PushIcon />} label="Push" size="small" surface={surface} />
              ),
            },
            {
              id: 'pull',
              priority: 1,
              label: 'Pull',
              content: (
                <IconButton icon={<PullIcon />} label="Pull" size="small" surface={surface} />
              ),
            },
          ]}
        />
      </div>
      <Control label="width" options={WIDTHS} value={width} onChange={setWidth} />
    </Entry>
  );
}
