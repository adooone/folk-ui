import { Label } from '../../components/label';
import { Entry } from './entry';

export function LabelEntry() {
  return (
    <Entry name="Label" description="A small handwritten tag for annotating fields and sections.">
      <Label>Field label</Label>
    </Entry>
  );
}
