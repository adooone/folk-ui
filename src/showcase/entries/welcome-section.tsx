import { useState } from 'react';
import { Button } from '../../components/button';
import { PageTitle } from '../../components/page-title';
import { Text } from '../../components/text';
import { colors } from '../../tokens';

const PROVERBS = [
  { quote: 'Measure twice, cut once.', src: 'carpenter’s saying' },
  { quote: 'Many hands make light work.', src: 'english proverb' },
  { quote: 'A stitch in time saves nine.', src: 'english proverb' },
  { quote: 'Slow and steady wins the race.', src: 'aesop’s fables' },
  { quote: 'Still waters run deep.', src: 'english proverb' },
  { quote: 'Waste not, want not.', src: 'english proverb' },
  { quote: 'The work praises the craftsman.', src: 'flemish proverb' },
];

const marqueeText = 'paper · ink · canvas · watercolor · '.repeat(3);

const repoUrl = 'https://github.com/adooone/folk-ui';
const npmUrl = 'https://www.npmjs.com/package/@dendelion/folk-ui';

interface WelcomeSectionProps {
  version: string;
  onExplore: () => void;
}

export function WelcomeSection({ version, onExplore }: WelcomeSectionProps) {
  const [proverb] = useState(() => PROVERBS[Math.floor(Math.random() * PROVERBS.length)]);

  return (
    <section id="welcome" className="flex min-h-full scroll-mt-10 flex-col">
      <div className="self-end text-right">
        <Text face="handwritten" size="lg" tone="muted" as="p" className="ml-auto max-w-sm">
          {proverb.quote}
        </Text>
        <Text
          face="mono"
          size="sm"
          weight="semibold"
          as="p"
          className="mt-2 lowercase"
          style={{ color: colors.accentGreen }}
        >
          {proverb.src}
        </Text>
      </div>

      <div
        className="pointer-events-none relative my-auto h-32 select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-hidden="true"
      >
        <div className="animate-marquee absolute left-0 top-0 whitespace-nowrap font-serif text-8xl font-bold uppercase leading-none opacity-[0.05] motion-reduce:animate-none">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <div className="self-end text-right">
        <PageTitle>Welcome!</PageTitle>
        <Text
          face="mono"
          size="sm"
          weight="semibold"
          as="p"
          className="mt-2 lowercase"
          style={{ color: colors.accentGreen }}
        >
          @dendelion/folk-ui v{version}
        </Text>
        <Button variant="primary" className="mt-6" onClick={onExplore}>
          Explore components
        </Button>
        {/* Raw anchors — Button renders a <button>, which can't carry an href */}
        <div className="mt-6 flex justify-end gap-6 font-mono text-sm lowercase">
          <a
            style={{ color: colors.accentGreen }}
            className="underline-offset-4 hover:underline"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            style={{ color: colors.accentGreen }}
            className="underline-offset-4 hover:underline"
            href={npmUrl}
            target="_blank"
            rel="noreferrer"
          >
            npm
          </a>
        </div>
      </div>
    </section>
  );
}
