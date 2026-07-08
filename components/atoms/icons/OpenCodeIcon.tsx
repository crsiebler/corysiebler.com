import { IconProps } from './types';

export function OpenCodeIcon({
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
      viewBox="0 0 240 300"
    >
      <path d="M180 240H60V120H180V240Z" fill="#CFCECD"></path>
      <path
        d="M180 60H60V240H180V60ZM240 300H0V0H240V300Z"
        fill="#211E1E"
      ></path>
    </svg>
  );
}
