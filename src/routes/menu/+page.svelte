<script lang="ts">
	import MenuHead from './sections/MenuHead.svelte';
	import mamiImg from '$lib/assets/images/Mami Noodle - No BG.png';
	import MenuSection from './sections/MenuSection.svelte';
	import LargeItem from './sections/LargeItem.svelte';
	import SmallItem from './sections/SmallItem.svelte';

	const mamiImgObj = {
		src: mamiImg,
		alt: 'bowl of beef mami noodle soup',
		width: 175,
		height: 150
	};

	/** @type {import('./$types').PageData} */
	let { data } = $props();
	const {
		mami,
		pancit,
		lumpia,
		drinks,
		desserts
	}: {
		mami: FbDocDesc[];
		pancit: FbDocDesc[];
		lumpia: FbDoc[];
		drinks: FbDoc[];
		desserts: FbDoc[];
	} = data;
</script>

<MenuHead />
<MenuSection
	title="Mami Noodles"
	description="Hand crafted pancit egg noodles in a savory bone broth with calamansi (super lime), hints of lemongrass, and a mixture of regional seasoning."
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each mami as item, index}
		<LargeItem
			id={'ma' + index}
			title={item.title}
			description={item.description}
			price={item.price}
		/>
	{/each}
</div>
<MenuSection
	title="Pancit Noodles"
	description="Stir fried noodle dishes from across the philippines with all the delicious flavors of mami, while leaving the soup at home!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each pancit as item, index}
		<LargeItem
			id={'pa' + index}
			title={item.title}
			description={item.description}
			price={item.price}
		/>
	{/each}
</div>
<MenuSection
	title="Lumpia"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each lumpia as item, index}
		<SmallItem id={'lu' + index} title={item.title} price={item.price} />
	{/each}
</div>
<MenuSection
	title="Beverages"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each drinks as item, index}
		<SmallItem id={'dr' + index} title={item.title} price={item.price} />
	{/each}
</div>
<MenuSection
	title="Dessert"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each desserts as item, index}
		<SmallItem id={'de' + index} title={item.title} price={item.price} />
	{/each}
</div>
