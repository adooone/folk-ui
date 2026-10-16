interface NavArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// Hand-drawn pencil arrow, the `arrow-right` line art from @dendelion/icons.
// Copied here until that package is published.
export function NavArrow({ className, style }: NavArrowProps) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <g transform="translate(3.162 6.273)">
        <path d="M0.9837 6.6097C0.905143 6.57115 0.660718 6.49549 0.748003 6.49258C1.8849 6.4504 3.0225 6.49258 4.16012 6.49258C5.06207 6.49258 5.96405 6.49258 6.866 6.49258C10.0497 6.49258 13.2153 6.37476 16.3954 6.37476" />
        <path d="M11.2183 0.727379C12.5938 0.727379 13.3757 2.14795 14.3948 2.96335C17.3632 5.33751 17.8302 5.42698 15.336 8.37505C14.5926 9.253 13.7241 9.976 12.8651 10.7274" />
      </g>
    </svg>
  );
}
