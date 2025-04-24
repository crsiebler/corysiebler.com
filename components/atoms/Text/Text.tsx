import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Weight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

type Component =
  | 'p'
  | 'span'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'
  | 'label';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption';

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  color?: string;
  component?: Component;
  italic?: boolean;
  variant?: Variant;
  uppercase?: boolean;
  weight?: Weight;
}

const variantClasses: Record<Variant, string> = {
  h1: 'text-5xl md:text-6xl',
  h2: 'text-4xl md:text-5xl',
  h3: 'text-3xl md:text-4xl',
  h4: 'text-2xl md:text-3xl',
  h5: 'text-xl md:text-2xl',
  h6: 'text-lg md:text-xl',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};

const fontWeights: Record<Weight, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

export function Text({
  children,
  className,
  color = 'inherit',
  component,
  italic = false,
  variant = 'body1',
  uppercase = false,
  weight = 'normal',
  ...props
}: TextProps) {
  const Component =
    component ||
    ((['body1', 'body2', 'caption'].includes(variant)
      ? 'p'
      : variant) as Component);

  return (
    <Component
      className={clsx(
        variantClasses[variant] ?? 'text-base',
        fontWeights[weight] ?? 'font-normal',
        `text-${color}`,
        italic && 'italic',
        uppercase && 'uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
