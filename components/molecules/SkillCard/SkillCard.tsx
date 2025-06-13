import {
  ArduinoIcon,
  Auth0Icon,
  AwsIcon,
  BabelIcon,
  BitbucketIcon,
  ChakraUiIcon,
  ChatGptIcon,
  ComposerIcon,
  CopilotIcon,
  Css3Icon,
  DeepSeekIcon,
  DjangoIcon,
  DockerIcon,
  FlaskIcon,
  GitHubIcon,
  GitIcon,
  GraphqlIcon,
  HerokuIcon,
  Html5Icon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  JetBrainsIcon,
  JiraIcon,
  KubernetesIcon,
  MaterialUiIcon,
  MidjourneyIcon,
  MySqlIcon,
  NextJsIcon,
  NginxIcon,
  NodeJsIcon,
  OracleIcon,
  PhpIcon,
  PostgreSqlIcon,
  PythonIcon,
  RabbitMqIcon,
  RaspberryPiIcon,
  ReactIcon,
  RedisIcon,
  SassIcon,
  SpringIcon,
  StorybookIcon,
  SwaggerIcon,
  SymfonyIcon,
  TailwindIcon,
  VercelIcon,
  VisualStudioCodeIcon,
  WebpackIcon,
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
  BitbucketIcon,
  ChakraUiIcon,
  ChatGptIcon,
  ComposerIcon,
  CopilotIcon,
  Css3Icon,
  DeepSeekIcon,
  DjangoIcon,
  DockerIcon,
  FlaskIcon,
  GitHubIcon,
  GitIcon,
  GraphqlIcon,
  HerokuIcon,
  Html5Icon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  JetBrainsIcon,
  JiraIcon,
  KubernetesIcon,
  MaterialUiIcon,
  MidjourneyIcon,
  MySqlIcon,
  NextJsIcon,
  NginxIcon,
  NodeJsIcon,
  OracleIcon,
  PhpIcon,
  PostgreSqlIcon,
  PythonIcon,
  RabbitMqIcon,
  RaspberryPiIcon,
  ReactIcon,
  RedisIcon,
  SassIcon,
  SpringIcon,
  StorybookIcon,
  SwaggerIcon,
  SymfonyIcon,
  TailwindIcon,
  VercelIcon,
  VisualStudioCodeIcon,
  WebpackIcon,
};

export function SkillCard({ skillName, description, icons }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex gap-2">
        {icons.map((iconName) => {
          const IconComponent = Icons[iconName as keyof typeof Icons];
          if (!IconComponent) {
            console.error(`Icon "${iconName}" does not exist in Icons.`);
            return null;
          }
          return <IconComponent key={iconName} />;
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
