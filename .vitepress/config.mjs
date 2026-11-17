import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FUSE8 AI Playbook',
  lang: 'ru-RU',
  base: process.env.GITHUB_ACTIONS ? '/fuse8-ai-playbook/' : '/',
  rewrites: { 'README.md': 'index.md' },
  srcExclude: ['node_modules/**'],
  themeConfig: {
    search: { provider: 'local' },
    sidebar: [
      { text: 'Главная', link: '/' },
      { text: 'Основы AI', items: [
        { text: 'Общее', link: '/docs/ai-basics/01-common' },
        { text: 'LLM', link: '/docs/ai-basics/02-llm' },
        { text: 'Стоимость токенов', link: '/docs/ai-basics/03-token-pricing' },
      ] },
      { text: 'Доступ к инструментам', items: [
        { text: 'Codex', link: '/docs/ai-tools-access/codex' },
      ] },
      { text: 'Советы', items: [
        { text: 'Своя база знаний', link: '/docs/tips/knowledge-base' },
      ] },
      { text: 'Практики', items: [
        { text: 'AI workflow', link: '/docs/practices/ai-workflow' },
        { text: 'Если в проекте несколько AI', link: '/docs/practices/multiple-ai-tools-in-one-project' },
      ] },
      { text: 'Скиллы', items: [
        { text: 'Оформление документации', link: '/docs/skills/readme-docs-structure' },
      ] },
      { text: 'Полезные материалы', link: '/docs/useful-materials' },
    ],
  },
})
