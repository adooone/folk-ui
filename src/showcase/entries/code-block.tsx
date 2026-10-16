import { CodeBlock } from '../../components/code-block';
import { useSurface } from '../shell/surface-context';
import { Entry } from './entry';

const CODE = `function greet(name) {
  return \`Hello, \${name}!\`;
}`;

export function CodeBlockEntry() {
  const surface = useSurface();

  return (
    <Entry
      name="CodeBlock"
      description="A filename-headered code block with a copy button and a paper or chalkboard surface."
    >
      <CodeBlock code={CODE} filename="greet.js" surface={surface} />
    </Entry>
  );
}
