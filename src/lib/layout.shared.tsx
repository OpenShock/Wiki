import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <img
          src="/branding/LogoBakedFont.svg"
          alt={appName}
          style={{ height: 24 }}
        />
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Guides', url: '/guides/quickstart/what-you-need' },
      { text: 'Hardware', url: '/hardware' },
      { text: 'Vendors', url: '/vendors/hardware' },
      { text: 'Developer', url: '/dev' },
      { text: 'Help', url: '/troubleshooting/hub' },
      {
        text: 'Discord',
        url: 'https://discord.gg/OpenShock',
        external: true,
      },
    ],
  };
}
