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
    <div className="relative mb-2 h-24 max-w-sm">
      <CldImage
        src={src}
        alt={alt}
        aspectRatio={width / height}
        fill
        sizes="(max-width: 460px) calc(100vw - 76px), 384px"
        format="webp"
        className={className}
      />
    </div>
  );
}
