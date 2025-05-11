import { PdfIcon } from '@/atoms/icons';
import { LinkButton } from '@/atoms/LinkButton';
import { Text } from '@/atoms/Text';

export function ResumeHeroSection() {
  return (
    <header className="flex flex-col items-center gap-6">
      <Text variant="h1" weight="light">
        My Experience
      </Text>
      <div className="flex justify-center gap-4">
        <LinkButton
          className="h-full"
          color="primary"
          href="https://docs.google.com/document/d/1RqyY9j_5iwr4sg6hJGz0-6dbhUcQbUe6yhzmMff9g0Q/edit?usp=sharing"
          rounded="sm"
          target="_blank"
          variant="contained"
        >
          <Text
            className="flex gap-2 uppercase"
            component="span"
            variant="body2"
          >
            Download Resume
            <PdfIcon size={20} />
          </Text>
        </LinkButton>
        <LinkButton
          href="/portfolio"
          color="primary"
          rounded="sm"
          variant="outlined"
        >
          <Text className="uppercase" component="span" variant="body2">
            See Portfolio
          </Text>
        </LinkButton>
      </div>
    </header>
  );
}
