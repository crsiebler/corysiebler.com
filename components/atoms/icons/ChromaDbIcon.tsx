import { IconProps } from './types';

export function ChromaDbIcon({
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
      viewBox="0 0 72.45 48.3"
    >

      <path d="M24.15,0C10.81,0,0,10.81,0,24.15s10.81,24.15,24.15,24.15,24.15-10.81,24.15-24.15S37.49,0,24.15,0" fill="#327EFF"></path>
      <path d="M48.3,0c-13.34,0-24.15,10.81-24.15,24.15s10.81,24.15,24.15,24.15,24.15-10.81,24.15-24.15S61.64,0,48.3,0" fill="#FFDE2D"></path>
      <path d="M24.15,24.15C24.15,10.81,34.96,0,48.3,0v24.15h-24.15ZM48.3,24.15c0,13.34-10.81,24.15-24.15,24.15v-24.15h24.15Z" fill="#FF6446"></path>
    </svg>
  );
}
