import { ReactNode } from 'react';
import {
  ContactIcon,
  GitHubIcon,
  HomeIcon,
  InfoIcon,
  LinkedInIcon,
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
    ariaLabel: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cory-siebler/',
    icon: (size = 24) => <LinkedInIcon size={size} />,
    target: '_blank',
  },
  {
    ariaLabel: 'phone',
    href: 'tel:14803192922',
    icon: (size = 24) => <PhoneIcon size={size} />,
  },
  {
    ariaLabel: 'email',
    href: 'mailto:cory.siebler@protonmail.com',
    icon: (size = 24) => <MailIcon size={size} />,
  },
  {
    ariaLabel: 'X',
    href: 'https://x.com/CorySiebler',
    icon: (size = 24) => <XIcon size={size} />,
    target: '_blank',
  },
  {
    ariaLabel: 'GitHub',
    href: 'https://github.com/crsiebler',
    icon: (size = 24) => <GitHubIcon size={size} />,
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
