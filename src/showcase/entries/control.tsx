import { Button } from '../../components/button';
import { Text } from '../../components/text';
import { useSurface } from '../shell/surface-context';

interface ControlProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

export function Control<T extends string>({ label, options, value, onChange }: ControlProps<T>) {
  const surface = useSurface();

  return (
    <div className="flex items-center gap-4">
      <Text face="mono" size="xs" tone="muted" className="w-24 shrink-0 uppercase tracking-wide">
        {label}
      </Text>
      <div className="flex flex-wrap items-center gap-1">
        {options.map((option) => (
          <Button
            key={option}
            variant="ghost"
            size="tiny"
            surface={surface}
            isActive={value === option}
            onClick={() => onChange(option)}
            className="lowercase"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
