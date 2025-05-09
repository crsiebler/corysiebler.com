'use client';

import clsx from 'clsx';
import { CldImage } from 'next-cloudinary';

interface HeadshotImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function HeadshotImage({
  src = 'cory-siebler/portrait.webp',
  alt = 'Headshot',
  width = 480,
  height = 480,
  className = 'rounded-2xl',
}: HeadshotImageProps) {
  return (
    <div className="relative">
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        crop="fill"
        gravity="face"
        className={clsx('object-cover', className)}
      />
    </div>
  );
}
