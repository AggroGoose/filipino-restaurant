<script lang="ts">
	import { shoppingCart } from '$lib/store/cart.svelte';
	import type { CartProduct } from '$lib/types';
	let { id, name, price, quantity }: CartProduct = $props();
	const handleRemove = () => {
		shoppingCart.removeItem(id);
	};
	const handleInc = () => {
		shoppingCart.increaseItem(id);
	};
	const handleDec = () => {
		shoppingCart.decreaseItem(id);
	};
</script>

<div class="flex flex-col">
	<p class="text-lg">{name}</p>
	<div class="flex gap-2 justify-between">
		<p class="font-bold">
			{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
		</p>
		<section class="flex gap-2">
			<button onclick={handleDec} class="text-red-600">-</button>
			<p>{quantity}</p>
			<button onclick={handleInc} class="text-[#423EF9]">+</button>
		</section>
		<button onclick={handleRemove} class="font-bold text-red-600 hover:opacity-75 hover:underline"
			>REMOVE</button
		>
	</div>
</div>
