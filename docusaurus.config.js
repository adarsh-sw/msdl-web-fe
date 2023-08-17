// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MSDL Documentation',
  tagline: 'Digital Library on life, sustainability, and culture in and around the Mekong River Basin',
  url: 'thankful-moss-09230b900.3.azurestaticapps.net',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/docs/img/favicon.png',
  organizationName: 'Mekong School',
  projectName: 'msdl',
  staticDirectories: ['static', 'public'],
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: ({ docPath }) => `https://github.com/hasura/graphql-engine/edit/master/docs/docs/${docPath}`,
          // docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          exclude: ['**/*.wip'],
          breadcrumbs: true,
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.x',
              badge: true,
              path: 'latest',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // image: 'https://library.mekongschool.org/docs/img/og-image.png',
      image: '/img/og-image.png',
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rest', 'http', 'haskell', 'plsql', 'docker', 'nginx', 'markdown'],
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'MSDL Logo',
          src: '/img/logo.svg',
          srcDark: '/img/logo-light.svg',
          href: '/',
        },
        items: [
          {
            to: 'https://library.mekongschool.org/search?type=all',
            label: 'Resources',
            position: 'left',
          },
          {
            to: 'https://library.mekongschool.org/subscription',
            label: 'Subscriptions',
            position: 'left',
          },
          {
            to: 'https://library.mekongschool.org/explore',
            label: 'Explore',
            position: 'left',
          },
          {
            to: '/latest/changelog',
            label: "What's New",
            position: 'left',
          },
          {
            to: 'https://mekongschool.org',
            label: 'Mekong School',
            position: 'left',
          },
          {
            to: 'https://library.mekongschool.org',
            label: 'Get Started',
            position: 'right',
            className: 'nav-link_getting-started',
          },
        ],
      },
    }),
};

module.exports = config;
