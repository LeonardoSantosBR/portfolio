type IconProps = { children: React.ReactNode; size?: number };

export function Icon({ children, size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
