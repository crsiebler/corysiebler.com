import { ReactNode } from 'react';
import Link from 'next/link';
import { Accordion } from '@/atoms/Accordion';
import { Text } from '@/atoms/Text';

interface ExperienceArticleProps {
  image: ReactNode;
  title: string;
  location: string;
  roles: string[];
  technologies: string;
  href?: string;
}

export function ExperienceArticle({
  image,
  title,
  location,
  roles,
  technologies,
  href,
}: ExperienceArticleProps) {
  return (
    <article className="flex flex-col">
      <div className="flex flex-col">
        {image}
        {href ? (
          <Link
            className="text-blue hover:underline"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Text variant="h4">{title}</Text>
          </Link>
        ) : (
          <Text variant="h4">{title}</Text>
        )}
        <Text className="text-tint-darkest mb-2" variant="body1">
          {location}
        </Text>
      </div>
      <Accordion title="Roles and Responsibilities:">
        <ul className="list-disc">
          {roles.map((role, idx) => (
            <Text component="li" variant="body2" key={idx}>
              {role}
            </Text>
          ))}
        </ul>
      </Accordion>
      <Accordion title="Technologies:">
        <Text variant="body2">{technologies}</Text>
      </Accordion>
    </article>
  );
}
