import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/OpenShock',
    links: [
      {
        type: 'main',
        text: 'Discord',
        url: 'https://discord.gg/OpenShock',
        external: true,
      },
    ],
    nav: {
      title: 'OpenShock Wiki',
      url: '/',
    },
  };
}
