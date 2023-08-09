<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<section
	class="hero min-h-screen"
	style="background-image: url(/images/joshua-reddekopp-GkFQEOubrCo-unsplash.avif);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">{title}</h1>
			<p class="py-6">{subtitle}</p>
			<slot />
		</div>
	</div>
</section>
