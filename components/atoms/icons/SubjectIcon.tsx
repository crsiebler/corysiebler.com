import { IconProps } from './types';

export function SubjectIcon({
  className,
  fill = 'currentColor',
  size = 24,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      fill={fill}
      height={size}
      width={size}
    >
      <path d="M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z" />
    </svg>
  );
}
