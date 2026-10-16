import { colors } from '../../tokens';
import { getSurfaceStyles } from '../../utils/textures';
import { entries } from '../lib/entries';
import { SurfaceProvider } from '../shell/surface-context';
import { SectionBlock } from './section-block';

const chalkboardEntries = entries.filter((entry) =>
  entry.props.some((prop) => prop.name === 'surface' && prop.type.includes('chalkboard')),
);

interface ChalkboardSectionProps {
  onOpenDetail: (id: string) => void;
}

export function ChalkboardSection({ onOpenDetail }: ChalkboardSectionProps) {
  return (
    <SectionBlock
      id="chalkboard"
      title="chalkboard"
      lead="A second surface family — the same components, lit from a dark board instead of the page."
    >
      <SurfaceProvider value="chalkboard">
        <div
          className="flex flex-col gap-10 rounded-2xl p-10"
          style={{
            ...getSurfaceStyles({ texture: 'chalkboard', shade: true }),
            color: colors.chalkboardText,
          }}
        >
          {chalkboardEntries.map(({ id, Entry: EntryComponent }) => (
            <div key={id} className="relative">
              <EntryComponent />
              <button
                type="button"
                onClick={() => onOpenDetail(id)}
                className="absolute right-0 top-0 font-mono text-xs lowercase tracking-wide"
                style={{ color: colors.chalkboardAccent }}
              >
                details →
              </button>
            </div>
          ))}
        </div>
      </SurfaceProvider>
    </SectionBlock>
  );
}
