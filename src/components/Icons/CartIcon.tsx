interface CartIconProps {
  color?: string;
  size?: number;
}

export function CartIcon({ color = "currentColor", size = 24 }: CartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="21" r="1" stroke={color} strokeWidth="2" />
      <circle cx="20" cy="21" r="1" stroke={color} strokeWidth="2" />
      <path
        d="M1 1H5L7.68 14.39C7.77 14.85 8.17 15.18 8.64 15.18H19.44C19.89 15.18 20.27 14.87 20.38 14.43L22 7H6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
