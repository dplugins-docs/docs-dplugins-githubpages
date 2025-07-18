import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Scripts Organizer',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://testdocs.dplugins.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/plain-classes-gutenberg/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dplugins-docs', // Usually your GitHub org/user name.
  projectName: 'docs-dplugins-githubpages', // Usually your repo name.
  
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dplugins-docs/docs-dplugins-githubpages/tree/main/plain-classes-gutenberg/',
        },

        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsDir: 'docs',
        docsRouteBasePath: 'docs',
        indexDocs: true,
        indexPages: false,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/DPlugins-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Intro',
            href: '/docs/intro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Basics',
            href: '/docs/category/basics',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Extras',
            href: '/docs/category/extras',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Blog',
                href: 'https://updates.dplugins.com/',
              },
              {
                label: 'Code Snippets',
                href: 'https://code.dplugins.com/',
              },
              {
                label: 'WP Tailwing Hero',
                href: 'https://wptailwindhero.com/',
              },
            ],
          },         
          {
            title: 'Premium Plugins',
            items: [
              {
                label: 'Scripts Organizer',
                href: 'https://dplugins.com/downloads/scripts-organizer/',
              },
              {
                label: 'Self Hoster',
                href: 'https://dplugins.com/downloads/hoster/',
              },
              {
                label: 'WP Admin Cleaner',
                href: 'https://dplugins.com/downloads/wp-admin-cleaner/',
              },
              {
                label: 'Winden',
                href: 'https://dplugins.com/downloads/winden/',
              },
              {
                label: 'DevKit',
                href: 'https://dplugins.com/downloads/devkit/',
              },
              {
                label: 'Font Hero',
                href: 'https://dplugins.com/downloads/font-hero/',
              },
              {
                label: 'Swiss Knife Bricks',
                href: 'https://dplugins.com/downloads/swiss-knife-bricks/',
              },
              {
                label: 'Swiss Knife Oxygen',
                href: 'https://dplugins.com/downloads/swiss-knife/',
              },
              {
                label: 'Collaboration',
                href: 'https://dplugins.com/downloads/collaboration/',
              },      
              {
                label: 'Gutenberg Plain Classes',
                href: 'https://dplugins.com/downloads/plain-classes-gutenberg/',
              },
            ],
          },
          {
            title: 'Gutenberg Blocks',
            items: [
              {
                label: 'Lazyload for YouTube',
                href: 'https://wordpress.org/plugins/dblocks-youtube-lazyload/',
              },
              {
                label: 'DBlocks Finder',
                href: 'https://wordpress.org/plugins/dblocks-finder/',
              },
              {
                label: 'DBlocks CodePro',
                href: 'https://wordpress.org/plugins/dblocks-codepro/',
              },
              {
                label: 'DBlocks Hotspot',
                href: 'https://wordpress.org/plugins/dblocks-hotspot/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/dplugins',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@DPlugins',
              },
              {
                label: 'Support',
                href: 'https://support.dplugins.com/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DPlugins.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },


    }),
};

export default config;
