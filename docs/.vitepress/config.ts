import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: 'OpenShock Wiki',
  description: 'Documentation for OpenShock',
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    logo: '/branding/LogoBakedFont.svg',
    search: { 
      provider: 'algolia',
      options: {
        appId: 'TM973D0RMF',
        apiKey: '63f489250dfedfd861f58395335ee908',
        indexName: 'Algolia OpenShock Crawler'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenShock' },
      { icon: 'discord', link: 'https://discord.gg/OpenShock' }
    ],
    editLink: {
      pattern: 'https://github.com/OpenShock/Wiki/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav,
    sidebar
  }
})

