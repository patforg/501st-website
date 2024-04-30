import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "501st Legion Alliance",
  description: "Tips and tricks for LastWar",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    darkMode: true,

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Getting Stronger', link: '/guides/getting-stronger/' },
          {
            text: 'Events',
            collapsed: false, 
            items: [
              {
                text: 'Alliance Duel (VS)',
                link: '/guides/alliance-duel/',
                collapsed: false, 
                items: [
                  { text: 'Radar Training', link: '/guides/alliance-duel/radar-training' },
                  { text: 'Base Expansion', link: '/guides/alliance-duel/base-expansion' },
                  { text: 'Age of Science', link: '/guides/alliance-duel/age-of-science' },
                  { text: 'Train Heroes', link: '/guides/alliance-duel/train-heroes' },
                  { text: 'Total Mobilization', link: '/guides/alliance-duel/total-mobilization' },
                  { text: 'Enemy Buster', link: '/guides/alliance-duel/enemy-buster' },
                  { text: 'Day of rest', link: '/guides/alliance-duel/day-of-rest' },
                ]
              },
              { text: 'Marshall\'s Guard', link: '/guides/marshalls-guard/' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/patforg/501st-website' }
    ]
  }
})
