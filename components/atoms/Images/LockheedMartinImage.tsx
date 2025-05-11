'use client';

import { CldImage } from 'next-cloudinary';

interface LockheedMartinImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function LockheedMartinImage({
  src = 'cory-siebler/lockheed-martin-logo',
  alt = 'Lockheed Martin Logo',
  width = 2131,
  height = 322,
  className = 'object-contain',
}: LockheedMartinImageProps) {
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
