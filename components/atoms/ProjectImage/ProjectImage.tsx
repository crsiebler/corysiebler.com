'use client';
import { CldImage } from 'next-cloudinary';

interface ProjectImageProps {
  publicId: string;
  alt: string;
  sizes?: string;
}

export function ProjectImage({
  publicId,
  alt,
  sizes = '(min-width: 1024px) 560px, 100vw',
}: ProjectImageProps) {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={1200}
      height={760}
      crop="fill"
      sizes={sizes}
      className="project-image"
    />
  );
}
