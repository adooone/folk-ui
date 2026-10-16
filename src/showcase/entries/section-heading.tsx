import { SectionHeading } from '../../components/section-heading';
import { Entry } from './entry';

export function SectionHeadingEntry() {
  return (
    <Entry
      name="SectionHeading"
      description="A dimmed display-face heading used to introduce a block of content."
    >
      <SectionHeading>Recent activity</SectionHeading>
    </Entry>
  );
}
