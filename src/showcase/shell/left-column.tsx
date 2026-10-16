import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Button } from '../../components/button';
import { Drawer } from '../../components/drawer';
import { Label } from '../../components/label';
import { PageTitle } from '../../components/page-title';
import { Text } from '../../components/text';
import { colors } from '../../tokens';
import { cn } from '../../utils/style-helpers';
import type { EntryDef } from '../lib/entries';
import { DetailPanel } from './detail-panel';
import type { FontKey } from './fonts';
import styles from './left-column.module.scss';
import type { SectionId } from './sections';
import { sections } from './sections';
import type { Surface } from './surface-context';

interface LeftColumnProps {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
  surface: Surface;
  onCycleSurface: () => void;
  font: FontKey;
  onCycleFont: () => void;
  version: string;
  openEntry: EntryDef | null;
  onCloseDetail: () => void;
  columnWidth: string;
}

function NavList({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <nav className="mt-10 flex flex-col gap-1">
      {sections.map((id) => (
        <Button
          key={id}
          variant="ghost"
          size="small"
          isActive={active === id}
          fullWidth
          onClick={() => onNavigate(id)}
          className="justify-start lowercase"
        >
          <span
            aria-hidden="true"
            className="mr-2"
            style={{ color: colors.sketchInk, opacity: active === id ? 1 : 0.2 }}
          >
            ➭
          </span>
          {id}
        </Button>
      ))}
    </nav>
  );
}

function BottomBlock({
  surface,
  onCycleSurface,
  font,
  onCycleFont,
  version,
}: {
  surface: Surface;
  onCycleSurface: () => void;
  font: FontKey;
  onCycleFont: () => void;
  version: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Text tone="muted" as="p" className="max-w-xs">
        A rough, warm little UI library for React.
      </Text>
      <button
        type="button"
        onClick={onCycleSurface}
        className="self-start font-mono text-sm font-semibold lowercase tracking-wide"
        style={{ color: colors.accentGreen }}
      >
        surface: {surface}
      </button>
      <button
        type="button"
        onClick={onCycleFont}
        className="self-start font-mono text-sm font-semibold lowercase tracking-wide"
        style={{ color: colors.accentGreen }}
      >
        font: {font}
      </button>
      <Text tone="faint" face="mono" size="xs" as="p">
        v{version}
      </Text>
    </div>
  );
}

export function LeftColumn({
  active,
  onNavigate,
  surface,
  onCycleSurface,
  font,
  onCycleFont,
  version,
  openEntry,
  onCloseDetail,
  columnWidth,
}: LeftColumnProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (id: SectionId) => {
    onNavigate(id);
    setDrawerOpen(false);
  };

  return (
    <div
      className={cn(
        'flex w-full shrink-0 flex-col p-4 lg:h-full lg:w-[var(--left-column-width)] lg:p-12',
        !openEntry && styles.widthScrub,
      )}
      style={{ '--left-column-width': columnWidth } as CSSProperties}
    >
      <div className="flex items-center justify-between lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation"
          className="font-mono text-sm lowercase tracking-wide"
          style={{ color: colors.accentGreen }}
        >
          ☰ folk ui
        </button>
        <Text tone="faint" face="mono" size="xs">
          v{version}
        </Text>
      </div>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} side="left" width={280}>
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <Label style={{ color: colors.accentGreen }}>folk ui</Label>
            <NavList active={active} onNavigate={handleNavigate} />
          </div>
          <BottomBlock
            surface={surface}
            onCycleSurface={onCycleSurface}
            font={font}
            onCycleFont={onCycleFont}
            version={version}
          />
        </div>
      </Drawer>

      <div className="relative flex-1">
        {openEntry ? (
          <DetailPanel
            id={openEntry.id}
            name={openEntry.name}
            props={openEntry.props}
            onClose={onCloseDetail}
          />
        ) : (
          <div className="hidden lg:block">
            <Label style={{ color: colors.accentGreen }}>folk ui</Label>
            <PageTitle className="mt-3">
              Rough.
              <br />
              Warm.
              <br />
              Folk.
            </PageTitle>
            <NavList active={active} onNavigate={onNavigate} />
          </div>
        )}
      </div>

      {!openEntry && (
        <div className="hidden lg:block">
          <BottomBlock
            surface={surface}
            onCycleSurface={onCycleSurface}
            font={font}
            onCycleFont={onCycleFont}
            version={version}
          />
        </div>
      )}
    </div>
  );
}
