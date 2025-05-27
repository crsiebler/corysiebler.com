import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';

function LinkItem({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 hover:underline"
    >
      <Icon className="text-primary" size={20} />
      <Text className="text-primary" variant="caption">
        {label}
      </Text>
    </Link>
  );
}

export function ResumeFooterSection() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 text-xs sm:flex-row">
      <LinkItem
        href="https://github.com/crsiebler"
        icon={GitHubIcon}
        label="github.com/crsiebler"
      />
      <LinkItem
        href="https://linkedin.com/in/cory-siebler"
        icon={LinkedInIcon}
        label="linkedin.com/in/cory-siebler"
      />
      <LinkItem
        href="https://x.com/CorySiebler"
        icon={XIcon}
        label="crsiebler.com"
      />
    </footer>
  );
}
