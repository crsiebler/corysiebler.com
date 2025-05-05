import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/atoms/Button';
import type { ButtonProps } from '@/atoms/Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export function LinkButton({
  children,
  href,
  target,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} target={target} passHref>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
