interface ProfileIconProps {
  color?: string;
  size?: number;
}

export function ProfileIcon({
  color = "currentColor",
  size = 24,
}: ProfileIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21V19C20 16.79 18.21 15 16 15H8C5.79 15 4 16.79 4 19V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2" />
    </svg>
  );
}
