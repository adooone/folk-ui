import { useState } from 'react';
import { Layout } from '../../components/layout';
import { Control } from './control';
import { Entry } from './entry';

const BACKGROUNDS = ['plain', 'paper', 'kraft'] as const;
type Background = (typeof BACKGROUNDS)[number];

export function LayoutEntry() {
  const [background, setBackground] = useState<Background>('plain');

  return (
    <Entry
      name="Layout"
      description="Page shell with sidebar navigation, header bar, and main content area."
    >
      <div className="h-64 w-full max-w-md overflow-hidden rounded-xl border">
        <Layout
          title="Paper Studio"
          subtitle="Dashboard"
          headerBackground="none"
          headerHeight={56}
          background={background}
          navigationItems={[
            { id: 'dash', label: 'Dashboard', path: '/' },
            { id: 'plans', label: 'Plans', path: '/plans' },
          ]}
          activeItemId="dash"
          onNavigate={() => {}}
          showSidebar
          showPage
          showHeader
        >
          <div className="flex h-full items-center justify-center">
            <span>Main content area</span>
          </div>
        </Layout>
      </div>
      <Control
        label="background"
        options={BACKGROUNDS}
        value={background}
        onChange={setBackground}
      />
    </Entry>
  );
}
