<script lang="ts">
	import Menu from './Menu.svelte';
	import { page } from '$app/stores';
	import MenuFront from './MenuFront.svelte';

	const currentPath = $page.url.pathname;
	const isAdmin = currentPath.startsWith('/admin');
</script>

<section class="drawer-side lg:hidden">
	<label for="my-drawer-3" class="drawer-overlay" />
	<ul class="menu p-4 w-80 h-full bg-base-200">
		{#if isAdmin}
			<Menu />
		{:else}
			<MenuFront />
		{/if}
	</ul>
</section>
