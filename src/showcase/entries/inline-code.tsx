import { InlineCode } from '../../components/inline-code';
import { Text } from '../../components/text';
import { Entry } from './entry';

export function InlineCodeEntry() {
  return (
    <Entry
      name="InlineCode"
      description="A monospace snippet for referencing identifiers inline with prose."
    >
      <Text as="p">
        Run <InlineCode>pnpm build</InlineCode> before publishing.
      </Text>
    </Entry>
  );
}
