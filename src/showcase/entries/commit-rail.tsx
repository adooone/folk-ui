import { useState } from 'react';
import { CommitRail } from '../../components/commit-rail';
import { Control } from './control';
import { Entry } from './entry';

const COMMITS = [
  { label: 'Add ArcGauge', pushed: true },
  { label: 'Add BarChart and StackedBar', pushed: true },
  { label: 'Add CommitRail', pushed: false },
];

const LAST_PUSHED = ['true', 'false'] as const;
type LastPushedOption = (typeof LAST_PUSHED)[number];

export function CommitRailEntry() {
  const [lastPushed, setLastPushed] = useState<LastPushedOption>('false');

  const commits = COMMITS.map((commit, i) =>
    i === COMMITS.length - 1 ? { ...commit, pushed: lastPushed === 'true' } : commit,
  );

  return (
    <Entry name="CommitRail" description="A stroke plus a dot per row, dashed amber until pushed.">
      <div className="w-full max-w-xs">
        {commits.map((commit, i) => (
          <div key={commit.label} className="flex h-12 items-stretch gap-3">
            <CommitRail
              pushed={commit.pushed}
              isFirst={i === 0}
              isLast={i === commits.length - 1}
            />
            <span className="self-center font-handwritten text-sm">{commit.label}</span>
          </div>
        ))}
      </div>
      <Control
        label="last pushed"
        options={LAST_PUSHED}
        value={lastPushed}
        onChange={setLastPushed}
      />
    </Entry>
  );
}
