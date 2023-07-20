<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let description = '';
</script>

<section class="max-w-7xl mx-auto relative mt-0 py-8 px-8 md:px-0">
	<p class="sm:text-lg text-sm text-secondary uppercase tracking-wider mb-4">{subtitle}</p>
	<h2 class="text-white font-black md:text-5xl sm:text-4xl text-3xl mb-4">{title}</h2>
	<p class="text-gray-300 text-base max-w-3xl leading-8">
		{description}
	</p>
	<slot />
</section>
