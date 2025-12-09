import clsx from 'clsx';
import { roboto } from '@/app/ui/fonts';
import { JsonLd } from '@/atoms/JsonLd';
import { ShortcutIcon } from '@/atoms/ShortcutIcon';
import { getMetadata, getViewport, schema } from '@/constants/metadata';
import { JumpToTop } from '@/molecules/JumpToTop';
import { ApplicationBar } from '@/organisms/ApplicationBar';
import { Footer } from '@/organisms/Footer';

import './globals.css';

export const metadata = getMetadata({});
export const viewport = getViewport();

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
      <body className={clsx('overscroll-none', roboto.className)}>
        <div id="anchor" />
        <ApplicationBar title={metadata.title} />
        <div className="flex min-h-screen flex-col justify-between lg:ml-70">
          {children}
          <Footer />
        </div>
        <JumpToTop />
      </body>
    </html>
  );
}
