<script lang="ts">
	const posts = [
		{
			title: 'Getting started with SvelteKit',
			excerpt: 'How to spin up the project and configure your dev environment.',
			date: 'July 15, 2026',
			tag: 'Tutorial'
		},
		{
			title: 'Skeleton UI: component overview',
			excerpt: 'AppShell, AppBar, Drawer, LightSwitch — using ready-made components for quick prototyping.',
			date: 'July 10, 2026',
			tag: 'UI'
		},
		{
			title: 'Tailwind CSS best practices',
			excerpt: 'Tips on organizing styles, design tokens, and customizing Skeleton themes.',
			date: 'July 5, 2026',
			tag: 'CSS'
		}
	];
</script>

<svelte:head>
	<title>Blog — DA's Boilerplate</title>
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-16 space-y-10">
	<section class="text-center space-y-4">
		<h1 class="text-4xl font-bold">Blog</h1>
		<p class="opacity-70">Placeholder posts from the demo template — not a real blog.</p>
	</section>

	<div class="space-y-6">
		{#each posts as post}
			<article class="card p-6 hover:scale-[1.01] transition-transform duration-200 cursor-pointer">
				<div class="flex items-center gap-3 mb-3">
					<span class="badge variant-soft-primary">{post.tag}</span>
					<time class="text-sm opacity-50">{post.date}</time>
				</div>
				<h2 class="text-xl font-semibold mb-2">{post.title}</h2>
				<p class="opacity-70 text-sm leading-relaxed">{post.excerpt}</p>
			</article>
		{/each}
	</div>
</div>
