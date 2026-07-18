# DA's Boilerplate

Demo of the **initial SvelteKit + Tailwind CSS + Skeleton UI** starter template.

This is **not a fresh stack** and **not custom UI work** — it showcases the original boilerplate with pinned dependency versions. UI components and the gold-nouveau theme are from [Skeleton Labs](https://skeleton.dev/).

> Ukrainian version: [README.uk.md](./README.uk.md)

## Stack (pinned versions)

| Package | Version |
|---------|---------|
| SvelteKit | 2.x |
| Svelte | 4.x |
| Tailwind CSS | **3.4.10** |
| Skeleton UI | **2.10.2** |
| Vite | 5.x |
| TypeScript | 5.x |

Not upgraded to Tailwind 4, Skeleton 3, or Svelte 5.

## What's included

- **SvelteKit 2** — file-based routing, SSR
- **Skeleton UI 2** — AppShell, AppBar, Drawer (bottom on mobile), LightSwitch
- **Tailwind CSS 3** — typography & forms plugins, purgecss
- **gold-nouveau** theme (+ crimson preset in `tailwind.config.ts`)
- Demo pages: Home, About, Blog (placeholders), Contact (demo form)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check with svelte-check |
| `npm run lint` | Prettier + ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
├── routes/
│   ├── +layout.svelte   # AppShell, nav, footer
│   ├── +page.svelte     # Home
│   ├── about/
│   ├── blog/
│   └── contact/
└── lib/
    └── stack.ts         # Version list & copy
```

## License

[The Unlicense](./LICENSE) — free to use, modify, and redistribute **without attribution** to this repo's author.

Third-party packages (Skeleton UI, SvelteKit, etc.) remain under their own licenses. Skeleton UI is MIT © Skeleton Labs — see [LICENSE](./LICENSE).

## Credits

- UI: [Skeleton Labs](https://skeleton.dev/)
- © 2024 DA's Boilerplate
