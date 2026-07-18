/** Pinned versions from package.json — starter boilerplate, not a fresh stack */
export const stackVersions = [
	{ name: 'SvelteKit', version: '2.x', note: '@sveltejs/kit ^2.0.0' },
	{ name: 'Svelte', version: '4.x', note: 'svelte ^4.2.7' },
	{ name: 'Tailwind CSS', version: '3.4.10', note: 'tailwindcss 3.x' },
	{ name: 'Skeleton UI', version: '2.10.2', note: '@skeletonlabs/skeleton' },
	{ name: 'Vite', version: '5.x', note: 'vite ^5.0.3' },
	{ name: 'TypeScript', version: '5.x', note: 'typescript ^5.0.0' },
	{ name: 'PostCSS', version: '8.4.45', note: 'postcss + autoprefixer' },
	{ name: 'highlight.js', version: '11.10.0', note: 'code highlighting in layout' }
] as const;

export const boilerplateNote =
	'Initial SvelteKit + Tailwind + Skeleton UI starter template. UI and components are from Skeleton Labs — this repo showcases the boilerplate, not custom UI work.';

export const uiCredit = 'AppShell, AppBar, Drawer, LightSwitch, gold-nouveau theme — Skeleton Labs.';
