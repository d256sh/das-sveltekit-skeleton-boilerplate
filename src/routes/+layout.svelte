<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function drawerOpen(): void {
		drawerStore.open({});
	}

	function isActive(href: string): boolean {
		if (href === '/') return $page.url.pathname === '/';
		return $page.url.pathname.startsWith(href);
	}
</script>

<svelte:head>
	<title>{$page.data.title ?? "DA's Boilerplate"}</title>
	<meta name="description" content="Demo of the initial SvelteKit + Tailwind 3 + Skeleton UI 2 starter template. UI by Skeleton Labs." />
</svelte:head>

<Drawer position="bottom" opacityTransition={false} duration={400}>
	<div class="p-6 pb-8 space-y-6">
		<div class="mx-auto w-12 h-1 rounded-full bg-surface-500/40" aria-hidden="true"></div>
		<div class="flex items-center justify-between">
			<span class="text-xl font-bold">DA's Boilerplate</span>
			<button class="btn-icon variant-ghost-surface" on:click={() => drawerStore.close()} aria-label="Close">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
		</div>
		<nav class="list-nav">
			<ul>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class={isActive(link.href) ? 'bg-primary-hover-token' : ''}
							on:click={() => drawerStore.close()}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</Drawer>

<AppShell regionPage="overflow-y-auto" slotPageContent="flex-none">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-[auto_1fr_auto]" slotDefault="place-self-center">
			<svelte:fragment slot="lead">
				<button class="btn-icon variant-ghost-surface lg:hidden" on:click={drawerOpen} aria-label="Menu">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<a href="/" class="hidden lg:flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
					<span class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">DA</span>
					DA's Boilerplate
				</a>
			</svelte:fragment>

			<a href="/" class="lg:hidden font-bold text-lg">DA's Boilerplate</a>

			<svelte:fragment slot="trail">
				<nav class="hidden lg:flex items-center gap-1 mr-4">
					{#each navLinks as link}
						<a
							href={link.href}
							class="btn btn-sm {isActive(link.href) ? 'variant-filled-primary' : 'variant-ghost-surface'}"
						>
							{link.label}
						</a>
					{/each}
				</nav>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="flex flex-col min-h-full">
		<slot />

		<footer class="border-t border-surface-500/20 py-8 px-4 mt-auto">
			<div class="container mx-auto max-w-6xl">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<div class="flex items-center gap-2 mb-3">
							<span class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">DA</span>
							<span class="font-bold">DA's Boilerplate</span>
						</div>
						<p class="text-sm opacity-70">Demo of the initial Skeleton starter. UI by Skeleton Labs — not custom UI development.</p>
					</div>
					<div>
						<h4 class="font-semibold mb-3">Navigation</h4>
						<ul class="space-y-2 text-sm opacity-70">
							{#each navLinks as link}
								<li><a href={link.href} class="hover:opacity-100 transition-opacity">{link.label}</a></li>
							{/each}
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-3">Stack</h4>
						<div class="flex flex-wrap gap-2">
							<span class="badge variant-soft-primary">SvelteKit 2</span>
							<span class="badge variant-soft-secondary">Tailwind 3.4</span>
							<span class="badge variant-soft-tertiary">Skeleton 2.10</span>
							<span class="badge variant-soft-surface">Vite 5</span>
						</div>
					</div>
				</div>
				<div class="mt-8 pt-6 border-t border-surface-500/20 text-center text-sm opacity-50">
					© 2024 DA's Boilerplate · UI: Skeleton Labs
				</div>
			</div>
		</footer>
	</div>
</AppShell>
