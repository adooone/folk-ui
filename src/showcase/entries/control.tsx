import { Button } from '../../components/button';
import { Label } from '../../components/label';

interface ControlProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

export function Control<T extends string>({ label, options, value, onChange }: ControlProps<T>) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Label style={{ opacity: 0.5 }}>{label}</Label>
      {options.map((option) => (
        <Button
          key={option}
          variant="ghost"
          size="small"
          isActive={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
