<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul class="flex justify-between px-4 lg:px-10">
		{#if $page.route.id === '/'}
			<a href="/menu" class="text-blue-500">MENU</a>
		{:else}
			<a href="/">HOME</a>
		{/if}
		<button class={$page.route.id === '/' ? 'text-blue-500' : ''}>CART</button>
	</ul>
</nav>
