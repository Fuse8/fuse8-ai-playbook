## 1. Своя база знаний

Разгружаем свой мозг.

Храним долгосрочную память — в обычных файлах.

## 2. Для чего

Основная мысль — сделать себе долгосрочную память. ИИ второстепенен: базу можно вести и без него. Но с ним её польза возрастает кратно.

### Разгрузить голову
Записать и найти, когда понадобится

### Использовать прошлый опыт
Вспомнить, как решали похожую задачу и почему

### Делиться знаниями
Превращать заметки в статьи, доклады и материалы для команды

## 3. Как использовать

Записываем то, что может пригодиться в будущем, сами или через ИИ.

### Узнали полезное
Прочитали статью, посмотрели видео, прошли урок.

### Решили задачу
Нашли решение, узнали нюансы.

### Появилась идея
Придумали, что попробовать или улучшить.

### Подключили инструмент или библиотеку
Разобрались с настройкой и подводными камнями.

Не знаем, куда положить — сохраняем в inbox/. Позже переносим или удаляем.

## 4. С чего начать

Выбирайте инструмент, в котором легко записать мысль и потом её найти. Если планируете работать с ИИ, выбирайте инструмент, который хранит заметки в Markdown, например Obsidian.

Obsidian отлично подходит для работы на одном устройстве. Для синхронизации между устройствами есть платный Obsidian Sync. Бесплатные варианты — iCloud или git.

На компе — плагин [Git](https://community.obsidian.md/plugins/obsidian-git), на телефоне — [Vault Sync (REST)](https://community.obsidian.md/plugins/vault-sync-rest).

Можно завести несколько баз знаний:
- Для работы и учёбы — технологии, решения задач, заметки, идеи.
- Для личного — ремонт, здоровье, хобби, путешествия, фильмы.

## 5. Как настроить под себя

В CONTEXT.md опишите себя и назначение базы. ИИ сможет учитывать это при работе с заметками.
Можно написать свою роль, что будет храниться в базе знаний, цели которые будут записаны.
В AGENTS.md укажите: «Перед работой прочитай CONTEXT.md».

Например
```
Я фронтенд-разработчик. Работаю в веб-студии.
Использую базу для работы и учёбы. Храню технические решения, конспекты и идеи.

Роли:
- Наставник
- Разработчик

Цели:
- Укреплять senior-level мышление
- Делиться знаниями, выступать на конференциях

Как адаптировать заметки:
- Показывать, как применить знания в проектах.
- Выделять темы для статей, докладов и обучающих материалов.
```

## 6. Как сохранять с ИИ
Добавьте в AGENTS.md
```
Новые заметки сохраняй в inbox/, если я не указал другую папку.
```

Создайте скилл
Укажите в нём путь к базе и правила работы с заметками. Установите глобально, чтобы вызывать из разных чатов. 

### Пример скилла:
```text

---
name: knowledge-base-notes
description: Saves and updates short, practical notes in the local knowledge-base repository following its current rules. Use when the user asks to save insights, explanations, or discussion outcomes to the knowledge base or notes without specifying another location.
---

# Knowledge Base Notes

User's repository: `/Users/berdnikov/web/learning/knowledge-base`. Always use this absolute path regardless of the current working directory. If the user explicitly specifies another location, use it instead.

## Before Writing

- Verify that the repository exists. If unavailable, report the issue and ask for its new location. Do not create a replacement repository.
- Read the current `AGENTS.md`, `README.md`, and `CONTEXT.md` in the repository root and follow their instructions. Respect actual filename casing (e.g., `readme.md` may refer to an existing `README.md`).
- Search for related notes using `rg` and `rg --files`. Update an existing note without duplication when relevant; create a separate file for a new, independent topic.
- Before editing a file, check for nested `AGENTS.md` files along its path and a local `README.md` index, if present.

## Completion

Read the saved file to verify that it meets the request and preserves unrelated changes. Respond briefly in Russian with a link to the actual file using its absolute path. If saving fails, clearly report the failure without presenting a draft as a saved note.
```

Просите сохранить полезное
Например, после решения задачи:
```
Запиши в мою базу знаний, как мы решили эту проблему.
```

## 7. Как работать с ИИ

Примеры промтов:
- Найди заметку как я решал проблему миграции zod с 3 на 4 версию
- Что мне стоит подучить по CI/CD? Посмотри заметки и составь план
- На основе моих заметок и целей составь план обучения на месяц
- С помощью скилла teach от Мэтта Покока организуй обучение по Node.js с учётом моих знаний
- Какие проблемы я решал несколько раз? Помоги собрать памятку
- Найди в моих заметках темы для статьи или доклада
- Давай разберем inbox, присылай сначала задачи, которые потенциально могу сделать до 15 минут

Это лишь примеры. Дальше всё зависит от ваших задач и фантазии

## 8. Пример базы знаний

```text
├── 📁 Доклады
├── 📁 Конференции
│   └── 📁 2026-09-26-aa-конф-ростов
│       ├── 📄 1. Почему продажи в 2026 году…
│       ├── 📄 2. Spec driven development…
│       ├── 📄 Заметки.md
│       └── 📄 Инсайды.md
├── 📁 Сделанные задачи
├── 📁 ai
├── 📁 backend
├── 📁 books
├── 📁 ci-cd
├── 📁 design
├── 📁 frontend
├── 📁 inbox
├── 📁 learning
├── 📁 logs
├── 📁 other
├── 📁 pet-projects
├── 📁 testing
├── 📁 tooling
├── 📁 work
├── 📄 AGENTS.md
├── 📄 CONTEXT.md
└── 📄 README.md
```