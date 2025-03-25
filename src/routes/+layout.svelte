<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Hoy Mami</title>
	<meta name="description" content="Filipino Noodle House" />
</svelte:head>

<Header />
<AnimatedRoute>
	<main class="max-w-[100vw]">
		{@render children()}
	</main>
</AnimatedRoute>
<Footer />
