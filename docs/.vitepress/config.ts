import { defineConfig } from 'vitepress'
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'

export default defineConfig({
  title: 'OpenShock Wiki',
  description: 'Documentation for OpenShock',
  lastUpdated: true,
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenShock/Wiki' },
    ],
    editLink: {
      pattern: 'https://github.com/OpenShock/Wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      {
        text: 'Home',
        items: [
          { text: 'Home', link: '/' },
          { text: 'FAQ', link: '/home/faq' },
          { text: 'Safety', link: '/home/safety-rules' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'Quickstart', link: '/quickstart/what-you-need' },
          {
            text: 'OpenShock',
            items: [
              { text: 'How to flash your board', link: '/guides/openshock-how-to-flash-your-board' },
              { text: 'First setup', link: '/guides/openshock-first-setup' },
              { text: 'How to update', link: '/guides/openshock-how-to-update' },
              { text: 'Sharelinks', link: '/guides/openshock-sharelinks' },
              { text: 'Sharecodes', link: '/guides/openshock-sharecodes' },
              { text: 'Offline remote setup', link: '/guides/openshock-offline-remote-setup' },
            ],
          },
          {
            text: 'ShockOsc',
            items: [
              { text: 'Basic', link: '/guides/shockosc-basic' },
              { text: 'Avatar setup VRC', link: '/guides/shockosc-avatar-setup-vrc' },
              { text: 'Avatar setup CVR', link: '/guides/shockosc-avatar-setup-cvr' },
              { text: 'Parameters', link: '/guides/shockosc-parameters' },
            ],
          },
          { text: 'Self Hosting', link: '/guides/selfhosting/' },
        ],
      },
      {
        text: 'Do It Yourself',
        items: [
          { text: 'Overview', link: '/diy/' },
          { text: 'Hardware', link: '/diy/hardware-buying' },
          { text: 'Assembling', link: '/diy/assembling' },
        ],
      },
      {
        text: 'Developer',
        items: [
          { text: 'Overview', link: '/dev/' },
          {
            text: 'Contributing',
            items: [
              { text: 'Overview', link: '/dev/contributing/' },
              { text: 'Compile firmware', link: '/dev/contributing/compile-firmware' },
              { text: 'Backend', link: '/dev/contributing/backend' },
            ],
          },
        ],
      },
      {
        text: 'Hardware',
        items: [
          {
            text: 'Shockers',
            items: [
              { text: 'Overview', link: '/hardware/shockers/' },
              { text: 'Caixianlin', link: '/hardware/shockers/caixianlin' },
              { text: 'Petrainer', link: '/hardware/shockers/petrainer' },
            ],
          },
          {
            text: 'Remotes',
            items: [
              { text: 'Identifying', link: '/hardware/remotes/identifying' },
            ],
          },
          {
            text: 'Boards',
            items: [
              { text: 'Overview', link: '/hardware/boards/' },
              { text: 'OpenShock Core v1', link: '/hardware/boards/openshock/core-v1' },
              { text: 'OpenShock Core v2', link: '/hardware/boards/openshock/core-v2' },
              { text: 'PiShock 2023', link: '/hardware/boards/pishock/2023-pishock' },
              { text: 'PiShock Lite 2021Q3', link: '/hardware/boards/pishock/2021q3-lite' },
              { text: 'PiShock Plus 2021Q1', link: '/hardware/boards/pishock/2021q1-plus' },
              { text: 'Seeed XIAO ESP32S3', link: '/hardware/boards/seeed/xiao-esp32s3' },
              { text: 'Wemos D1 mini ESP32', link: '/hardware/boards/wemos/d1-mini-esp32' },
              { text: 'Wemos Lolin S2 mini', link: '/hardware/boards/wemos/lolin-s2-mini' },
              { text: 'Wemos Lolin S3', link: '/hardware/boards/wemos/lolin-s3' },
              { text: 'DFRobot Firebeetle', link: '/hardware/boards/dfr-firebeetle/dfr-firebeetle' },
              { text: 'ESP32-S3 DORx', link: '/hardware/boards/china/esp32s3-dorx' },
            ],
          },
          {
            text: 'Transmitter',
            items: [
              { text: 'Overview', link: '/hardware/transmitter/' },
              { text: 'Open Smart', link: '/hardware/transmitter/china/open-smart' },
            ],
          },
        ],
      },
      {
        text: 'Vendors',
        items: [
          {
            text: 'Hardware',
            items: [
              { text: 'Overview', link: '/vendors/hardware/' },
              { text: '0x6f78', link: '/vendors/hardware/0x6f78' },
              { text: 'Bosjesman', link: '/vendors/hardware/bosjesman' },
              { text: 'Luc', link: '/vendors/hardware/luc' },
              { text: 'NamelessNanashi', link: '/vendors/hardware/namelessnanashi' },
              { text: 'Nerex', link: '/vendors/hardware/nerex' },
              { text: 'Nullstalgia', link: '/vendors/hardware/nullstalgia' },
              { text: 'SillyPupKit', link: '/vendors/hardware/sillypupkit' },
            ],
          },
        ],
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Hub', link: '/troubleshooting/hub' },
          { text: 'ShockOsc', link: '/troubleshooting/shockosc' },
          { text: 'Shocker pairing', link: '/troubleshooting/shocker-pairing' },
        ],
      },
      {
        text: 'Legal and Privacy',
        items: [
          { text: 'Terms and Conditions', link: '/legal/terms-and-conditions' },
          { text: 'Code of Conduct', link: '/legal/code-of-conduct' },
          { text: 'License', link: '/legal/license' },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Home',
          items: [
            { text: 'Home', link: '/' },
            { text: 'FAQ', link: '/home/faq' },
            { text: 'Safety', link: '/home/safety-rules' },
          ],
        },
      ],
      '/quickstart/': [
        {
          text: 'Quickstart',
          items: [
            { text: 'What you need', link: '/quickstart/what-you-need' },
          ],
        },
      ],
      '/guides/': [
        {
          text: 'OpenShock',
          items: [
            { text: 'How to flash your board', link: '/guides/openshock-how-to-flash-your-board' },
            { text: 'First setup', link: '/guides/openshock-first-setup' },
            { text: 'How to update', link: '/guides/openshock-how-to-update' },
            { text: 'Sharelinks', link: '/guides/openshock-sharelinks' },
            { text: 'Sharecodes', link: '/guides/openshock-sharecodes' },
            { text: 'Offline remote setup', link: '/guides/openshock-offline-remote-setup' },
          ],
        },
        {
          text: 'ShockOsc',
          items: [
            { text: 'Basic', link: '/guides/shockosc-basic' },
            { text: 'Avatar setup VRC', link: '/guides/shockosc-avatar-setup-vrc' },
            { text: 'Avatar setup CVR', link: '/guides/shockosc-avatar-setup-cvr' },
            { text: 'Parameters', link: '/guides/shockosc-parameters' },
          ],
        },
        {
          text: 'Self Hosting',
          items: [
            { text: 'Overview', link: '/guides/selfhosting/' },
          ],
        },
      ],
      '/diy/': [
        {
          text: 'Do It Yourself',
          items: [
            { text: 'Overview', link: '/diy/' },
            { text: 'Hardware', link: '/diy/hardware-buying' },
            { text: 'Assembling', link: '/diy/assembling' },
          ],
        },
      ],
      '/dev/': [
        {
          text: 'Developer',
          items: [
            { text: 'Overview', link: '/dev/' },
            { text: 'Contributing', link: '/dev/contributing/' },
            { text: 'Compile firmware', link: '/dev/contributing/compile-firmware' },
            { text: 'Backend', link: '/dev/contributing/backend' },
          ],
        },
      ],
      '/hardware/': [
        {
          text: 'Shockers',
          items: [
            { text: 'Overview', link: '/hardware/shockers/' },
            { text: 'Caixianlin', link: '/hardware/shockers/caixianlin' },
            { text: 'Petrainer', link: '/hardware/shockers/petrainer' },
          ],
        },
        {
          text: 'Remotes',
          items: [
            { text: 'Identifying', link: '/hardware/remotes/identifying' },
          ],
        },
        {
          text: 'Boards',
          items: [
            { text: 'Overview', link: '/hardware/boards/' },
            { text: 'OpenShock Core v1', link: '/hardware/boards/openshock/core-v1' },
            { text: 'OpenShock Core v2', link: '/hardware/boards/openshock/core-v2' },
            { text: 'PiShock 2023', link: '/hardware/boards/pishock/2023-pishock' },
            { text: 'PiShock Lite 2021Q3', link: '/hardware/boards/pishock/2021q3-lite' },
            { text: 'PiShock Plus 2021Q1', link: '/hardware/boards/pishock/2021q1-plus' },
            { text: 'Seeed XIAO ESP32S3', link: '/hardware/boards/seeed/xiao-esp32s3' },
            { text: 'Wemos D1 mini ESP32', link: '/hardware/boards/wemos/d1-mini-esp32' },
            { text: 'Wemos Lolin S2 mini', link: '/hardware/boards/wemos/lolin-s2-mini' },
            { text: 'Wemos Lolin S3', link: '/hardware/boards/wemos/lolin-s3' },
            { text: 'DFRobot Firebeetle', link: '/hardware/boards/dfr-firebeetle/dfr-firebeetle' },
            { text: 'ESP32-S3 DORx', link: '/hardware/boards/china/esp32s3-dorx' },
          ],
        },
        {
          text: 'Transmitter',
          items: [
            { text: 'Overview', link: '/hardware/transmitter/' },
            { text: 'Open Smart', link: '/hardware/transmitter/china/open-smart' },
          ],
        },
      ],
      '/vendors/': [
        {
          text: 'Hardware',
          items: [
            { text: 'Overview', link: '/vendors/hardware/' },
            { text: '0x6f78', link: '/vendors/hardware/0x6f78' },
            { text: 'Bosjesman', link: '/vendors/hardware/bosjesman' },
            { text: 'Luc', link: '/vendors/hardware/luc' },
            { text: 'NamelessNanashi', link: '/vendors/hardware/namelessnanashi' },
            { text: 'Nerex', link: '/vendors/hardware/nerex' },
            { text: 'Nullstalgia', link: '/vendors/hardware/nullstalgia' },
            { text: 'SillyPupKit', link: '/vendors/hardware/sillypupkit' },
          ],
        },
      ],
      '/troubleshooting/': [
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Hub', link: '/troubleshooting/hub' },
            { text: 'ShockOsc', link: '/troubleshooting/shockosc' },
            { text: 'Shocker pairing', link: '/troubleshooting/shocker-pairing' },
          ],
        },
      ],
      '/legal/': [
        {
          text: 'Legal and Privacy',
          items: [
            { text: 'Terms and Conditions', link: '/legal/terms-and-conditions' },
            { text: 'Code of Conduct', link: '/legal/code-of-conduct' },
            { text: 'License', link: '/legal/license' },
          ],
        },
      ],
    },
  },
  async transformHtml(code, _id, ctx) {
    const file = path.join(process.cwd(), 'docs', ctx.pageData.relativePath)
    if (existsSync(file)) {
      try {
        const out = execSync(`git --no-pager shortlog -sne HEAD -- "${file}"`, { encoding: 'utf-8' })
        const contributors = out
          .split('\n')
          .filter(Boolean)
          .map((line) => line.replace(/^\s*\d+\s+/, '').replace(/\s+<.*>/, ''))
        if (contributors.length) {
          const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          const items = contributors.map((name) => `<li>${escape(name)}</li>`).join('')
          return code.replace('</div></div></main>', `<div class="contributors"><h2>Contributors</h2><ul>${items}</ul></div></div></div></main>`)
        }
      } catch {
        // ignore git errors
      }
    }
    return code
  },
})

