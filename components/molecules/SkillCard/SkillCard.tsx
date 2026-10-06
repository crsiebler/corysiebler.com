import {
  ArduinoIcon,
  Auth0Icon,
  AwsIcon,
  BabelIcon,
  BitbucketIcon,
  BunIcon,
  ChakraUiIcon,
  ChatGptIcon,
  ChromaDbIcon,
  CloudflareIcon,
  ComposerIcon,
  CopilotIcon,
  CypressIcon,
  Css3Icon,
  DeepSeekIcon,
  DjangoIcon,
  DockerIcon,
  FlaskIcon,
  GitHubActionsIcon,
  GitHubIcon,
  GitIcon,
  GraphqlIcon,
  HerokuIcon,
  Html5Icon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  JestIcon,
  JetBrainsIcon,
  JiraIcon,
  KubernetesIcon,
  LangChainIcon,
  LangGraphIcon,
  MaterialUiIcon,
  McpIcon,
  MidjourneyIcon,
  MongoDbIcon,
  MySqlIcon,
  NextJsIcon,
  NginxIcon,
  NodeJsIcon,
  OllamaIcon,
  OpenCodeIcon,
  OracleIcon,
  PhpIcon,
  PineconeIcon,
  PlaywrightIcon,
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
  TerraformIcon,
  TypeScriptIcon,
  VercelIcon,
  VitestIcon,
  VisualStudioCodeIcon,
  VueIcon,
  WebpackIcon,
} from '@/atoms/icons';
import { Text } from '@/atoms/Text';

interface SkillCardProps {
  skillName: string;
  description: string;
  icons: string[];
}

export const skillIcons = {
  ArduinoIcon,
  Auth0Icon,
  AwsIcon,
  BabelIcon,
  BitbucketIcon,
  BunIcon,
  ChakraUiIcon,
  ChatGptIcon,
  ChromaDbIcon,
  CloudflareIcon,
  ComposerIcon,
  CopilotIcon,
  CypressIcon,
  Css3Icon,
  DeepSeekIcon,
  DjangoIcon,
  DockerIcon,
  FlaskIcon,
  GitHubActionsIcon,
  GitHubIcon,
  GitIcon,
  GraphqlIcon,
  HerokuIcon,
  Html5Icon,
  JavaIcon,
  JavaScriptIcon,
  JenkinsIcon,
  JestIcon,
  JetBrainsIcon,
  JiraIcon,
  KubernetesIcon,
  LangChainIcon,
  LangGraphIcon,
  MaterialUiIcon,
  McpIcon,
  MidjourneyIcon,
  MongoDbIcon,
  MySqlIcon,
  NextJsIcon,
  NginxIcon,
  NodeJsIcon,
  OllamaIcon,
  OpenCodeIcon,
  OracleIcon,
  PhpIcon,
  PineconeIcon,
  PlaywrightIcon,
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
  TerraformIcon,
  TypeScriptIcon,
  VercelIcon,
  VitestIcon,
  VisualStudioCodeIcon,
  VueIcon,
  WebpackIcon,
};

export function SkillCard({ skillName, description, icons }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex gap-2">
        {icons.map((iconName) => {
          const IconComponent = skillIcons[iconName as keyof typeof skillIcons];
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
