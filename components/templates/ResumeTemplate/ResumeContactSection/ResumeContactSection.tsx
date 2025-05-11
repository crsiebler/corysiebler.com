import Link from 'next/link';
import { MailIcon, PhoneIcon, PinIcon, WebIcon } from '@/atoms/icons';
import { Text } from '@/atoms/Text';

export function ResumeContactSection() {
  return (
    <section className="flex flex-col gap-1 p-4">
      <Text className="text-primary" variant="h2" weight="light">
        Cory Siebler
      </Text>
      <Text component="h2" className="text-shade font-light" variant="h5">
        Senior Software Engineer
      </Text>
      <div className="flex flex-col">
        <Link aria-label="Phone" className="flex gap-2" href="tel:14803192922">
          <PhoneIcon size={24} />
          <Text className="my-auto" variant="caption">
            (480) 319-2922
          </Text>
        </Link>
        <Link
          aria-label="Email"
          className="flex gap-2"
          href="mailto:cory.siebler@pm.me"
        >
          <MailIcon size={24} />
          <Text className="my-auto" variant="caption">
            cory.siebler@pm.me
          </Text>
        </Link>
        <Link aria-label="Website" className="flex gap-2" href="/">
          <WebIcon size={24} />
          <Text className="my-auto" variant="caption">
            corysiebler.com
          </Text>
        </Link>
        <div aria-label="Location" className="flex gap-2">
          <PinIcon size={24} />
          <Text className="my-auto" variant="caption">
            Phoenix, AZ
          </Text>
        </div>
      </div>
    </section>
  );
}
