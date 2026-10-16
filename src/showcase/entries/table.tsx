import { Stamp } from '../../components/stamp';
import { Table } from '../../components/table';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

interface EntryRow {
  item: string;
  type: string;
  status: 'Done' | 'Draft' | 'Blocked';
}

const ROWS: EntryRow[] = [
  { item: 'Notebook', type: 'Sketch', status: 'Done' },
  { item: 'Watercolor Study', type: 'Painting', status: 'Draft' },
  { item: 'Ink Wash', type: 'Sketch', status: 'Blocked' },
];

const VARIANT_MAP: Record<EntryRow['status'], 'success' | 'warning' | 'error'> = {
  Done: 'success',
  Draft: 'warning',
  Blocked: 'error',
};

export function TableEntry() {
  const surface = useSurface();

  return (
    <Entry
      name="Table"
      description="Paper-styled data table with a grid, ruled, or plain surface and a textured toolbar."
    >
      <div className="w-full max-w-lg">
        <Table
          surface={surface}
          columns={[
            { key: 'item', header: 'Item', width: 7, cell: (row) => row.item },
            { key: 'type', header: 'Type', width: 4, cell: (row) => row.type },
            {
              key: 'status',
              header: 'Status',
              width: 4,
              cell: (row) => <Stamp variant={VARIANT_MAP[row.status]}>{row.status}</Stamp>,
            },
          ]}
          data={ROWS}
        />
      </div>
    </Entry>
  );
}
