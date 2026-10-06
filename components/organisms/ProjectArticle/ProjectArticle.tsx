import Link from 'next/link';
import { Text } from '@/atoms/Text';

interface ProjectArticleProps {
  description: string;
  image: React.ReactNode;
  link: string;
  linkLabel?: string;
  title: string;
}

export function ProjectArticle({
  description,
  image,
  link,
  linkLabel = 'Visit project',
  title,
}: ProjectArticleProps) {
  const external = link.startsWith('https://') || link.startsWith('http://');
  return (
    <article className="legacy-project flex flex-col overflow-hidden rounded-lg border">
      <div>
        <div className="relative h-64 w-full">{image}</div>
      </div>
      <div className="flex h-full flex-col justify-between gap-2 p-4">
        <Text
          component="h2"
          className="text-primary"
          variant="h5"
          weight="semibold"
        >
          {title}
        </Text>
        <Text className="mb-4 grow" variant="body2">
          {description}
        </Text>
        <Link
          className="text-link"
          href={link}
          rel={external ? 'noopener noreferrer' : undefined}
          target={external ? '_blank' : undefined}
        >
          <Text component="span" variant="body2" weight="medium">
            {linkLabel} <span aria-hidden="true">{external ? '↗' : '→'}</span>
          </Text>
        </Link>
      </div>
    </article>
  );
}
