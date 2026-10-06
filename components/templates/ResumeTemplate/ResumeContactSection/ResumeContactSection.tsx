import Link from 'next/link';
import { MailIcon, PinIcon, WebIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';
import { email, emailUrl } from '@/constants/contact';

export function ResumeContactSection() {
  return (
    <section className="flex flex-col gap-1 p-6 lg:flex-row" id="contact">
      <div className="flex grow flex-col">
        <Text component="p" className="text-accent" variant="h2" weight="light">
          Cory Siebler
        </Text>
        <Text component="p" className="text-muted font-light" variant="h5">
          Principal Software Engineer
        </Text>
      </div>
      <div className="flex flex-col gap-1 lg:pr-56">
        <Link className="flex gap-2" href={emailUrl}>
          <span aria-hidden="true">
            <MailIcon size={24} />
          </span>
          <Text className="my-auto" variant="caption">
            {email}
          </Text>
        </Link>
        <Link className="flex gap-2" href="/">
          <span aria-hidden="true">
            <WebIcon size={24} />
          </span>
          <Text className="my-auto" variant="caption">
            corysiebler.com
          </Text>
        </Link>
        <div className="flex gap-2">
          <span aria-hidden="true">
            <PinIcon size={24} />
          </span>
          <Text className="my-auto" variant="caption">
            Phoenix, AZ
          </Text>
        </div>
      </div>
    </section>
  );
}
