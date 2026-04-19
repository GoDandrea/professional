<script lang="ts">
	import '../app.css';
	import gd_logo from '$lib/assets/gd_logo.ico';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>goDandrea • Full-Stack Web Developer</title>
	<link rel="icon" href={gd_logo} />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>
<Nav />

<main id="main">
	{@render children()}
</main>
