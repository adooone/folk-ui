import type { ReactNode } from 'react';
import { SectionHeading } from '../../components/section-heading';
import { Text } from '../../components/text';
import type { SectionId } from '../shell/sections';

interface SectionBlockProps {
  id: SectionId;
  title: string;
  lead: string;
  children?: ReactNode;
}

export function SectionBlock({ id, title, lead, children }: SectionBlockProps) {
  return (
    <section id={id} className="scroll-mt-10">
      <SectionHeading as="h2">{title}</SectionHeading>
      <Text tone="muted" as="p" className="mt-3 max-w-md">
        {lead}
      </Text>
      <div className="mt-10 flex flex-col gap-10">{children}</div>
    </section>
  );
}
