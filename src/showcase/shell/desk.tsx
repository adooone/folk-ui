import type { ReactNode } from 'react';
import { colors, withAlpha } from '../../tokens';
import { getSurfaceStyles } from '../../utils/textures';

interface DeskProps {
  children: ReactNode;
}

export function Desk({ children }: DeskProps) {
  const deskStyles = getSurfaceStyles({ texture: 'kraft', shade: true });

  return (
    <div className="relative h-screen overflow-hidden" style={deskStyles}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -left-24 top-[12%] h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${withAlpha(colors.accentBlue, 0.18)} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute left-[8%] bottom-[14%] h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${withAlpha(colors.accentGreen, 0.18)} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute -left-16 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${withAlpha(colors.accentAmber, 0.14)} 0%, transparent 70%)`,
          }}
        />
      </div>
      <div className="relative z-10 flex h-full">{children}</div>
    </div>
  );
}
