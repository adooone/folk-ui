import { SectionHeading } from '../../components/section-heading';
import { Text } from '../../components/text';
import type { SectionId } from './sections';

interface SectionStubProps {
  id: SectionId;
}

export function SectionStub({ id }: SectionStubProps) {
  return (
    <section id={id} className="scroll-mt-10 flex min-h-[70vh] flex-col justify-center">
      <SectionHeading as="h2" className="capitalize">
        {id}
      </SectionHeading>
      <Text tone="muted" as="p" className="mt-3 max-w-md">
        This section is a placeholder — its content lands in a later phase.
      </Text>
    </section>
  );
}
