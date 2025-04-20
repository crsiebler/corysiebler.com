import clsx from 'clsx';
import { roboto } from '@/app/ui/fonts';
import { JsonLd } from '@/atoms/JsonLd';
import { ShortcutIcon } from '@/atoms/ShortcutIcon';
import { getMetadata, schema } from '@/constants/metadata';
import { JumpToTop } from '@/molecules/JumpToTop';
import { ApplicationBar } from '@/organisms/ApplicationBar';
import { Footer } from '@/organisms/Footer';

import './globals.css';

export const metadata = getMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd schema={schema} />
        <ShortcutIcon />
      </head>
      <body className={clsx('bg-shade-dark', roboto.className)}>
        <ApplicationBar />
        <div id="anchor" />
        {children}
        <JumpToTop />
        <Footer />
      </body>
    </html>
  );
}
