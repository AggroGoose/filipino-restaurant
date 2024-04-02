<script lang="ts">
	let {
		id,
		title,
		description,
		price
	}: {
		id: number;
		title: string;
		description: string;
		price: number;
	} = $props();
</script>

<div class="w-full flex flex-col p-4 text-2xl border-[3px] border-black gap-4">
	<p class="font-bold">{title}</p>
	<p class="text-xl">{description}</p>
	<div class="flex justify-between">
		<p class="font-bold">
			{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
		</p>
		<button class="font-bold text-[#423EF9] hover:opacity-75 hover:underline">ADD</button>
	</div>
</div>
