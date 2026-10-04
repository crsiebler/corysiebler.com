import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';
import { githubUrl, linkedInUrl, xHandle, xUrl } from '@/constants/contact';

function LinkItem({
  href,
  icon: Icon,
  label,
  accessibleLabel,
}: {
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  accessibleLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={accessibleLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent flex min-h-6 items-center gap-2 hover:underline"
    >
      {Icon && (
        <span aria-hidden="true">
          <Icon size={20} />
        </span>
      )}
      <Text component="span" variant="caption">
        {label}
      </Text>
    </Link>
  );
}

export function ResumeFooterSection() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 text-xs sm:flex-row">
      <LinkItem
        href={githubUrl}
        icon={GitHubIcon}
        label="github.com/crsiebler"
      />
      <LinkItem
        href={linkedInUrl}
        icon={LinkedInIcon}
        label="linkedin.com/in/cory-siebler"
      />
      <LinkItem
        href={xUrl}
        icon={XIcon}
        label="X"
        accessibleLabel={`${xHandle} on X`}
      />
    </footer>
  );
}
