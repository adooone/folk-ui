import { useState } from 'react';
import { Pagination } from '../../components/pagination';
import { useSurface } from '../shell/surface-context';
import { Control } from './control';
import { Entry } from './entry';

const SIBLING_COUNTS = ['0', '1', '2'] as const;
type SiblingCount = (typeof SIBLING_COUNTS)[number];

export function PaginationEntry() {
  const surface = useSurface();
  const [siblingCount, setSiblingCount] = useState<SiblingCount>('1');
  const [page, setPage] = useState(4);

  return (
    <Entry
      name="Pagination"
      description="Prev/next controls with a sibling-aware page range and ellipsis for long sequences."
    >
      <Pagination
        page={page}
        totalPages={12}
        onPageChange={setPage}
        siblingCount={Number(siblingCount)}
        surface={surface}
      />
      <Control
        label="siblingCount"
        options={SIBLING_COUNTS}
        value={siblingCount}
        onChange={setSiblingCount}
      />
    </Entry>
  );
}
