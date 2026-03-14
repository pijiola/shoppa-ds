interface FruttinoIconProps {
  color?: string;
  size?: number;
}

export function FruttinoIcon({
  color = "currentColor",
  size = 24,
}: FruttinoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16.79 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9 3.74C13.43 2.93 14.53 2.73 15.32 3.27C16.11 3.82 16.31 4.89 15.77 5.68C15.07 6.48 13.98 6.92 13.3 7.66C12.99 7.95 12.71 8.28 12.46 8.63C15.08 9.99 16.79 12.64 16.79 15.84C16.79 20.48 13.17 24 8.39 24C3.61 24 0 20.48 0 15.84C0 11.19 3.61 7.67 8.39 7.67C9.24 7.67 10.05 7.79 10.82 8C11.18 6.46 12.02 4.95 12.9 3.74ZM8.39 11.52C5.91 11.52 4.1 13.39 4.1 15.84C4.1 18.28 5.94 20.15 8.39 20.15C10.84 20.15 12.68 18.28 12.68 15.84C12.68 13.39 10.87 11.52 8.39 11.52Z"
        fill={color}
      />
      <path
        d="M3.12 0C3.12 0 8.61 0.42 9.82 6.46C9.77 6.47 2.7 7.43 3.12 0Z"
        fill={color}
      />
    </svg>
  );
}
