import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'text' | 'outlined' | 'contained';
type Color =
  | 'primary'
  | 'secondary'
  | 'complimentary'
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'neutral'
  | 'white'
  | 'black'
  | 'tint-light'
  | 'tint-lighter'
  | 'tint-lightest';
type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: Color;
  disabled?: boolean;
  rounded?: Rounded;
  transparent?: boolean;
  variant: Variant;
}

export function Button({
  children,
  className,
  color = 'neutral',
  disabled,
  onClick,
  rounded = 'md',
  transparent,
  variant,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 transition-colors duration-200 cursor-pointer';

  const variantStyles = {
    text: 'bg-transparent hover:bg-tint-light',
    outlined: 'border backdrop-blur bg-transparent hover:backdrop-blur-xl',
    contained: 'text-white',
  };

  const colorStyles = {
    primary: 'text-primary border-primary',
    secondary: 'text-secondary border-secondary',
    complimentary: 'text-complimentary border-complimentary',
    info: 'text-info border-info',
    success: 'text-success border-success',
    error: 'text-error border-error',
    warning: 'text-warning border-warning',
    neutral: 'text-neutral border-neutral',
    white: 'text-white border-white',
    black: 'text-black border-black',
    'tint-light': 'text-tint border-tint',
    'tint-lighter': 'text-tint-lighter border-tint-lighter',
    'tint-lightest': 'text-tint-lightest border-tint-lightest',
  };

  const colorFillStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    complimentary: 'bg-complimentary',
    info: 'bg-info',
    success: 'bg-success',
    error: 'bg-error',
    warning: 'bg-warning',
    neutral: 'bg-neutral',
    white: 'bg-white',
    black: 'bg-black',
    'tint-light': 'bg-tint',
    'tint-lighter': 'bg-tint-lighter',
    'tint-lightest': 'bg-tint-lightest',
  };

  const hoverColorStyles = {
    primary: 'hover:bg-monochromatic-light hover:border-monochromatic-light',
    secondary: 'hover:bg-analogous-1 hover:border-analogous-1',
    complimentary:
      'hover:bg-split-complementary-1 hover:border-split-complementary-1',
    info: '',
    success: '',
    error: '',
    warning: '',
    neutral: 'hover:bg-tint hover:border-tint',
    white: 'hover:bg-tint-lightest hover:border-tint-lightest',
    black: 'hover:bg-shade-darkest hover:border-shade-darkest',
    'tint-light': 'hover:bg-tint hover:border-tint',
    'tint-lighter': 'hover:bg-tint-light hover:border-tint-light',
    'tint-lightest': 'hover:bg-tint-lighter hover:border-tint-lighter',
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        colorStyles[color],
        variant === 'contained' && colorFillStyles[color],
        variant !== 'outlined' && hoverColorStyles[color],
        variant === 'outlined' && !transparent && 'hover:bg-tint-lightest',
        roundedStyles[rounded],
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
