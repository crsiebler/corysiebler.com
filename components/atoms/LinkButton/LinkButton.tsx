import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/atoms/Button';
import type { ButtonProps } from '@/atoms/Button';

interface LinkButtonProps extends ButtonProps {
  buttonClasses?: string;
  children: ReactNode;
  className?: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export function LinkButton({
  buttonClasses,
  children,
  className,
  href,
  target,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={className} href={href} target={target} passHref>
      <Button className={buttonClasses} {...props}>
        {children}
      </Button>
    </Link>
  );
}
