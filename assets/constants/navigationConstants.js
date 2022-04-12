import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const iconColorPrimary = '#FFF';
export const iconColorSecondary = '#3F51B5';

export const menuItems = [
  {
    ariaLabel: 'LinkedIn',
    href: 'https://linkedin.com/in/cory-siebler',
    icon: <LinkedInIcon style={{ color: iconColorPrimary }} />,
    target: '_blank',
  },
  {
    ariaLabel: 'phone',
    href: 'tel:14803192922',
    icon: <PhoneIcon style={{ color: iconColorPrimary }} />,
  },
  {
    ariaLabel: 'email',
    href: 'mailto:cory.siebler@proton.me',
    icon: <MailIcon style={{ color: iconColorPrimary }} />,
  },
  {
    ariaLabel: 'Twitter',
    href: 'https://twitter.com/CorySiebler',
    icon: <TwitterIcon style={{ color: iconColorPrimary }} />,
    target: '_blank',
  },
  {
    ariaLabel: 'GitHub',
    href: 'https://github.com/crsiebler',
    icon: <GitHubIcon style={{ color: iconColorPrimary }} />,
    target: '_blank',
  },
  {
    ariaLabel: 'YouTube',
    href: 'https://youtube.com/c/csiebler',
    icon: <YouTubeIcon style={{ color: iconColorPrimary }} />,
    target: '_blank',
  },
];
