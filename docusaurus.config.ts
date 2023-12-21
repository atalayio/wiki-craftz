import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CraftZ Wiki',
  tagline: 'CraftZ Survival sunucusun wiki adresine göz at.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.craftzsurvival.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StarLoad Games', // Usually your GitHub org/user name.
  projectName: 'CraftZ Survival Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CraftZ Survival Wiki',
      logo: {
        alt: 'CraftZ Survival Wiki',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Genel Bilgiler',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BİLGİLER',
          items: [
            {
              label: 'Genel Bilgiler',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'TOPLULUK',
          items: [
            {
              label: 'İnstagram',
              href: 'https://www.instagram.com/craftzsurvival/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/craftz',
            },
            {
              label: 'TikTok',
              href: 'https://tiktok.com/',
            },
          ],
        },
        {
          title: 'FAZLASI',
          items: [
            {
              label: 'Canlı Harita',
              href: 'https://harita.craftzsurvival.com/',
            },
          ],
        },
      ],
      copyright: `Copyright StarLoad Games © ${new Date().getFullYear()} All right reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
