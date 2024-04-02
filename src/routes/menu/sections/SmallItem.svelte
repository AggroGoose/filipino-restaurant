<script lang="ts">
	let {
		id,
		title,
		price
	}: {
		id: number;
		title: string;
		price: number;
	} = $props();
</script>

<div class="w-full flex flex-col p-4 text-2xl border-[3px] border-black gap-4">
	<div class="flex justify-between">
		<p class="font-bold">{title}</p>
		<p class="font-bold">
			{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
		</p>
	</div>
	<button class="text-xl font-bold text-[#423EF9] self-end hover:opacity-75 hover:underline"
		>ADD</button
	>
</div>
