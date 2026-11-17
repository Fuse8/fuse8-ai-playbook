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
        { text: 'AI workflow', link: '/practices/ai-workflow' },
        { text: 'Разные AI инструменты', link: '/practices/multiple-ai-tools-in-one-project' },
      ] },
      { text: 'Скиллы', items: [
        { text: 'Оформление документации', link: '/skills/readme-docs-structure/SKILL' },
        { text: 'Синхронизация AI-инструкций', link: '/skills/ai-workflow-manager/SKILL' },
      ] },
      { text: 'Полезные материалы', link: '/docs/useful-materials' },
    ],
  },
})
