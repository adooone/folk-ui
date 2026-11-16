import { getSurfaceStyles } from '../../utils/textures';
import { entries } from '../lib/entries';
import { PaperDemoProvider, SurfaceProvider } from '../shell/surface-context';
import { SectionBlock } from './section-block';

const BOARDS = [
  { key: 'green', chalk: undefined },
  { key: 'grey', chalk: 'grey' },
] as const;

export function BoardsSection() {
  return (
    <SectionBlock
      id="boards"
      title="boards"
      lead="Every chalkboard component on the green board and on the grey one, side by side."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {BOARDS.map(({ key, chalk }) => (
          <div
            key={key}
            data-chalk={chalk}
            className="flex flex-col gap-10 rounded-lg p-6"
            style={{ ...getSurfaceStyles('chalkboard'), color: 'var(--pui-chalk-text)' }}
          >
            <SurfaceProvider value="chalkboard">
              {entries
                .filter((entry) => !entry.paperOnly)
                .map(({ id, Entry }) => (
                  <PaperDemoProvider key={id} value={false}>
                    <Entry />
                  </PaperDemoProvider>
                ))}
            </SurfaceProvider>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
