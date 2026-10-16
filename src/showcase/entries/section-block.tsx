import type { CSSProperties, ReactNode } from 'react';
import { Text } from '../../components/text';
import type { SectionId } from '../shell/sections';

interface SectionBlockProps {
  id: SectionId;
  title: string;
  lead: string;
  children?: ReactNode;
}

const COMPONENTS_VIEW_TIMELINE_STYLE = {
  viewTimelineName: '--components-progress',
  viewTimelineAxis: 'block',
} as unknown as CSSProperties;

export function SectionBlock({ id, title, lead, children }: SectionBlockProps) {
  const style = id === 'components' ? COMPONENTS_VIEW_TIMELINE_STYLE : undefined;

  return (
    <section id={id} className="scroll-mt-10" style={style}>
      <Text as="h2" face="display" weight="bold" className="text-3xl capitalize leading-tight">
        {title}
      </Text>
      <Text tone="secondary" as="p" className="mt-3 max-w-lg">
        {lead}
      </Text>
      <div className="mt-8 flex flex-col gap-12">{children}</div>
    </section>
  );
}
