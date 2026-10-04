import { skillIcons } from '@/molecules/SkillCard/SkillCard';

const technologyIcons = {
  Arduino: 'ArduinoIcon',
  AWS: 'AwsIcon',
  Bitbucket: 'BitbucketIcon',
  Bun: 'BunIcon',
  ChatGPT: 'ChatGptIcon',
  ChromaDB: 'ChromaDbIcon',
  Cloudflare: 'CloudflareIcon',
  CSS3: 'Css3Icon',
  Cypress: 'CypressIcon',
  Django: 'DjangoIcon',
  Docker: 'DockerIcon',
  Flask: 'FlaskIcon',
  Git: 'GitIcon',
  GitHub: 'GitHubIcon',
  'GitHub Actions': 'GitHubActionsIcon',
  GraphQL: 'GraphqlIcon',
  Heroku: 'HerokuIcon',
  HTML5: 'Html5Icon',
  Java: 'JavaIcon',
  JavaScript: 'JavaScriptIcon',
  Jenkins: 'JenkinsIcon',
  Jest: 'JestIcon',
  JetBrains: 'JetBrainsIcon',
  Jira: 'JiraIcon',
  Kubernetes: 'KubernetesIcon',
  LangChain: 'LangChainIcon',
  LangGraph: 'LangGraphIcon',
  'Material-UI': 'MaterialUiIcon',
  MCP: 'McpIcon',
  MongoDB: 'MongoDbIcon',
  MySQL: 'MySqlIcon',
  'Next.js': 'NextJsIcon',
  Nginx: 'NginxIcon',
  'Node.js': 'NodeJsIcon',
  Ollama: 'OllamaIcon',
  OpenCode: 'OpenCodeIcon',
  Oracle: 'OracleIcon',
  'Oracle Exadata': 'OracleIcon',
  PHP: 'PhpIcon',
  Pinecone: 'PineconeIcon',
  Playwright: 'PlaywrightIcon',
  PostgreSQL: 'PostgreSqlIcon',
  Python: 'PythonIcon',
  RabbitMQ: 'RabbitMqIcon',
  'Raspberry Pi': 'RaspberryPiIcon',
  React: 'ReactIcon',
  Redis: 'RedisIcon',
  Sass: 'SassIcon',
  Spring: 'SpringIcon',
  Storybook: 'StorybookIcon',
  Swagger: 'SwaggerIcon',
  Symfony: 'SymfonyIcon',
  Tailwind: 'TailwindIcon',
  'Tailwind CSS': 'TailwindIcon',
  Terraform: 'TerraformIcon',
  TypeScript: 'TypeScriptIcon',
  Vercel: 'VercelIcon',
  Vitest: 'VitestIcon',
  'VS Code': 'VisualStudioCodeIcon',
  'Vue.js': 'VueIcon',
  Webpack: 'WebpackIcon',
} as const satisfies Record<string, keyof typeof skillIcons>;

export function TechnologyBadges({
  technologies,
  label,
}: {
  technologies: readonly string[];
  label: string;
}) {
  return (
    <ul aria-label={label} className="flex list-none flex-wrap gap-2 p-0">
      {technologies.map((technology) => {
        const iconName =
          technologyIcons[technology as keyof typeof technologyIcons];
        const Icon = iconName ? skillIcons[iconName] : undefined;
        return (
          <li key={technology} className="max-w-full">
            <span className="text-foreground border-line inline-flex min-h-7 max-w-full items-center gap-1.5 rounded border bg-[var(--workspace-tint)] px-2 py-1 font-mono text-xs leading-5">
              {Icon && (
                <span
                  aria-hidden="true"
                  className="flex h-4 w-4 shrink-0 items-center justify-center"
                >
                  <Icon
                    size={16}
                    fill={
                      iconName === 'NextJsIcon' ? 'currentColor' : undefined
                    }
                  />
                </span>
              )}
              <span>{technology}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
