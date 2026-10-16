import { CodeBlock } from '../../components/code-block';
import { Text } from '../../components/text';
import { accentInk } from '../lib/accent';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';
import { SectionBlock } from './section-block';

const installCode = 'pnpm add @dendelion/folk-ui';

const tailwindSetupCode = `import { paperPreset } from '@dendelion/folk-ui/tailwind';

export default {
  presets: [paperPreset],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};`;

const cssImportCode = "import '@dendelion/folk-ui/dist/index.css';";

const FOUNDATIONS = [
  {
    name: 'page',
    description:
      'The content wrapper — paper texture, a watercolor accent blob, and an optional sketch outline.',
  },
  {
    name: 'card',
    description:
      'A bordered surface with the same hand-drawn edge as Page, sized for a single block of content.',
  },
  {
    name: 'textures',
    description:
      'Seven SVG-generated grains — white, paper, speckle, parchment, canvas, kraft and chalkboard — in textureMap.',
  },
  {
    name: 'watercolor',
    description:
      'The soft wash accent — blue, green, amber, rose and slate — used for highlights and hover states.',
  },
  {
    name: 'sketch',
    description: 'The hand-drawn border wobble shared by Page, Card and SketchBorder.',
  },
  {
    name: 'chalkboard',
    description:
      'A second surface family — flip the whole sheet with the surface toggle in the left column.',
  },
];

export function DocsSection() {
  const accent = accentInk(useSurface());
  return (
    <SectionBlock
      id="docs"
      title="docs"
      lead="Installing the package and the handful of foundations everything else sits on."
    >
      <Entry
        name="Install"
        description="Add the package, then wire up the Tailwind preset and the stylesheet."
      >
        <div className="flex w-full max-w-lg flex-col gap-3">
          <CodeBlock code={installCode} />
          <CodeBlock filename="tailwind.config.ts" code={tailwindSetupCode} />
          <CodeBlock filename="main.tsx" code={cssImportCode} />
        </div>
      </Entry>

      <Entry name="Foundations" description="The natural materials everything else is built from.">
        <ul className="m-0 flex max-w-md list-none flex-col gap-2 p-0">
          {FOUNDATIONS.map((item) => (
            <li key={item.name}>
              <Text face="mono" size="sm" weight="semibold" style={{ color: accent }}>
                {item.name}
              </Text>{' '}
              <Text tone="muted">— {item.description}</Text>
            </li>
          ))}
        </ul>
      </Entry>
    </SectionBlock>
  );
}
