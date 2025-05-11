'use client';

import { CldImage } from 'next-cloudinary';

interface GeneralDynamicsImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function GeneralDynamicsImage({
  src = 'cory-siebler/gdms-logo',
  alt = 'General Dynamics Logo',
  width = 1200,
  height = 627,
  className = 'object-contain',
}: GeneralDynamicsImageProps) {
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
