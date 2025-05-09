import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'text' | 'outlined' | 'contained';
type Color =
  | 'black'
  | 'complimentary'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'tint'
  | 'tint-dark'
  | 'tint-darker'
  | 'tint-darkest'
  | 'tint-light'
  | 'tint-lighter'
  | 'tint-lightest'
  | 'warning'
  | 'white';
type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: Color;
  disabled?: boolean;
  rounded?: Rounded;
  variant?: Variant;
}

export function Button({
  children,
  className,
  color = 'primary',
  disabled,
  onClick,
  rounded = 'md',
  variant = 'text',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer p-2 transition-colors duration-200',
        {
          text: 'hover:backdrop-brightness-95',
          outlined:
            'border bg-transparent backdrop-blur hover:brightness-95 hover:backdrop-blur-2xl',
          contained: 'text-white',
        }[variant],
        // Color Styles
        {
          tint: 'border-tint text-tint',
          'tint-dark': 'border-tint-dark text-tint-dark',
          'tint-darker': 'border-tint-darker text-tint-darker',
          'tint-darkest': 'border-tint-darkest text-tint-darkest',
          'tint-light': 'border-tint-light text-tint-light',
          'tint-lighter': 'border-tint-lighter text-tint-lighter',
          'tint-lightest': 'border-tint-lightest text-tint-lightest',
          black: 'border-black text-black',
          complimentary: 'border-complimentary text-complimentary',
          error: 'border-error text-error',
          info: 'border-info text-info',
          neutral: 'border-neutral text-neutral',
          primary: 'border-primary text-primary',
          secondary: 'border-secondary text-secondary',
          success: 'border-success text-success',
          warning: 'border-warning text-warning',
          white: 'border-white text-white',
        }[color],
        // Color Fill Styles
        variant === 'contained' &&
          {
            tint: 'bg-tint',
            'tint-dark': 'bg-tint-dark',
            'tint-darker': 'bg-tint-darker',
            'tint-darkest': 'bg-tint-darkest',
            'tint-light': 'bg-tint-light',
            'tint-lighter': 'bg-tint-lighter',
            'tint-lightest': 'bg-tint-lightest',
            black: 'bg-black',
            complimentary: 'bg-complimentary',
            error: 'bg-error',
            info: 'bg-info',
            neutral: 'bg-neutral',
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            success: 'bg-success',
            warning: 'bg-warning',
            white: 'bg-white',
          }[color],
        // Contained Hover Styles
        variant === 'contained' &&
          {
            tint: 'hover:border-tint/80 hover:bg-tint/80',
            'tint-dark': 'hover:border-tint-dark/80 hover:bg-tint-dark/80',
            'tint-darker':
              'hover:border-tint-darker/80 hover:bg-tint-darker/80',
            'tint-darkest':
              'hover:border-tint-darkest/80 hover:bg-tint-darkest/80',
            'tint-light': 'hover:border-tint-light/80 hover:bg-tint-light/80',
            'tint-lighter':
              'hover:border-tint-lighter/80 hover:bg-tint-lighter/80',
            'tint-lightest':
              'hover:border-tint-lightest/80 hover:bg-tint-lightest/80',
            black: 'hover:border-shade-darkest/80 hover:bg-shade-darkest/80',
            complimentary:
              'hover:border-complimentary/80 hover:bg-complimentary/80',
            error: 'hover:border-error/80 hover:bg-error/80',
            info: 'hover:border-info/80 hover:bg-info/80',
            neutral: 'hover:border-neutral/80 hover:bg-neutral/80',
            primary: 'hover:border-primary/80 hover:bg-primary/80',
            secondary: 'hover:border-secondary/80 hover:bg-secondary/80',
            success: 'hover:border-success/80 hover:bg-success/80',
            warning: 'hover:border-warning/80 hover:bg-warning/80',
            white: 'hover:border-tint-lightest/80 hover:bg-tint-lightest/80',
          }[color],
        // Rounded Styles
        {
          none: 'rounded-none',
          sm: 'rounded-sm',
          md: 'rounded-md',
          lg: 'rounded-lg',
          full: 'rounded-full',
        }[rounded],
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
