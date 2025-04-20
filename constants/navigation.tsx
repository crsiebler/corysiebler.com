import { ReactNode } from 'react';
import {
  ContactIcon,
  HomeIcon,
  InfoIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from '@/atoms/icons';

type LinkItems = {
  ariaLabel: string;
  href: string;
  icon: (size?: number) => ReactNode;
  target?: '_blank';
};

export const linkItems: LinkItems[] = [
  {
    ariaLabel: 'phone',
    href: 'tel:14803192922',
    icon: (size = 20) => <PhoneIcon size={size} />,
  },
  {
    ariaLabel: 'email',
    href: 'mailto:cory.siebler@protonmail.com.com',
    icon: (size = 20) => <MailIcon size={size} />,
  },
  {
    ariaLabel: 'X',
    href: 'https://x.com/CorySiebler',
    icon: (size = 20) => <XIcon size={size} />,
    target: '_blank',
  },
  {
    ariaLabel: 'Instagram',
    href: 'https://instagram.com/groundscontrolllc',
    icon: (size = 20) => <InstagramIcon size={size} />,
    target: '_blank',
  },
];

type NavigationItem = {
  href: string;
  icon: (size?: number) => ReactNode;
  name: string;
};

export const navigationItems: NavigationItem[] = [
  {
    href: '/',
    icon: (size = 20) => <HomeIcon size={size} />,
    name: 'Home',
  },
  {
    href: '/resume',
    icon: (size = 20) => <InfoIcon size={size} />,
    name: 'Resume',
  },
  {
    href: '/portfolio',
    icon: (size = 20) => <ContactIcon size={size} />,
    name: 'Portfolio',
  },
];
