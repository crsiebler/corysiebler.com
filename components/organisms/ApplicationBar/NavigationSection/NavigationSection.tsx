import React from 'react';
import Link from 'next/link';
import { HomeIcon, InfoIcon, WorkIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';

interface ListItemGroupProps {
  href: string;
  primary: string;
  icon: React.ReactNode;
}

function ListItemGroup({ href, primary, icon }: ListItemGroupProps) {
  return (
    <li className="flex items-center space-x-4 rounded-md p-2 hover:bg-gray-100">
      <Link className="flex items-center space-x-6" href={href} passHref>
        {icon}
        <Text component="span" className="font-medium">
          {primary}
        </Text>
      </Link>
    </li>
  );
}

export function NavigationSection() {
  return (
    <nav className="w-full">
      <hr className="border-shade-light my-4" />
      <ul className="space-y-2 px-2">
        <ListItemGroup href="/" primary="Home" icon={<HomeIcon />} />
        <ListItemGroup href="resume" primary="Resume" icon={<InfoIcon />} />
        <ListItemGroup
          href="/portfolio"
          primary="Portfolio"
          icon={<WorkIcon />}
        />
      </ul>
    </nav>
  );
}
