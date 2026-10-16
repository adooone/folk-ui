import { useState } from 'react';
import { Page } from '../../components/page';
import { Control } from './control';
import { Entry } from './entry';

const ACCENT_COLORS = ['blue', 'green', 'amber', 'rose', 'slate'] as const;
type AccentColor = (typeof ACCENT_COLORS)[number];

export function PageEntry() {
  const [accentColor, setAccentColor] = useState<AccentColor>('green');

  return (
    <Entry
      name="Page"
      description="Textured paper page container with an optional watercolor accent blob."
    >
      <div className="w-full max-w-sm">
        <Page withAccent accentColor={accentColor}>
          <h3>Journal Entry</h3>
          <p>The paper grain and watercolor accent create an organic reading surface.</p>
        </Page>
      </div>
      <Control
        label="accentColor"
        options={ACCENT_COLORS}
        value={accentColor}
        onChange={setAccentColor}
      />
    </Entry>
  );
}
