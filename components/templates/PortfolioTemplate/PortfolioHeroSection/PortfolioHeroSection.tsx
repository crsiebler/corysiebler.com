import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';

export function PortfolioHeroSection() {
  return (
    <section
      className="text-primary container mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center"
      id="hero"
    >
      <Text variant="h1">Notable Projects</Text>
      <Text className="text-tint-darkest" variant="body1">
        A compilation of various projects containing contributions from me. From
        technical support to project management, I have a wide array of
        experience. Currently, my professional career focuses on web design and
        full-stack development using the latest technologies.
      </Text>
      <div className="flex gap-4">
        <LinkButton
          className="px-4 py-2 hover:shadow-md"
          color="primary"
          href="mailto:cory.siebler@pm.me"
          rounded="sm"
          variant="contained"
        >
          <Text component="span" uppercase>
            Contact Me
          </Text>
        </LinkButton>
        <LinkButton
          className="px-4 py-2 hover:shadow-md"
          href="/resume"
          color="primary"
          rounded="sm"
          variant="outlined"
        >
          <Text component="span" uppercase>
            See Resume
          </Text>
        </LinkButton>
      </div>
    </section>
  );
}
