<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>
<Nav />

<main id="main">
	{@render children()}
</main>
