<script lang="ts">
	export let title: string;
</script>

<div
	class="w-full h-full bg-gradient-to-b from-green-600 to-violet-600 p-[1px] rounded-3xl shadow-md"
>
	<article
		class="card h-full shadow-xl rounded-3xl bg-secondary-content text-center flex flex-col items-center"
	>
		<div class="w-[100px] mt-10">
			<slot />
		</div>
		<div class="card-body">
			<h2 class="card-title text-center w-full block">{title}</h2>
		</div>
	</article>
</div>
