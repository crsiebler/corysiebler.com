'use client';

import { CldImage } from 'next-cloudinary';

interface AvatarImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function AvatarImage({
  src = 'cory-siebler/avatar',
  alt = 'Avatar',
  width = 144,
  height = 144,
  className = 'rounded-full',
}: AvatarImageProps) {
  return (
    <div className="relative">
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        format="webp"
        className={`object-cover ${className}`}
        replaceBackground="white"
      />
    </div>
  );
}
