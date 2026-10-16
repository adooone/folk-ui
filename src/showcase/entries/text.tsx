import { useState } from 'react';
import { Text } from '../../components/text';
import { Control } from './control';
import { Entry } from './entry';

const FACES = ['serif', 'sans', 'handwritten', 'mono', 'display'] as const;
type Face = (typeof FACES)[number];

const TONES = ['primary', 'secondary', 'muted', 'faint'] as const;
type Tone = (typeof TONES)[number];

export function TextEntry() {
  const [face, setFace] = useState<Face>('serif');
  const [tone, setTone] = useState<Tone>('primary');

  return (
    <Entry
      name="Text"
      description="The base typography primitive — face, size, weight and tone combine into a single class list."
    >
      <Text as="p" face={face} tone={tone} size="md">
        The quick brown fox jumps over the lazy dog.
      </Text>
      <Control label="face" options={FACES} value={face} onChange={setFace} />
      <Control label="tone" options={TONES} value={tone} onChange={setTone} />
    </Entry>
  );
}
