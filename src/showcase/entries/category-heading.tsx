import { Text } from '../../components/text';

interface CategoryHeadingProps {
  children: string;
}

export function CategoryHeading({ children }: CategoryHeadingProps) {
  return (
    <Text as="h3" face="display" weight="semibold" tone="secondary" className="text-xl">
      {children}
    </Text>
  );
}
