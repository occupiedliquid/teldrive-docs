import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "ja-JP",
  title: "Teldrive",
  description: "Teldriveは、Telegramファイルを整理するための強力なユーティリティです。",
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
      { icon: 'github', link: 'https://github.com/occupiedliquid/teldrive' },
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
