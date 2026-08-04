'use client';

import { CldImage } from 'next-cloudinary';

interface PNCImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function PNCImage({
  src = 'pnc-logo',
  alt = 'PNC Bank Logo',
  width = 205,
  height = 62,
  className = 'object-contain',
}: PNCImageProps) {
  return (
    <div className="relative mb-2 h-24 max-w-sm">
      <CldImage
        src={src}
        alt={alt}
        aspectRatio={width / height}
        fill
        format="webp"
        className={className}
      />
    </div>
  );
}
