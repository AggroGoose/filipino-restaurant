<script>
	import FooterContact from './FooterContact.svelte';
</script>

<section class="w-full bg-black py-8">
	<div class="grid grid-cols-2 gap-6 w-full max-w-[950px] mx-auto items-center">
		<div class="flex flex-col gap-8 text-center">
			<h2 class="text-yellow-500 text-5xl">Contact Us</h2>
			<p class="text-white text-[2rem] leading-[1.15]">
				Want to reach us? <br /> Leave your contact info and we'll get back ASAP!
			</p>
		</div>
		<FooterContact />
	</div>
</section>
<div class="flex flex-col items-center py-4">
	<p>Hoy Mami - Project Website by JWOL Media LLC.</p>
	<a href="https://github.com/AggroGoose/" class="text-[#423EF9] hover:underline hover:opacity-85"
		>{'View The Github Repo'}</a
	>
</div>
