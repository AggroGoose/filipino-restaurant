<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

{#key $page.url}
	<div in:fly={{ x: '-100%', duration: 500 }}>
		{@render children()}
	</div>
{/key}
