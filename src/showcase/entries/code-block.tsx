import { useState } from 'react';
import { CodeBlock } from '../../components/code-block';
import { Control } from './control';
import { Entry } from './entry';

const SURFACES = ['paper', 'chalkboard'] as const;
type Surface = (typeof SURFACES)[number];

const CODE = `function greet(name) {
  return \`Hello, \${name}!\`;
}`;

export function CodeBlockEntry() {
  const [surface, setSurface] = useState<Surface>('paper');

  return (
    <Entry
      name="CodeBlock"
      description="A filename-headered code block with a copy button and a paper or chalkboard surface."
    >
      <CodeBlock code={CODE} filename="greet.js" surface={surface} />
      <Control label="surface" options={SURFACES} value={surface} onChange={setSurface} />
    </Entry>
  );
}
