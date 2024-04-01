<script lang="ts">
	let {
		id,
		title,
		description,
		hasDescription = true,
		price
	}: {
		id: number;
		title: string;
		description: string;
		hasDescription?: boolean;
		price: number;
	} = $props();
</script>

<div class="w-full flex flex-col p-4 text-2xl border-[3px] border-black gap-4">
	<p class="font-bold">{title}</p>
	{#if hasDescription}
		<p class="text-xl">{description}</p>
	{/if}
	<div class="flex justify-between">
		<p class="font-bold">
			{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
		</p>
	</div>
</div>
