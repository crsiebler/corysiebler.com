'use client';

import { CldImage } from 'next-cloudinary';

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
      format="webp"
      className={className}
    />
  );
}
