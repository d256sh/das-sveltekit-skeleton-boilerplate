<script lang="ts">
	import { stackVersions, boilerplateNote, uiCredit } from '$lib/stack';

	const values = [
		{ title: 'Not custom UI', desc: 'Interface from Skeleton UI — AppShell, AppBar, Drawer, LightSwitch.' },
		{ title: 'Starter template', desc: 'Initial create-svelte + Skeleton boilerplate with pinned versions.' },
		{ title: 'Demo only', desc: 'Pages showcase the template capabilities, not a finished product.' }
	];
</script>

<svelte:head>
	<title>About — DA's Boilerplate</title>
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-16 space-y-16">
	<section class="text-center space-y-4">
		<span class="badge variant-soft-warning">Starter · UI by Skeleton Labs</span>
		<h1 class="text-4xl font-bold">About the template</h1>
		<p class="text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
			{boilerplateNote}
		</p>
	</section>

	<section class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each values as value}
			<div class="card p-6 text-center">
				<h3 class="font-semibold text-lg mb-2">{value.title}</h3>
				<p class="text-sm opacity-70">{value.desc}</p>
			</div>
		{/each}
	</section>

	<section class="card p-8 space-y-4">
		<h2 class="text-2xl font-bold">Who built the UI?</h2>
		<p class="opacity-80 leading-relaxed">
			{uiCredit}
			This repo only demonstrates the initial boilerplate version — not a claim of custom UI development.
		</p>
	</section>

	<section class="card p-8 space-y-6">
		<div>
			<h2 class="text-2xl font-bold mb-2">Dependencies & versions</h2>
			<p class="text-sm opacity-70">
				Exact versions from <code class="code">package.json</code>. Not upgraded to Tailwind 4, Skeleton 3, or Svelte 5.
			</p>
		</div>
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Package</th>
						<th>Version</th>
						<th class="hidden sm:table-cell">npm</th>
					</tr>
				</thead>
				<tbody>
					{#each stackVersions as pkg}
						<tr>
							<td class="font-medium">{pkg.name}</td>
							<td><span class="badge variant-soft-surface">{pkg.version}</span></td>
							<td class="hidden sm:table-cell text-sm opacity-60">{pkg.note}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<section class="card p-8 space-y-4">
		<h2 class="text-2xl font-bold">What shipped in the starter?</h2>
		<ul class="list-disc list-inside space-y-2 opacity-80">
			<li>SvelteKit 2 — file-based routing, SSR</li>
			<li>Skeleton UI 2.10 — AppShell, AppBar, Drawer, LightSwitch</li>
			<li>Tailwind CSS 3.4.10 — not v4</li>
			<li>gold-nouveau theme (+ crimson in tailwind.config)</li>
			<li>highlight.js 11 — code highlighting in layout</li>
			<li>Vite 5 + vite-plugin-tailwind-purgecss</li>
		</ul>
	</section>
</div>
