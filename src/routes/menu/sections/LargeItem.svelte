<script lang="ts">
	import { shoppingCart } from '$lib/store/cart.svelte';
	import type { CartProduct } from '$lib/types';
	let {
		id,
		title,
		description,
		price
	}: {
		id: string;
		title: string;
		description: string;
		price: number;
	} = $props();

	const handleAdd = () => {
		const product: CartProduct = {
			id,
			name: title,
			price,
			quantity: 1
		};

		shoppingCart.addItem(product);
	};
</script>

<div class="w-full flex flex-col p-4 text-2xl border-[3px] border-black gap-4">
	<p class="font-bold">{title}</p>
	<p class="text-xl">{description}</p>
	<div class="flex justify-between">
		<p class="font-bold">
			{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
		</p>
		<button onclick={handleAdd} class="font-bold text-[#423EF9] hover:opacity-75 hover:underline"
			>ADD</button
		>
	</div>
</div>
