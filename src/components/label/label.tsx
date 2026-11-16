import type { CSSProperties, ElementType } from 'react';
import type { TextProps } from '../text';
import { Text } from '../text';

export interface LabelProps {
  children?: TextProps['children'];
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Label({ children, as, className, style }: LabelProps) {
  return (
    <Text
      as={as}
      face="handwritten"
      size="sm"
      weight="semibold"
      tone="faint"
      className={className}
      style={style}
    >
      {children}
    </Text>
  );
}
