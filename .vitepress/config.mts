import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "晚的空间",
  description: "高效简洁还有质量",
  lang: 'zh-CN',
  base: '/wan-space/'
  themeConfig: {
    logo: '/app-icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🏠 Home', link: '/home' },
      { text: '🛠️ Tools', link: '/tools' },
      { text: '⭐ Star', link: '/star' },
      { text: 'ℹ️ About', link: '/about' }
    ],

    sidebar: [
      {
        text: '🏠 首页 Home',
        collapsed: false,
        items: [
          { text: '🏠 首页介绍', link: '/home' },
          { text: '📖 每日一言', link: '/home#每日一言' },
          { text: '🌐 网页发现', link: '/home#网页发现' },
          { text: '🧰 日常工具', link: '/home#日常工具' }
        ]
      },
      {
        text: '🛠️ 工具 Tools',
        collapsed: false,
        items: [
          { text: '🛠️ 工具介绍', link: '/tools' },
          { text: '🧩 功能合集', link: '/tools#功能合集' },
          { text: '🗂️ 导航', link: '/tools#导航' },
          { text: '📦 资源网盘', link: '/tools#资源网盘' },
          { text: '💬 QQ 社区', link: '/tools#qq-社区' }
        ]
      },
      {
        text: '⭐ 收藏 Star',
        collapsed: false,
        items: [
          { text: '⭐ 收藏介绍', link: '/star' },
          { text: '✨ 收藏功能', link: '/star#收藏功能' }
        ]
      },
      {
        text: 'ℹ️ 关于 About',
        collapsed: false,
        items: [
          { text: 'ℹ️ 关于介绍', link: '/about' },
          { text: '📌 基本信息', link: '/about#基本信息' },
          { text: '🔍 检查更新', link: '/about#检查更新' },
          { text: '👥 官方群聊', link: '/about#官方群聊' },
          { text: '⚙️ 软件设置', link: '/about#软件设置' }
        ]
      }
    ],

    footer: {
      message: '晚的空间 · 高效简洁还有质量',
      copyright: '© 2026 wan-Space'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wan0705/Wan-Space/' }
    ]
  }
})