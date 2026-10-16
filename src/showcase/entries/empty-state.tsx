import { Button } from '../../components/button';
import { EmptyState } from '../../components/empty-state';
import { Entry } from './entry';

export function EmptyStateEntry() {
  return (
    <Entry
      name="EmptyState"
      description="A gentle placeholder for a list or panel with nothing in it yet."
    >
      <div className="w-full max-w-sm">
        <EmptyState
          message="No notes yet."
          action={<Button variant="ghost">Create a note</Button>}
        />
      </div>
    </Entry>
  );
}
