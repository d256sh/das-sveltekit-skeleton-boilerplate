<script lang="ts">
	import { stackVersions, boilerplateNote, uiCredit } from '$lib/stack';

	const features = [
		{
			title: 'SvelteKit',
			description: 'Routing, SSR, and dev server — as shipped in the create-svelte starter.',
			icon: '⚡',
			color: 'from-primary-500/20 to-primary-500/5'
		},
		{
			title: 'Skeleton UI',
			description: 'Ready-made components and theme from Skeleton Labs — AppShell, nav, theme switch.',
			icon: '🎨',
			color: 'from-secondary-500/20 to-secondary-500/5'
		},
		{
			title: 'Tailwind CSS 3',
			description: 'Styles and design tokens wired in the boilerplate — typography, forms, purgecss.',
			icon: '🧩',
			color: 'from-tertiary-500/20 to-tertiary-500/5'
		}
	];
</script>

<svelte:head>
	<title>DA's Boilerplate — Home</title>
</svelte:head>

<div class="relative overflow-hidden">
	<section class="relative flex items-center justify-center px-4 py-20">
		<div class="hero-glow" aria-hidden="true"></div>

		<div class="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
			<span class="badge variant-soft-warning px-4 py-1.5">Starter template · initial version</span>

			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
				SvelteKit
				<span class="bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 bg-clip-text text-transparent">
					+ Skeleton UI
				</span>
			</h1>

			<p class="text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
				{boilerplateNote}
			</p>

			<p class="text-sm opacity-50">{uiCredit}</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
				<a href="/about" class="btn variant-filled-primary px-8 py-3 text-base">About the template</a>
				<a href="https://skeleton.dev/" target="_blank" rel="noreferrer" class="btn variant-ghost-surface px-8 py-3 text-base border border-surface-500/30">
					Skeleton docs
				</a>
			</div>
		</div>
	</section>

	<section class="px-4 py-20 bg-surface-50-950-token/50">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-12 space-y-3">
				<h2 class="text-3xl font-bold">Included out of the box</h2>
				<p class="opacity-70 max-w-xl mx-auto">Ready-made solutions — no custom UI design</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each features as feature}
					<div class="card p-6 hover:scale-[1.02] transition-transform duration-300">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br {feature.color} flex items-center justify-center text-2xl mb-4">
							{feature.icon}
						</div>
						<h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
						<p class="opacity-70 text-sm leading-relaxed">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-4 py-20">
		<div class="container mx-auto max-w-4xl text-center space-y-8">
			<div class="space-y-3">
				<h2 class="text-3xl font-bold">Versions from package.json</h2>
				<p class="opacity-70 text-sm">Pinned starter dependencies — not upgraded to latest major releases</p>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
				{#each stackVersions as pkg}
					<div class="card p-4 flex items-center justify-between gap-4">
						<div>
							<span class="font-semibold">{pkg.name}</span>
							<p class="text-xs opacity-50 mt-0.5">{pkg.note}</p>
						</div>
						<span class="badge variant-soft-primary shrink-0">{pkg.version}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-4 py-20">
		<div class="container mx-auto max-w-3xl">
			<div class="card p-8 md:p-12 text-center bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-tertiary-500/10 border-primary-500/20">
				<h2 class="text-2xl md:text-3xl font-bold mb-4">Starting point</h2>
				<p class="opacity-70 mb-8 max-w-md mx-auto">
					Run <code class="code">npm run dev</code> and build on top of this starter template.
				</p>
				<a href="/blog" class="btn variant-filled-secondary px-8">View blog demo</a>
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	.hero-glow {
		@apply absolute inset-0 pointer-events-none;
	}

	.hero-glow::before {
		content: '';
		@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40;
		background: radial-gradient(circle, rgb(var(--color-primary-500) / 0.4), transparent 70%);
		animation: pulse-glow 8s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%, 100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.4;
		}
		50% {
			transform: translate(-50%, -50%) scale(1.2);
			opacity: 0.6;
		}
	}
</style>
