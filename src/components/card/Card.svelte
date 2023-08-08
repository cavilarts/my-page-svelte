<script lang="ts">
	export let title: string;
</script>

<div
	class="w-full h-full bg-gradient-to-b from-orange-400 to-violet-600 p-[1px] rounded-3xl shadow-md"
>
	<article
		class="card h-full shadow-xl rounded-3xl bg-secondary-content text-center flex flex-col items-center p-6"
	>
		<div class="w-[40px] mt-0 md:mt-10 md:w-[100px]">
			<slot />
		</div>
		<div class="card-body hidden md:block">
			<h2 class="card-title text-center w-full md:text-2xl text-sm">{title}</h2>
		</div>
	</article>
</div>
