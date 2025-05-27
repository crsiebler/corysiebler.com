'use client';

import { CldImage } from 'next-cloudinary';

interface MegaplanITImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function MegaplanITImage({
  src = 'cory-siebler/megaplanit-logo',
  alt = 'MegaplanIT Logo',
  width = 2048,
  height = 238,
  className = 'rounded bg-black object-contain p-2',
}: MegaplanITImageProps) {
  return (
    <div className="relative mb-2 h-18 max-w-sm">
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
