import { Text } from '@/atoms/Text';

export function HomeTemplate() {
  return (
    <main className="container bg-white p-4">
      <div className="flex flex-col gap-1">
        <Text variant="h1" weight="light">
          Cory Siebler
        </Text>
        <Text
          className="text-tint-darker"
          component="h2"
          variant="h4"
          weight="light"
        >
          Senior Software Engineer
        </Text>
      </div>
    </main>
  );
}
