import React from 'react';
import Link from 'next/link';
import { HomeIcon, InfoIcon, WorkIcon } from '@/atoms/icons';

interface ListItemGroupProps {
  href: string;
  primary: string;
  icon: React.ReactNode;
}

function ListItemGroup({ href, primary, icon }: ListItemGroupProps) {
  return (
    <li className="flex items-center space-x-4 rounded-md p-2 hover:bg-gray-100">
      <Link href={href} passHref>
        <a className="flex items-center space-x-2 text-gray-700">
          {icon}
          <span className="font-medium">{primary}</span>
        </a>
      </Link>
    </li>
  );
}

export function NavigationSection() {
  return (
    <nav className="w-full">
      <hr className="my-4 border-gray-300" />
      <ul className="space-y-2">
        <ListItemGroup href="/" primary="Home" icon={<HomeIcon />} />
        <ListItemGroup href="resume" primary="Resume" icon={<InfoIcon />} />
        <ListItemGroup
          href="/portfolio"
          primary="Portfolio"
          icon={<WorkIcon />}
        />
      </ul>
      <hr className="my-4 border-gray-300" />
    </nav>
  );
}
