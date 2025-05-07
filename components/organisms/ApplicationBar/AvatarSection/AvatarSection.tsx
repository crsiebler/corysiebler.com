import React from 'react';
import Link from 'next/link';
import { AvatarImage } from '@/atoms/Images/AvatarImage';
import { Text } from '@/atoms/Text';
import { linkItems } from 'constants/navigation';

export function AvatarSection() {
  return (
    <section className="flex flex-col items-center space-y-6 pt-4" id="avatar">
      <Text className="text-center" variant="h6">
        Cory Siebler
      </Text>
      <div className="size-36 overflow-hidden rounded-full">
        <AvatarImage />
      </div>
      <Text
        component="p"
        className="text-center"
        variant="body2"
        weight="light"
      >
        Hi! My name is Cory Siebler. Welcome to my personal website!
      </Text>
      <div className="flex w-full max-w-xs flex-wrap justify-center space-y-2">
        {linkItems.map((item, index) => (
          <Link
            aria-label={item.ariaLabel}
            className="flex w-1/3 justify-center rounded-full p-2 transition hover:bg-gray-200"
            href={item.href}
            key={index}
            target={item.target ? item.target : '_self'}
          >
            {item.icon()}
          </Link>
        ))}
      </div>
    </section>
  );
}
