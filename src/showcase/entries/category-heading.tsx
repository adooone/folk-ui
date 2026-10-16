import { Label } from '../../components/label';

interface CategoryHeadingProps {
  children: string;
}

export function CategoryHeading({ children }: CategoryHeadingProps) {
  return (
    <Label as="h3" className="uppercase tracking-wide" style={{ opacity: 0.4 }}>
      {children}
    </Label>
  );
}
