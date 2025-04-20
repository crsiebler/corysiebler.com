import React from 'react';
import Image from 'next/image';
import { linkItems } from 'constants/navigation';

export function AvatarSection() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-xl font-semibold">Cory Siebler</h1>
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <Image
          src="/images/portrait-avatar.webp"
          alt="Cory Siebler"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <p className="text-center text-sm text-gray-600">
        Hi! My name is Cory Siebler. Welcome to my personal website!
      </p>
      <div className="flex w-full max-w-xs justify-evenly">
        {linkItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.target ? item.target : '_self'}
            aria-label={item.ariaLabel}
            className="rounded-full p-2 transition hover:bg-gray-200"
          >
            {item.icon()}
          </a>
        ))}
      </div>
    </div>
  );
}
