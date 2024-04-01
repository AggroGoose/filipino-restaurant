<script>
	import noodle1 from '$lib/assets/images/Mami Noodle 2.png';
	import noodle2 from '$lib/assets/images/Mami Noodle 3.png';
</script>

<div class="grid grid-cols-2 w-full max-w-[1920px] mx-auto">
	<div class="w-full aspect-[3/2] relative">
		<img
			src={noodle1}
			class="object-cover"
			sizes="(min-width:720px) 50vw, 100vw"
			alt="bowl of chicken mami noodle soup"
		/>
	</div>
	<div class="w-full aspect-[3/2] relative">
		<img
			src={noodle2}
			class="object-cover"
			sizes="(min-width:720px) 50vw, 100vw"
			alt="bowl of beef mami noodle soup"
		/>
	</div>
</div>
