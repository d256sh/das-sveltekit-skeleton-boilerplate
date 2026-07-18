# DA's Boilerplate

Демонстрація **початкового стартового шаблону SvelteKit + Tailwind CSS + Skeleton UI**.

Це **не нова збірка** і **не власна UI-розробка** — репозиторій показує оригінальний boilerplate із зафіксованими версіями залежностей. UI-компоненти та тема gold-nouveau — від [Skeleton Labs](https://skeleton.dev/).

> English version: [README.md](./README.md)

## Стек (зафіксовані версії)

| Пакет | Версія |
|-------|--------|
| SvelteKit | 2.x |
| Svelte | 4.x |
| Tailwind CSS | **3.4.10** |
| Skeleton UI | **2.10.2** |
| Vite | 5.x |
| TypeScript | 5.x |

Без оновлення до Tailwind 4, Skeleton 3 чи Svelte 5.

## Що всередині

- **SvelteKit 2** — file-based routing, SSR
- **Skeleton UI 2** — AppShell, AppBar, Drawer (знизу на мобілці), LightSwitch
- **Tailwind CSS 3** — плагіни typography & forms, purgecss
- Тема **gold-nouveau** (+ crimson у `tailwind.config.ts`)
- Демо-сторінки: Home, About, Blog (заглушки), Contact (демо-форма)

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:5173](http://localhost:5173).

## Скрипти

| Команда | Опис |
|---------|------|
| `npm run dev` | Dev-сервер |
| `npm run build` | Production build |
| `npm run preview` | Перегляд production build |
| `npm run check` | Перевірка типів (svelte-check) |
| `npm run lint` | Prettier + ESLint |
| `npm run format` | Форматування Prettier |

## Структура

```
src/
├── routes/
│   ├── +layout.svelte   # AppShell, навігація, footer
│   ├── +page.svelte     # Головна
│   ├── about/
│   ├── blog/
│   └── contact/
└── lib/
    └── stack.ts         # Версії та тексти
```

## Ліцензія

[The Unlicense](./LICENSE) — вільне використання, зміни та поширення **без обов'язкового згадування** автора репозиторію.

Сторонні пакети (Skeleton UI, SvelteKit тощо) лишаються на своїх ліцензіях. Skeleton UI — MIT © Skeleton Labs; деталі в [LICENSE](./LICENSE).

## Авторство

- UI: [Skeleton Labs](https://skeleton.dev/)
- © 2024 DA's Boilerplate
