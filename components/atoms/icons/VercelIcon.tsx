import { IconProps } from './types';

export function VercelIcon({
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
      viewBox="0 0 512 512"
    >
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
}
