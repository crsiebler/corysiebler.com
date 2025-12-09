import Link from 'next/link';
import { CopyrightYear } from './CopyrightYear';
import { Button } from '@/atoms/Button';
import { Text } from '@/atoms/Text';
import { linkItems } from '@/constants/navigation';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-1">
        <div className="container mx-auto flex w-full justify-between px-4">
          <Link className="my-auto hidden md:flex" color="inherit" href="/">
            <Text component="span" variant="caption">
              {'Copyright © Cory Siebler '}
              <CopyrightYear />
              {'. All rights reserved.'}
            </Text>
          </Link>
          <div className="mx-auto flex gap-2 md:mx-0">
            {linkItems.map((item, index) => (
              <Button
                key={index}
                aria-label={item.ariaLabel}
                aria-controls="menu-top"
                aria-haspopup="true"
                className="group hover:bg-shade-light p-2 text-white"
                rounded="full"
                variant="text"
              >
                <Link
                  href={item.href}
                  target={item.target ? item.target : '_self'}
                >
                  {item.icon(16)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
