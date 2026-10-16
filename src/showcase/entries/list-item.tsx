import { useState } from 'react';
import { ListItem } from '../../components/list-item';
import { Stamp } from '../../components/stamp';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium'] as const;
type Size = (typeof SIZES)[number];

function FileIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export function ListItemEntry() {
  const [size, setSize] = useState<Size>('medium');
  const [active, setActive] = useState('plans');

  return (
    <Entry
      name="ListItem"
      description="Versatile row with a rectangular blob background, active state, and icon/action slots."
    >
      <div className="w-full max-w-sm space-y-1">
        <ListItem
          size={size}
          active={active === 'plans'}
          onClick={() => setActive('plans')}
          icon={<FileIcon />}
          action={<Stamp variant="info">3</Stamp>}
        >
          Plans
        </ListItem>
        <ListItem
          size={size}
          active={active === 'focus'}
          onClick={() => setActive('focus')}
          icon={<FileIcon />}
        >
          Focus
        </ListItem>
        <ListItem size={size} disabled icon={<FileIcon />}>
          Archived
        </ListItem>
      </div>
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
    </Entry>
  );
}
