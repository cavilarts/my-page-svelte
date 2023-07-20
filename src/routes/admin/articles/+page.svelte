<script lang="ts">
	import IoMdEye from 'svelte-icons/io/IoMdEye.svelte';
	import IoMdThumbsUp from 'svelte-icons/io/IoMdThumbsUp.svelte';
	import IoMdChatboxes from 'svelte-icons/io/IoMdChatboxes.svelte';
	import GoPencil from 'svelte-icons/go/GoPencil.svelte';

	let articles = [
		{
			id: 1,
			title: 'Article 1',
			views: 10,
			likes: 5,
			comments: 2,
			slug: 'article-1',
			created_at: '2021-01-01 00:00:00',
			updated_at: '2021-01-01 00:00:00'
		},
		{
			id: 2,
			title: 'Article 2',
			views: 10,
			likes: 5,
			comments: 2,
			slug: 'article-2',
			created_at: '2021-01-01 00:00:00',
			updated_at: '2021-01-01 00:00:00'
		}
	];
</script>

<section class="w-full">
	<div class="flex justify-between w-full items-center">
		<h2 class="text-3xl my-6">Articles</h2>
		<button class="btn btn-primary">New Article</button>
	</div>
	{#each articles as article}
		<article class="bg-primary-content px-6 py-4 mb-4 flex justify-between items-center">
			<a href="/admin/articles/{article.slug}">
				<h3 class="text-xl">{article.title}</h3>
			</a>
			<div class="flex gap-4">
				<p class="flex items-center">
					<span class="w-4 h-4 mr-2">
						<IoMdEye />
					</span>
					{article.views}
				</p>
				<p class="flex items-center">
					<span class="w-4 h-4 mr-2"><IoMdThumbsUp /></span>
					{article.likes}
				</p>
				<p class="flex items-center">
					<span class="w-4 h-4 mr-2">
						<IoMdChatboxes />
					</span>
					{article.comments}
				</p>
				<a
					href="/admin/articles/edit/{article.id}"
					class="flex items-center btn btn-circle align-middle justify-center"
				>
					<span class="w-4 h-4">
						<GoPencil />
					</span>
				</a>
			</div>
		</article>
	{/each}
</section>
