import { useState } from 'react';
import { Text } from '../../components/text';
import { canvas, colors, fontSize, ink, paper, radii, shadows, space } from '../../tokens';
import { TextureSwatches } from '../components/texture-swatches';
import { textures } from '../lib/textures';
import type { TextureConfig } from '../lib/textures';
import { Entry } from './entry';
import { SectionBlock } from './section-block';

const COLOR_RAMPS = [
  { name: 'Paper', ramp: paper },
  { name: 'Ink', ramp: ink },
  { name: 'Canvas', ramp: canvas },
] as const;

const WATERCOLOR_SWATCHES = [
  { name: 'blue', value: colors.accentBlue },
  { name: 'green', value: colors.accentGreen },
  { name: 'amber', value: colors.accentAmber },
  { name: 'rose', value: colors.accentRose },
  { name: 'slate', value: colors.accentSlate },
] as const;

const TEXT_FACES = ['display', 'serif', 'mono', 'handwritten'] as const;

function ColorChip({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: value }} />
      <Text face="mono" size="3xs" tone="muted">
        {name}
      </Text>
    </div>
  );
}

export function TokensSection() {
  const [textureConfig, setTextureConfig] = useState<TextureConfig>({
    texture: 'paper',
    ruledType: 'none',
    ruledColor: 'blue',
  });

  return (
    <SectionBlock
      id="tokens"
      title="tokens"
      lead="Colour, type, spacing and the surfaces they're built from — read straight from tokens.ts and textures.ts."
    >
      <Entry name="Colour" description="Paper, ink and canvas ramps, plus the watercolor accents.">
        <div className="flex w-full max-w-lg flex-col gap-4">
          {COLOR_RAMPS.map(({ name, ramp }) => (
            <div key={name} className="flex flex-wrap gap-2">
              {Object.entries(ramp).map(([shade, value]) => (
                <ColorChip key={shade} name={`${name.toLowerCase()}-${shade}`} value={value} />
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            {WATERCOLOR_SWATCHES.map(({ name, value }) => (
              <ColorChip key={name} name={`watercolor-${name}`} value={value} />
            ))}
          </div>
        </div>
      </Entry>

      <Entry name="Typography" description="The four font faces and the fontSize scale.">
        <div className="flex w-full max-w-lg flex-col gap-4">
          <div className="flex flex-wrap gap-6">
            {TEXT_FACES.map((face) => (
              <div key={face} className="flex flex-col items-center gap-1">
                <Text face={face} size="lg">
                  Aa
                </Text>
                <Text face="mono" size="3xs" tone="muted">
                  {face}
                </Text>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            {Object.entries(fontSize).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <Text face="serif" style={{ fontSize: value }}>
                  Aa
                </Text>
                <Text face="mono" size="3xs" tone="muted">
                  {key}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Entry>

      <Entry name="Spacing" description="The space-* scale, 4px-based.">
        <div className="flex w-full max-w-sm flex-col gap-2">
          {Object.entries(space).map(([key, value]) => (
            <div key={key} className="flex items-center gap-3">
              <Text face="mono" size="2xs" tone="muted" className="w-6">
                {key}
              </Text>
              <div
                className="h-3 rounded"
                style={{ width: value, backgroundColor: colors.ghostActiveFill }}
              />
              <Text face="mono" size="2xs" tone="faint">
                {value}
              </Text>
            </div>
          ))}
        </div>
      </Entry>

      <Entry name="Radius" description="The radii scale, from a sharp corner to a full pill.">
        <div className="flex flex-wrap gap-4">
          {Object.entries(radii).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center gap-1">
              <div
                className="h-12 w-12"
                style={{ borderRadius: value, backgroundColor: colors.accentGreenLight }}
              />
              <Text face="mono" size="2xs" tone="muted">
                {key}
              </Text>
            </div>
          ))}
        </div>
      </Entry>

      <Entry name="Shadows" description="The shadow scale, from a subtle lift to a floating panel.">
        <div className="flex flex-wrap gap-6">
          {Object.entries(shadows)
            .filter(([key]) => !key.startsWith('filter'))
            .map(([key, value]) => (
              <div
                key={key}
                className="flex h-16 w-16 items-center justify-center rounded-lg"
                style={{ backgroundColor: colors.bgBase, boxShadow: value }}
              >
                <Text face="mono" size="3xs" tone="muted">
                  {key}
                </Text>
              </div>
            ))}
        </div>
      </Entry>

      <Entry
        name="Textures"
        description="Every surface grain in textureMap, plus the wobble and ruled-line playground."
      >
        <div className="flex w-full max-w-lg flex-col gap-6">
          <div className="grid grid-cols-4 gap-3">
            {textures.map((texture) => (
              <div key={texture.key} className="flex flex-col items-center gap-1">
                <div
                  className="h-14 w-14 rounded-lg border"
                  style={{
                    backgroundColor: texture.color,
                    backgroundImage: texture.bg,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100px 100px',
                    borderColor: colors.borderDefault,
                  }}
                />
                <Text face="mono" size="3xs" tone="muted">
                  {texture.key}
                </Text>
              </div>
            ))}
          </div>
          <TextureSwatches value={textureConfig} onChange={setTextureConfig} compact showPreview />
        </div>
      </Entry>
    </SectionBlock>
  );
}
