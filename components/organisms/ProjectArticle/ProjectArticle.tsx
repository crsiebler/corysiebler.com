import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';

interface ProjectArticleProps {
  description: string;
  image: React.ReactNode;
  link: string;
  title: string;
}

export function ProjectArticle({
  description,
  image,
  link,
  title,
}: ProjectArticleProps) {
  return (
    <article className="border-tint-light flex flex-col overflow-hidden rounded-lg border shadow-md">
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
        <LinkButton
          color="primary"
          className="p-0"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <Text variant="body2" uppercase weight="semibold">
            More Information
          </Text>
        </LinkButton>
      </div>
    </article>
  );
}
