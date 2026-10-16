import { useState } from 'react';
import { Swatch } from '../../components/swatch';
import { Control } from './control';
import { Entry } from './entry';

const COLORS = ['#D4A373', '#A8C4A0', '#E8C1C5', '#9BB8D3'];

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

export function SwatchEntry() {
  const [active, setActive] = useState(COLORS[0]);
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="Swatch"
      description="A small clickable color or texture chip used to pick a surface tone."
    >
      {COLORS.map((color) => (
        <Swatch
          key={color}
          surface={surface}
          active={active === color}
          style={{ backgroundColor: color }}
          onClick={() => setActive(color)}
          aria-label={color}
        />
      ))}
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
