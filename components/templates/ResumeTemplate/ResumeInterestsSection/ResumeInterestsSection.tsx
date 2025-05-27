import {
  BaseballIcon,
  BowlingIcon,
  CircuitIcon,
  DumbbellIcon,
  GamepadIcon,
  NatureIcon,
} from '@/atoms/icons';
import { Text } from '@/atoms/Text';
import { SectionHeader } from '@/molecules/SectionHeader';

function InterestListItem({
  interest,
  icon,
}: {
  interest: string;
  icon?: React.ReactNode;
}) {
  return (
    <li className="flex gap-6">
      {icon && <span className="text-tint-darkest">{icon}</span>}
      <Text className="text-tint-darkest">{interest}</Text>
    </li>
  );
}

export function ResumeInterestsSection() {
  return (
    <section className="flex flex-col gap-4 p-4" id="interests">
      <SectionHeader title="Interests" />
      <ul className="ml-5 flex flex-col gap-4">
        <InterestListItem interest="Softball" icon={<BaseballIcon />} />
        <InterestListItem interest="Bowling" icon={<BowlingIcon />} />
        <InterestListItem
          interest="Arduino & Raspberry Pi"
          icon={<CircuitIcon />}
        />
        <InterestListItem interest="Fitness" icon={<DumbbellIcon />} />
        <InterestListItem interest="eSports" icon={<GamepadIcon />} />
        <InterestListItem interest="Hiking" icon={<NatureIcon />} />
      </ul>
    </section>
  );
}
