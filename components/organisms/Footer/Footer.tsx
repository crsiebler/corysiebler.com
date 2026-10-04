import Link from 'next/link';
import { CopyrightYear } from './CopyrightYear';
import { githubUrl, linkedInUrl, xHandle, xUrl } from '@/constants/contact';

export function Footer() {
  return (
    <footer className="workspace-footer">
      <p>
        <span>
          © <CopyrightYear /> Cory Siebler.
        </span>{' '}
        Built with care.
      </p>
      <div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          href={xUrl}
          aria-label={`${xHandle} on X`}
          target="_blank"
          rel="noopener noreferrer"
        >
          X <span aria-hidden="true">↗</span>
        </a>
        <Link href="#anchor">
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
