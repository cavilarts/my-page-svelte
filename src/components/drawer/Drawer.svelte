<script lang="ts">
	import NavBar from './NavBar.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<section class="drawer drawer-end">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<section class="drawer-content flex flex-col">
		<NavBar />
		<main>
			<slot />
		</main>
	</section>
	<Sidebar />
</section>
