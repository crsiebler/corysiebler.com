'use client';

import { CldImage } from 'next-cloudinary';

interface LockheedMartinUasImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function LockheedMartinUasImage({
  src = 'cory-siebler/lockheed-martin-uas',
  alt = 'Lockheed Martin Unmanned Aircraft Systems (UAS) Common and Control (C2)',
  width = 1902,
  height = 1125,
  className = 'object-cover',
}: LockheedMartinUasImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      aspectRatio={width / height}
      fill
      format="webp"
      className={className}
    />
  );
}
