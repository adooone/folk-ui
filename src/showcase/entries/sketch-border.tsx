import { useState } from 'react';
import { SketchBorder } from '../../components/sketch-border';
import { Control } from './control';
import { Entry } from './entry';

const SHAPES = ['rect', 'circle'] as const;
type Shape = (typeof SHAPES)[number];

export function SketchBorderEntry() {
  const [shape, setShape] = useState<Shape>('rect');

  return (
    <Entry
      name="SketchBorder"
      description="Hand-drawn SVG outline overlaid on a positioned host, like Card's and Page's own border."
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <SketchBorder shape={shape} />
        <span>Hello</span>
      </div>
      <Control label="shape" options={SHAPES} value={shape} onChange={setShape} />
    </Entry>
  );
}
