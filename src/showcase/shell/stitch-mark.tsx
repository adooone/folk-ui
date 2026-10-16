interface StitchMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

// A single cross-stitch in thread, two slightly bowed strokes, marking the
// active nav item the way embroidery marks a row on a sampler.
export function StitchMark({ className, style }: StitchMarkProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d="M5.8 6.3C8.9 9.1 12.2 12.6 18.1 17.9" />
      <path d="M17.7 5.9C14.6 9.4 10.9 13.3 6.2 18.2" />
    </svg>
  );
}
