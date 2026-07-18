<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
	let submitted = false;

	function handleSubmit(): void {
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact — DA's Boilerplate</title>
</svelte:head>

<div class="container mx-auto max-w-lg px-4 py-16 space-y-10">
	<section class="text-center space-y-4">
		<h1 class="text-4xl font-bold">Contact</h1>
		<p class="opacity-70">Demo page from the boilerplate — form is not connected to a backend.</p>
	</section>

	{#if submitted}
		<div class="card p-8 text-center space-y-4">
			<div class="text-4xl">✉️</div>
			<h2 class="text-xl font-semibold">Thank you!</h2>
			<p class="opacity-70 text-sm">Your message was submitted. This is a demo form — nothing is sent anywhere.</p>
			<button class="btn variant-ghost-surface" on:click={() => (submitted = false)}>Send another</button>
		</div>
	{:else}
		<form class="card p-6 space-y-5" on:submit|preventDefault={handleSubmit}>
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" bind:value={name} placeholder="Your name" required />
			</label>

			<label class="label">
				<span>Email</span>
				<input class="input" type="email" bind:value={email} placeholder="you@example.com" required />
			</label>

			<label class="label">
				<span>Message</span>
				<textarea class="textarea" rows="5" bind:value={message} placeholder="Your message..." required></textarea>
			</label>

			<button type="submit" class="btn variant-filled-primary w-full">Send</button>
		</form>
	{/if}
</div>
