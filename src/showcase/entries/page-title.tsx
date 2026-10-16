import { PageTitle } from '../../components/page-title';
import { Entry } from './entry';

export function PageTitleEntry() {
  return (
    <Entry
      name="PageTitle"
      description="The large display heading reserved for a page's own title."
    >
      <PageTitle>Project overview</PageTitle>
    </Entry>
  );
}
