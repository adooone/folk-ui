import { useState } from 'react';
import { Avatar } from '../../components/avatar';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIZES = ['small', 'medium', 'large', 'xlarge'] as const;
type Size = (typeof SIZES)[number];

const SHAPES = ['circle', 'square'] as const;
type Shape = (typeof SHAPES)[number];

export function AvatarEntry() {
  const [size, setSize] = useState<Size>('medium');
  const [shape, setShape] = useState<Shape>('circle');
  const surface = useSurface();

  return (
    <Entry
      name="Avatar"
      description="Circular or organic-square identity marker, showing initials over a deterministic tint when no image is given."
    >
      <Avatar name="Ada Lovelace" size={size} shape={shape} surface={surface} />
      <Avatar
        src="https://i.pravatar.cc/80?img=12"
        alt="Sample user photo"
        size={size}
        shape={shape}
        surface={surface}
      />
      <Control label="size" options={SIZES} value={size} onChange={setSize} />
      <Control label="shape" options={SHAPES} value={shape} onChange={setShape} />
    </Entry>
  );
}
