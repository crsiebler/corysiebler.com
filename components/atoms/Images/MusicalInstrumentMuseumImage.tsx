'use client';

import { CldImage } from 'next-cloudinary';
import { portfolioArchiveImageSizes } from '@/constants/imageSizes';

interface MusicalInstrumentMuseumImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function MusicalInstrumentMuseumImage({
  src = 'cory-siebler/musical-instrument-museum',
  alt = 'Musical Instrument Museum',
  width = 800,
  height = 512,
  className = 'object-cover',
}: MusicalInstrumentMuseumImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      aspectRatio={width / height}
      fill
      sizes={portfolioArchiveImageSizes}
      format="webp"
      className={className}
    />
  );
}
