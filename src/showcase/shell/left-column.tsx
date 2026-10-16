import { Button } from '../../components/button';
import { Label } from '../../components/label';
import { PageTitle } from '../../components/page-title';
import { Text } from '../../components/text';
import { colors } from '../../tokens';
import type { EntryDef } from '../lib/entries';
import { DetailPanel } from './detail-panel';
import type { FontKey } from './fonts';
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
}: LeftColumnProps) {
  const width = openEntry ? 'max(420px, 40%)' : '50%';

  return (
    <div className="flex h-full shrink-0 flex-col p-12" style={{ width }}>
      <div className="relative flex-1">
        {openEntry ? (
          <DetailPanel
            id={openEntry.id}
            name={openEntry.name}
            props={openEntry.props}
            onClose={onCloseDetail}
          />
        ) : (
          <div>
            <Label style={{ color: colors.accentGreen }}>folk ui</Label>
            <PageTitle className="mt-3">
              Rough.
              <br />
              Warm.
              <br />
              Folk.
            </PageTitle>

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
          </div>
        )}
      </div>

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
    </div>
  );
}
