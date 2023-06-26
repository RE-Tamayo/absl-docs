import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ABSL",
  description: "A database abstraction library for PHP.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/' },   
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Quick Start', link: '/getting-started/quick-start' }

        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'CRUD Operations', link: '/usage/' },
          { text: 'Authentication', link: '/usage/authentication' },
          { text: 'Data Validation', link: '/usage/data-validation' },
          { text: 'Input Sanitation', link: '/usage/input-sanitation' },
          { text: 'Examples', link: '/usage/examples' }
        ]
      },
      {
        text: 'Contribute',
        items: [
          { text: 'Contribution Guidelines', link: '/contribute/contributing' },
          { text: 'Contact', link: '/contribute/contact' },
          { text: 'Repository', link: 'https://github.com/RE-Tamayo/absl' },
          { text: 'Donate', link: 'https://youtube.com' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RE-Tamayo' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/emerjoe-rosas-401770213' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Emerjoe Rosas'
    }
  }
})
