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
          svg: '<svg role="img" viewBox="0 0 16 16" version="1.1"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>'
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
