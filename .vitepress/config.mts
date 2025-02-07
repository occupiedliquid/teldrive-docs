import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "ja-JP",
  title: "Teldrive",
  description: "Teldriveは、Telegramファイルを整理するための強力なユーティリティです",
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://teldrive-jp-docs.pages.dev'
  },
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'Teldrive',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tgdrive/teldrive' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z" fill="#000000"/></svg>'
        },
        link: 'https://github.com/occupiedliquid/teldrive',
        ariaLabel: 'teldrive-jp'
      },
      { icon: 'discord', link: 'https://discord.gg/8QAeCvTK7G' },
    ],
    editLink: {
      pattern: 'https://github.com/occupiedliquid/teldrive-docs/edit/main/:path',
      text: 'このページをGitHubで編集',
    },
    footer: {
      message: 'MITライセンスのもとで配布',
      copyright: 'Copyright © 2023-present Divyam and occupiedliquid'
    },
    nav: [
      { text: 'ホーム', link: '/' },
    ],

    sidebar: [
      {
        text: 'はじめる',
        collapsed: false,
        items: [
          { text: '前提条件', link: '/docs/getting-started/prerequisites.md' },
          { text: 'インストール', link: '/docs/getting-started/installation.md' },
          { text: '使用方法', link: '/docs/getting-started/usage.md' },
          { text: '上級者向け', link: '/docs/getting-started/advanced.md' },
        ]
      },
      {
        text: 'ガイド',
        collapsed: false,
        items: [
          { text: 'CaddyとCloudflareを使ってデプロイ', link: '/docs/guides/caddy-cloudflare.md' },
          { text: 'データベースのバックアップ', link: '/docs/guides/db-backup.md' },
          { text: 'RcloneでTeldriveをセットアップ', link: '/docs/guides/rclone.md' },
          { text: 'JellyfinでTeldriveをセットアップ', link: '/docs/guides/jellyfin.md' },
        ]
      },
      {
        text: 'CLIオプション',
        collapsed: false,
        items: [
          { text: '実行', link: '/docs/cli/run.md' },
          { text: 'チェック', link: '/docs/cli/check.md' },
        ]
      },
      {
        text: "API リファレンス",
        link: "/docs/api",
        rel:"noopener noreferrer",
        target:"_blank"
      },
    ],
    
  },
  head: [
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo.png',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'teldrive-jp-docs.pages.dev' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: '/images/logo.png',
      },
    ],
    [
      'meta',
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  vite:{
    
  }
})
