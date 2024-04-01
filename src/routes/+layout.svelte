<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<AnimatedRoute>
	<main class="max-w-[100vw]">
		<slot />
	</main>
</AnimatedRoute>
<Footer />
