import React from 'react';
import { AvatarImage } from '@/atoms/Images/AvatarImage';
import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';
import { linkItems } from 'constants/navigation';

export function AvatarSection() {
  return (
    <section
      className="flex flex-col items-center space-y-6 px-4 pt-4"
      id="avatar"
    >
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
      <div className="flex w-full max-w-xs flex-wrap justify-center gap-x-8 gap-y-2">
        {linkItems.map((item, index) => (
          <LinkButton
            aria-label={item.ariaLabel}
            className="hover:bg-monochromatic-light flex justify-center rounded-full p-2 transition"
            color="white"
            href={item.href}
            key={index}
            rounded="full"
            target={item.target ? item.target : '_self'}
          >
            {item.icon()}
          </LinkButton>
        ))}
      </div>
    </section>
  );
}
