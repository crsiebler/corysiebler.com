import Link from 'next/link';
import { InfoIcon } from '@/atoms/icons';
import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';

export function HomeHeroSection() {
  return (
    <section className="flex flex-col gap-4 px-4" id="hero">
      <Text variant="h1" weight="light">
        Cory Siebler
      </Text>
      <Text
        className="text-tint-darkest"
        component="h2"
        variant="h4"
        weight="light"
      >
        Senior Software Engineer
      </Text>
      <Text className="text-shade" component="p" variant="body1">
        I am a full-stack developer specializing in web development with Next.js
        and Python. Want to see more of my work? Check out my{' '}
        <Link
          className="text-blue hover:underline"
          href="https://github.com/crsiebler"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>{' '}
        account.
      </Text>
      <div className="flex gap-4">
        <LinkButton
          className="h-full uppercase"
          color="primary"
          href="/resume"
          variant="contained"
        >
          <span className="flex flex-row gap-2">
            Resume
            <InfoIcon />
          </span>
        </LinkButton>
        <LinkButton
          className="h-full uppercase"
          color="primary"
          href="/portfolio"
          variant="outlined"
        >
          Portfolio
        </LinkButton>
      </div>
    </section>
  );
}
