import clsx from 'clsx';
import { geist, geistMono } from '@/app/ui/fonts';
import { JsonLd } from '@/atoms/JsonLd';
import { ShortcutIcon } from '@/atoms/ShortcutIcon';
import { getMetadata, getViewport, schema } from '@/constants/metadata';
import { themeBootstrap } from '@/lib/theme';
import { JumpToTop } from '@/molecules/JumpToTop';
import { Footer } from '@/organisms/Footer';
import { WorkspaceAtmosphere } from '@/organisms/WorkspaceAtmosphere/WorkspaceAtmosphere';
import { WorkspaceHeader } from '@/organisms/WorkspaceHeader/WorkspaceHeader';
import './globals.css';

export const metadata = getMetadata({});
export const viewport = getViewport();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          id="theme-preference"
          dangerouslySetInnerHTML={{ __html: themeBootstrap }}
        />
        <JsonLd schema={schema} />
        <ShortcutIcon />
      </head>
      <body className={clsx(geist.variable, geistMono.variable)}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="anchor" />
        <WorkspaceAtmosphere />
        <WorkspaceHeader />
        <div className="site-shell">
          {children}
          <Footer />
        </div>
        <JumpToTop />
      </body>
    </html>
  );
}
