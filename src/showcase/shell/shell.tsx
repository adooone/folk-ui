import { useEffect, useRef, useState } from 'react';
import packageJson from '../../../package.json';
import { ChalkboardSection } from '../entries/chalkboard-section';
import { ComponentsSection } from '../entries/components-section';
import { entries } from '../lib/entries';
import { Desk } from './desk';
import { findScrollContainer } from './find-scroll-container';
import { fonts } from './fonts';
import { LeftColumn } from './left-column';
import { SectionStub } from './section-stub';
import type { SectionId } from './sections';
import { sections } from './sections';
import { Sheet } from './sheet';
import type { Surface } from './surface-context';
import { SurfaceProvider } from './surface-context';

export function Shell() {
  const [active, setActive] = useState<SectionId>('welcome');
  const [surface, setSurface] = useState<Surface>('paper');
  const [fontIndex, setFontIndex] = useState(0);
  const [scrollRoot, setScrollRoot] = useState<HTMLElement | null>(null);
  const [openDetailId, setOpenDetailId] = useState<string | null>(null);
  const sheetWrapperRef = useRef<HTMLDivElement>(null);
  const openEntry = entries.find((entry) => entry.id === openDetailId) ?? null;

  const font = fonts[fontIndex];

  useEffect(() => {
    document.documentElement.style.setProperty('--paper-button-font', font.family);
  }, [font.family]);

  useEffect(() => {
    const wrapper = sheetWrapperRef.current;
    if (!wrapper) return;
    setScrollRoot(findScrollContainer(wrapper));
  }, []);

  useEffect(() => {
    if (!scrollRoot) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { root: scrollRoot, rootMargin: '-35% 0px -60% 0px' },
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [scrollRoot]);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Desk>
      <LeftColumn
        active={active}
        onNavigate={scrollTo}
        surface={surface}
        onCycleSurface={() => setSurface((s) => (s === 'paper' ? 'chalkboard' : 'paper'))}
        font={font.key}
        onCycleFont={() => setFontIndex((i) => (i + 1) % fonts.length)}
        version={packageJson.version}
        openEntry={openEntry}
        onCloseDetail={() => setOpenDetailId(null)}
      />
      <Sheet ref={sheetWrapperRef} surface={surface}>
        <SurfaceProvider value={surface}>
          {sections.map((id) => {
            if (id === 'components') {
              return <ComponentsSection key={id} onOpenDetail={setOpenDetailId} />;
            }
            if (id === 'chalkboard') {
              return <ChalkboardSection key={id} onOpenDetail={setOpenDetailId} />;
            }
            return <SectionStub key={id} id={id} />;
          })}
        </SurfaceProvider>
      </Sheet>
    </Desk>
  );
}
