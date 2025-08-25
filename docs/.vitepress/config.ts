import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: 'OpenShock Wiki',
  description: 'Documentation for OpenShock',
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    logo: '/static/branding/LogoBakedFont.svg',
    search: { provider: 'local' },
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

