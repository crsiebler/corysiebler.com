'use client';

import { CldImage } from 'next-cloudinary';

interface SpaceGroundSegmentSustainmentImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function SpaceGroundSegmentSustainmentImage({
  src = 'cory-siebler/gdms-nasa-sgss',
  alt = 'General Dynamics Mission NASA Space Network Ground Segment Sustainment',
  width = 956,
  height = 541,
  className = 'object-cover',
}: SpaceGroundSegmentSustainmentImageProps) {
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
