import {
  ArduinoIcon,
  Auth0Icon,
  AwsIcon,
  BabelIcon,
  Css3Icon,
  Html5Icon,
  JavaScriptIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
} from '@/atoms/icons';
import { Text } from '@/atoms/Text';

interface SkillCardProps {
  skillName: string;
  description: string;
  icons: string[];
}

const Icons = {
  ArduinoIcon,
  Auth0Icon,
  AwsIcon,
  BabelIcon,
  Css3Icon,
  Html5Icon,
  JavaScriptIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
};

export function SkillCard({ skillName, description, icons }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex gap-2">
        {icons.map((iconName) => {
          const IconComponent = Icons[iconName as keyof typeof Icons];
          return IconComponent ? <IconComponent key={iconName} /> : null;
        })}
      </div>
      <Text component="h4" variant="h6">
        {skillName}
      </Text>
      <Text className="text-shade" component="p" variant="body2">
        {description}
      </Text>
    </div>
  );
}
