'use client';

import { CldImage } from 'next-cloudinary';

interface OneOriginImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function OneOriginImage({
  src = 'cory-siebler/one-origin-logo',
  alt = 'OneOrigin Logo',
  width = 600,
  height = 175,
  className = 'object-cover',
}: OneOriginImageProps) {
  return (
    <div className="relative">
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        crop="fill"
        format="webp"
        className={className}
      />
    </div>
  );
}
