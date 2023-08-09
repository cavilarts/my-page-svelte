<script lang="ts">
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import { page } from '$app/stores';

	import Menu from './Menu.svelte';
	import MenuFront from './MenuFront.svelte';
	import Logo from './Logo.svelte';

	const currentPath = $page.url.pathname;
	const isAdmin = currentPath.startsWith('/admin');
</script>

<nav class="w-full navbar bg-base-300">
	<div class="max-w-7xl flex justify-between w-full m-auto">
		<h1 class="flex-1 px-2 mx-2 font-libre text-3xl font-bold">
			<a href={isAdmin ? '/admin/dashboard' : '/'} aria-label="Carlos Avila">
				<span class="w-[200px] h-[45px] block">
					<Logo />
				</span>
			</a>
		</h1>
		<section class="flex-none hidden lg:block">
			<ul class="menu menu-horizontal">
				{#if isAdmin}
					<Menu />
				{:else}
					<MenuFront />
				{/if}
			</ul>
		</section>
		<section class="flex-none lg:hidden">
			<label for="my-drawer-3" class="btn btn-square btn-ghost">
				<IoMdMenu class="w-6 h-6" />
			</label>
		</section>
	</div>
</nav>
