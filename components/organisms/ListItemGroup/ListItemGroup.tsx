'use client';

import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';
import { useDisplay } from '@/lib/hooks/useDisplay';

interface ListItemGroupProps {
  href: string;
  primary: string;
  icon: React.ReactNode;
}

export function ListItemGroup({ href, primary, icon }: ListItemGroupProps) {
  const { toggleDrawer } = useDisplay((state) => state);

  return (
    <li className="hover:bg-monochromatic-light">
      <LinkButton
        color="white"
        className="flex w-full gap-2"
        href={href}
        onClick={toggleDrawer}
        variant="text"
      >
        {icon}
        <Text component="span" className="font-medium">
          {primary}
        </Text>
      </LinkButton>
    </li>
  );
}
