<script>
	import restaurant from '$lib/assets/images/Filipino Restaurant Interior.png';
</script>

<div class="py-8 w-full w-max-[1920px] mx-auto flex flex-col gap-8">
	<h1 class="text-6xl text-center">Mami Noodles</h1>
	<p class="w-full max-w-[950px] text-xl mx-auto">
		You know Ramen, you love Pho. Now get read for the Philippines’ delicious take on Noodle Soup:
		Mami! From the islands of Luzon to Mindanao, Filipino food is as wide and magical as its various
		cultures. Our savory Mami Noodles will transport you on a taste adventure across its 7,641
		islands!
	</p>
	<div class="grid grid-cols-2 w-full max-w-[950px] mx-auto items-center">
		<div class="aspect-[3/2] w-full relative">
			<img
				src={restaurant}
				class="object-cover"
				sizes="(min-width:720px) 50vw, 100vw"
				alt="interior of the hoy mami restaurant"
			/>
		</div>
		<div class="flex flex-col gap-6 w-full items-center text-center">
			<h2 class="text-4xl">Location</h2>
			<p class="text-xl">
				Located in the heart of downtown downtownsville, our restaurant can be found right off of
				Main St. Follow the smell of delicious food, there’s no way you can miss us!
			</p>
			<p class="text-2xl font-bold">1234 Main ST <br />Downtownsville, DT 12345</p>
		</div>
	</div>
</div>
