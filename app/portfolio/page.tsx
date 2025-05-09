import { getMetadata } from '@/constants/metadata';
import { PortfolioTemplate } from '@/templates/PortfolioTemplate';

export const metadata = getMetadata({
  title: 'Portfolio',
  description:
    'Portfolio of Cory Siebler, Senior Software Engineer. Projects, case studies, and open source work in web development, Next.js, and Python.',
  path: '/portfolio',
});

export default function Portfolio() {
  return <PortfolioTemplate />;
}
