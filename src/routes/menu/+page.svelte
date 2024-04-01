<script lang="ts">
	import MenuHead from './sections/MenuHead.svelte';
	import mamiImg from '$lib/assets/images/Mami Noodle - No BG.png';
	import MenuSection from './sections/MenuSection.svelte';
	import MenuItem from './sections/MenuItem.svelte';

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
		pancit
	}: {
		mami: DetailItem[];
		pancit: DetailItem[];
	} = data;
</script>

<MenuHead />
<MenuSection
	title="Mami Noodles"
	description="Hand crafted pancit egg noodles in a savory bone broth with calamansi (super lime), hints of lemongrass, and a mixture of regional seasoning."
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each mami as item}
		<MenuItem
			id={item.id}
			title={item.title}
			description={item.description}
			price={item.priceCents}
		/>
	{/each}
</div>
<MenuSection
	title="Pancit Noodles"
	description="Stir fried noodle dishes from across the philippines with all the delicious flavors of mami, while leaving the soup at home!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4">
	{#each pancit as item}
		<MenuItem
			id={item.id}
			title={item.title}
			description={item.description}
			price={item.priceCents}
		/>
	{/each}
</div>
<MenuSection
	title="Lumpia"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4"></div>
<MenuSection
	title="Beverages"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4"></div>
<MenuSection
	title="Dessert"
	description="Crispy, crunchy, and craveable - These Filipino spring rolls are deep fried and ready to rock! Share 'em, dip 'em, enjoy!"
	image={mamiImgObj}
/>
<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto py-6 gap-4"></div>
