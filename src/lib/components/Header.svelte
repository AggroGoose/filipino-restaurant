<script>
	import { shoppingCart } from '$lib/store/cart.svelte';
	import { page } from '$app/stores';
	import CartIcon from '$lib/svg/CartIcon.svelte';
	import Cart from './Cart.svelte';
	let cartOpen = $state(false);

	const handleCart = () => (cartOpen = !cartOpen);
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
		<div class="static">
			<button class="relative" onclick={handleCart}>
				<CartIcon
					className={`aspect-square w-8 transition-colors duration-500 ${$page.route.id === '/' ? 'fill-white hover:fill-yellow-500' : 'fill-black hover:fill-blue-500'}`}
				/>
				{#if shoppingCart.cart.length >= 1}
					<p
						class="absolute top-4 left-4 text-xs min-w-[2em] bg-[#423EF9] rounded-full p-1 text-white"
					>
						{shoppingCart.cart.length}
					</p>
				{/if}
			</button>
			{#if cartOpen}
				<Cart {handleCart} />
			{/if}
		</div>
	</ul>
</nav>
