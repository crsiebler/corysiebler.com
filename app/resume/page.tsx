import { getMetadata } from '@/constants/metadata';
import { ResumeTemplate } from '@/templates/ResumeTemplate';

export const metadata = getMetadata({
  title: 'Resume',
  description:
    'Resume of Cory Siebler, Senior Software Engineer. Experience, education, and technical skills in web development, Next.js, and Python.',
  path: '/resume',
});

export default function Resume() {
  return <ResumeTemplate />;
}
