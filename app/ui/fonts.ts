import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});
