import {
  DeckGL,
  Electron,
  Node,
  Python,
  React,
  RxJS,
  Tailwindcss,
  TypeScript,
  Vite,
  Vue,
  Windows,
} from '@/icons'

interface Skill {
  title: string
  children: {
    title: string
    summary: string
    link: string
    icon: Component
  }[]
}

export const SKILL_LIST: Skill[] = [
  {
    title: '编程语言（含运行时）',
    children: [
      {
        title: 'TypeScript',
        summary: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        link: 'https://www.typescriptlang.org/',
        icon: TypeScript,
      },
      {
        title: 'Node.js',
        summary: 'Node.js® 是一个免费、开源、跨平台的 JavaScript 运行时环境，它让开发人员能够创建服务器、Web 应用、命令行工具和脚本。',
        link: 'https://nodejs.org/',
        icon: Node,
      },
      {
        title: 'Python',
        summary: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
        link: 'https://www.python.org/',
        icon: Python,
      },
    ]
  },

  {
    title: 'Web 开发框架',
    children: [
      {
        title: 'Vue.js',
        summary: '渐进式 JavaScript 框架。',
        link: 'https://cn.vuejs.org/',
        icon: Vue,
      },
      {
        title: 'React.js',
        summary: 'The library for web and native user interfaces.',
        link: 'https://react.dev/',
        icon: React,
      },
    ],
  },

  {
    title: '视觉开发',
    children: [
      {
        title: 'tailwindcss',
        summary: '只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。',
        link: 'https://tailwindcss.com/',
        icon: Tailwindcss,
      },
      {
        title: 'Fluent Design 2',
        summary: 'Fluent 2 provides a seamless maker experience from design to development to delivery.',
        link: 'https://fluent2.microsoft.design/',
        icon: Windows,
      }
    ],
  },

  {
    title: 'WebGL 开发',
    children: [
      {
        title: 'Deck.GL',
        summary: 'GPU-powered, highly performant large-scale data visualization.',
        link: 'https://deck.gl/',
        icon: DeckGL,
      },
    ],
  },

  {
    title: '本地开发',
    children: [
      {
        title: 'Electron',
        summary: 'Build cross-platform desktop apps with JavaScript, HTML, and CSS.',
        link: 'https://www.electronjs.org/',
        icon: Electron,
      },
    ],
  },

  {
    title: '工程化',
    children: [
      {
        title: 'Vite.js',
        summary: '下一代的前端工具链。为开发提供极速响应。',
        link: 'https://vitejs.dev/',
        icon: Vite,
      },
    ],
  },

  {
    title: '编程范式',
    children: [
      {
        title: 'RxJS',
        summary: 'Reactive Extensions Library for JavaScript',
        link: 'https://rxjs.dev/',
        icon: RxJS,
      },
    ],
  },
]
