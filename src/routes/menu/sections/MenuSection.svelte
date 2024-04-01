<script lang="ts">
	let {
		title,
		description,
		image
	}: {
		title: string;
		description: string;
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
	} = $props();
</script>

<section class="flex flex-col">
	<h2 class="bg-[#423EF9] text-white w-max self-center text-5xl px-6 py-4 mb-[-40px] z-10">
		{title}
	</h2>
	<div class="bg-yellow-300 w-full py-3">
		<div class="flex gap-8 items-center w-full max-w-[950px] mx-auto text-3xl leading-none">
			<p>{description}</p>
			<img src={image.src} alt={image.alt} width={image.width} height={image.height} />
		</div>
	</div>
</section>
