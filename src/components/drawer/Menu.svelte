<script>
	import { authHandlers, authStore } from '../../store/store';
</script>

<li>
	<a href="/admin/dashboard">Dashboard</a>
</li>
<li>
	<details>
		<summary>Articles</summary>
		<ul>
			<li>
				<a href="/admin/articles/create">Add</a>
			</li>
			<li>
				<a href="/admin/articles">View All</a>
			</li>
		</ul>
	</details>
</li>
<li>
	<details>
		<summary>Projects</summary>
		<ul>
			<li>
				<a href="/">Add</a>
			</li>
			<li>
				<a href="/">View All</a>
			</li>
		</ul>
	</details>
</li>
<li>
	<details>
		<summary> Experience </summary>
		<ul>
			<li>
				<a href="/">Add</a>
			</li>
			<li>
				<a href="/">View All</a>
			</li>
		</ul>
	</details>
</li>
<li>
	{#if $authStore.user}
		<button class="btn btn-primary flex content-center" on:click={() => authHandlers.logout()}
			>Logout</button
		>
	{:else}
		<a class="btn btn-secondary flex content-center" href="/admin/login">Login</a>
	{/if}
</li>
