<form class="grid grid-cols-2 gap-4">
	<div class="flex flex-col justify-between h-44">
		<input
			type="text"
			placeholder="Name*"
			aria-label="Name"
			class="border-[3px] border-white bg-black text-white py-2 px-3"
		/>
		<input
			type="text"
			placeholder="Email*"
			aria-label="Email"
			class="border-[3px] border-white bg-black text-white py-2 px-3"
		/>
		<input
			type="text"
			placeholder="Subject*"
			aria-label="Subject"
			class="border-[3px] border-white bg-black text-white py-2 px-3"
		/>
	</div>
	<textarea
		class="border-[3px] border-white bg-black text-white py-2 px-3 h-44"
		placeholder="Message"
		aria-label="Message"
	/>
	<button
		class="col-span-2 ml-auto border-[3px] border-yellow-500 text-yellow-500 py-1 px-3 w-max transition-colors duration-500 hover:bg-yellow-500 hover:text-white"
		>SEND</button
	>
</form>
