<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
</script>

<Header />
<AnimatedRoute>
	<slot />
</AnimatedRoute>
