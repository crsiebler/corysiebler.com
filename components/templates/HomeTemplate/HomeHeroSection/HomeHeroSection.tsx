import Link from 'next/link';
import { InfoIcon } from '@/atoms/icons';
import { HeadshotImage } from '@/atoms/Images/HeadshotImage';
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
      <div className="flex gap-2">
        <LinkButton
          className="h-full"
          color="primary"
          href="/resume"
          variant="contained"
        >
          <span className="flex flex-row gap-2">
            <Text
              component="span"
              className="my-auto uppercase"
              variant="body2"
            >
              Resume
            </Text>
            <InfoIcon size={20} />
          </span>
        </LinkButton>
        <LinkButton
          className="h-full"
          color="primary"
          href="/portfolio"
          variant="outlined"
        >
          <Text
            component="span"
            className="mx-auto flex flex-row uppercase"
            variant="body2"
          >
            Portfolio
          </Text>
        </LinkButton>
      </div>
      <div className="flex w-full items-center justify-center">
        <HeadshotImage />
      </div>
    </section>
  );
}
