<script>
	import { page } from '$app/stores';
	import ShoppingCart from '$lib/svg/ShoppingCart.svelte';
</script>

<nav>
	<ul
		class="flex justify-between px-4 lg:px-10 absolute top-0 left-0 right-0 w-full max-w-[1920px] mx-auto py-6 z-10"
	>
		{#if $page.route.id === '/'}
			<a
				href="/menu"
				class="text-white font-semibold text-2xl transition-colors duration-500 hover:text-yellow-500"
				>MENU</a
			>
		{:else}
			<a href="/" class="font-semibold text-2xl transition-colors duration-500 hover:text-blue-500"
				>HOME</a
			>
		{/if}
		<button
			><ShoppingCart
				className={`aspect-square w-8 transition-colors duration-500 ${$page.route.id === '/' ? 'fill-white hover:fill-yellow-500' : 'fill-black hover:fill-blue-500'}`}
			/></button
		>
	</ul>
</nav>
