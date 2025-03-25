<script>
	import CloseIcon from '$lib/svg/CloseIcon.svelte';
	let { handleCart } = $props();
	import { shoppingCart } from '$lib/store/cart.svelte';
	import CartItem from './CartItem.svelte';
</script>

<div
	class="absolute top-14 right-4 bg-white flex flex-col gap-4 w-[350px] rounded-lg p-4 shadow-xl"
>
	<div class="flex justify-between">
		<h2 class="text-2xl">Cart</h2>
		<button onclick={handleCart}><CloseIcon className="w-3 h-3" /></button>
	</div>
	{#if shoppingCart.cart.length > 0}
		{#each shoppingCart.cart as product}
			<CartItem {...product} />
		{/each}
	{:else}
		<p>No items in cart.</p>
	{/if}

	<div class="flex justify-between items-center pt-2">
		<p class="text-lg">
			Total: {(shoppingCart.total / 100).toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD'
			})}
		</p>
		<button onclick={() => shoppingCart.reset()} class="bg-[#423EF9] text-white p-2 rounded-lg"
			>PURCHASE</button
		>
	</div>
</div>
