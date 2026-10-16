import { useState } from 'react';
import { Card } from '../../components/card';
import { Control } from './control';
import { Entry } from './entry';

const VARIANTS = ['default', 'elevated'] as const;
type Variant = (typeof VARIANTS)[number];

const TEXTURES = ['white', 'paper', 'parchment', 'kraft', 'speckle', 'canvas'] as const;
type Texture = (typeof TEXTURES)[number];

export function CardEntry() {
  const [variant, setVariant] = useState<Variant>('default');
  const [texture, setTexture] = useState<Texture>('parchment');

  return (
    <Entry
      name="Card"
      description="Paper surface container with a pencil border and configurable elevation."
    >
      <div className="w-full max-w-xs">
        <Card variant={variant} texture={texture}>
          <h4>Project Notes</h4>
          <p>Same grain, lifted off the page.</p>
        </Card>
      </div>
      <Control label="variant" options={VARIANTS} value={variant} onChange={setVariant} />
      <Control label="texture" options={TEXTURES} value={texture} onChange={setTexture} />
    </Entry>
  );
}
