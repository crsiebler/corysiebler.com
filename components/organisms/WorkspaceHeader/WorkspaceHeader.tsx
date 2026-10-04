import Link from 'next/link';
import { ThemeControl } from '@/molecules/ThemeControl/ThemeControl';

export function WorkspaceHeader() {
  return (
    <header className="workspace-header">
      <Link className="wordmark" href="/" aria-label="Cory Siebler home">
        <span aria-hidden="true" className="wordmark-prompt">
          ~/
        </span>
        cory.siebler
        <span aria-hidden="true" className="wordmark-dot">
          _
        </span>
      </Link>
      <nav aria-label="Main navigation" className="header-links">
        <Link href="/">About</Link>
        <Link href="/portfolio">Work</Link>
        <Link href="/resume">Resume</Link>
      </nav>
      <ThemeControl />
    </header>
  );
}
