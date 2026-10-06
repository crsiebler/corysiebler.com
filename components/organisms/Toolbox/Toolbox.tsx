import { skills } from '@/constants/skills';
import { skillIcons } from '@/molecules/SkillCard/SkillCard';

const toolLabels: Partial<Record<keyof typeof skillIcons, string>> = {
  AwsIcon: 'AWS',
  ChatGptIcon: 'ChatGPT',
  ChromaDbIcon: 'ChromaDB',
  GitHubActionsIcon: 'GitHub Actions',
  GraphqlIcon: 'GraphQL',
  JavaScriptIcon: 'JavaScript',
  LangChainIcon: 'LangChain',
  LangGraphIcon: 'LangGraph',
  McpIcon: 'MCP',
  MongoDbIcon: 'MongoDB',
  NextJsIcon: 'Next.js',
  NodeJsIcon: 'Node.js',
  OpenCodeIcon: 'OpenCode',
  PhpIcon: 'PHP',
  PostgreSqlIcon: 'PostgreSQL',
  RaspberryPiIcon: 'Raspberry Pi',
  TypeScriptIcon: 'TypeScript',
};

export function Toolbox() {
  return (
    <details className="resume-disclosure">
      <summary>
        Toolbox <span aria-hidden="true">+</span>
      </summary>
      <div className="resume-disclosure-content">
        <p className="mb-6 text-sm">
          A closer look at the tools behind my work and experiments.
        </p>
        <div className="space-y-6">
          {Object.entries(skills).map(([group, { icons }]) => (
            <div key={group}>
              <h3 className="text-foreground mb-3 text-sm font-medium">
                {group}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-3">
                {icons.map((name) => {
                  const iconName = name as keyof typeof skillIcons;
                  const Icon = skillIcons[iconName];
                  const label =
                    toolLabels[iconName] ?? name.replace(/Icon$/, '');
                  return (
                    <li key={name} className="flex items-center gap-2 text-xs">
                      <span
                        className="text-foreground flex h-6 w-6 shrink-0 items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon size={20} fill="currentColor" />
                      </span>
                      <span>{label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
