import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RaiRin-AI",
  description: "Advanced AI Performance Module",
  
  // Load FontAwesome
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'RaiRin-AI',

    // --- NAVIGASI (English Only) ---
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/guide/features' },
      { text: 'Download', link: '/download' }
    ],

    // --- SIDEBAR (English Only) ---
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/intro' },
          { text: 'Installation', link: '/guide/install' }
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'Thunder Mode', link: '/guide/thunder' },
          { text: 'AI Command', link: '/guide/ai' },
          { text: 'Render Pipeline', link: '/guide/render' }
        ]
      }
    ],

    // Sosial Media
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username/RaiRin-AI' },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/></svg>' }, 
        link: 'https://t.me/Kaminarich_Here' 
      }
    ],

    footer: { message: 'Released under MIT License.', copyright: '© 2026 RaiRin Dev.' },
    search: { provider: 'local' }
  }
})
