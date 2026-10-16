import { useEffect, useRef, useState } from 'react';
import packageJson from '../../../package.json';
import { ChalkboardSection } from '../entries/chalkboard-section';
import { ComponentsSection } from '../entries/components-section';
import { DocsSection } from '../entries/docs-section';
import { TokensSection } from '../entries/tokens-section';
import { WelcomeSection } from '../entries/welcome-section';
import { entries } from '../lib/entries';
import { Desk } from './desk';
import { findScrollContainer } from './find-scroll-container';
import { fonts } from './fonts';
import { LeftColumn } from './left-column';
import type { SectionId } from './sections';
import { sections } from './sections';
import { Sheet } from './sheet';
import type { Surface } from './surface-context';
import { SurfaceProvider } from './surface-context';

function isSectionId(value: string): value is SectionId {
  return (sections as readonly string[]).includes(value);
}

export function Shell() {
  const [active, setActive] = useState<SectionId>(() => {
    const hash = window.location.hash.slice(1);
    return isSectionId(hash) ? hash : 'welcome';
  });
  const [surface, setSurface] = useState<Surface>('paper');
  const [fontIndex, setFontIndex] = useState(0);
  const [scrollRoot, setScrollRoot] = useState<HTMLElement | null>(null);
  const [openDetailId, setOpenDetailId] = useState<string | null>(null);
  const [scrubProgress, setScrubProgress] = useState(0);
  const [supportsScrollTimeline] = useState(
    () => typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()'),
  );
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
    const hash = window.location.hash.slice(1);
    if (isSectionId(hash) && hash !== 'welcome') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [scrollRoot]);

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

  useEffect(() => {
    const newHash = `#${active}`;
    if (window.location.hash !== newHash) window.history.replaceState(null, '', newHash);
  }, [active]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (isSectionId(hash)) scrollTo(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (supportsScrollTimeline || !scrollRoot) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const target = document.getElementById('components');
    if (!target) return;
    const observer = new IntersectionObserver(
      (observerEntries) => {
        const entry = observerEntries[0];
        if (!entry?.rootBounds) return;
        const progress = Math.min(
          1,
          Math.max(
            0,
            (entry.rootBounds.height - (entry.boundingClientRect.top - entry.rootBounds.top)) /
              entry.rootBounds.height,
          ),
        );
        setScrubProgress(progress);
      },
      { root: scrollRoot, threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [scrollRoot, supportsScrollTimeline]);

  const columnWidth = openEntry ? 'max(420px, 40%)' : `${50 - 17 * scrubProgress}%`;

  function scrollTo(id: SectionId) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
        columnWidth={columnWidth}
      />
      <Sheet ref={sheetWrapperRef} surface={surface}>
        <SurfaceProvider value={surface}>
          {sections.map((id) => {
            if (id === 'welcome') {
              return (
                <WelcomeSection
                  key={id}
                  version={packageJson.version}
                  onExplore={() => scrollTo('components')}
                />
              );
            }
            if (id === 'components') {
              return <ComponentsSection key={id} onOpenDetail={setOpenDetailId} />;
            }
            if (id === 'chalkboard') {
              return <ChalkboardSection key={id} onOpenDetail={setOpenDetailId} />;
            }
            if (id === 'tokens') {
              return <TokensSection key={id} />;
            }
            return <DocsSection key={id} />;
          })}
        </SurfaceProvider>
      </Sheet>
    </Desk>
  );
}
