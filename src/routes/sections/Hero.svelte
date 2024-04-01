<script>
	import HoyMamiTextWide from '$lib/svg/HoyMamiTextWide.svelte';
</script>

<div class="w-full max-w-[1920px] aspect-[2/1] mx-auto bg-hero">
	<div class="w-full max-w-[900px] m-auto h-full flex flex-col justify-center gap-8">
		<p class="text-white text-[5.5rem] text-center leading-none">
			FILIPINO NOODLES THAT MAKE YOU SHOUT,
		</p>
		<HoyMamiTextWide className="aspect-[1920/510] w-[510px] mx-auto" />
		<a
			href="/menu"
			class="text-white text-3xl border-[3px] border-white w-max mx-auto px-4 py-1.5 transition-colors duration-500 hover:border-yellow-500 hover:bg-yellow-500"
			>VIEW MENU</a
		>
	</div>
</div>

<style>
	.bg-hero {
		background: linear-gradient(0deg, rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)),
			url('/images/noodle-cup-mockup.png');
		background-size: cover;
	}
</style>
