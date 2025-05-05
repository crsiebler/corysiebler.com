import { IconProps } from './types';

export function JetBrainsIcon({
  className,
  fill = 'currentColor',
  size = 32,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {/* Add SVG paths here */}
    </svg>
  );
}
