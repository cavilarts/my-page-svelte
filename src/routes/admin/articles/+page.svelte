<script lang="ts">
	import IoMdEye from 'svelte-icons/io/IoMdEye.svelte';
	import IoMdThumbsUp from 'svelte-icons/io/IoMdThumbsUp.svelte';
	import IoMdChatboxes from 'svelte-icons/io/IoMdChatboxes.svelte';
	import GoPencil from 'svelte-icons/go/GoPencil.svelte';
	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';

	let articles: any[] = [];
	let loaded = false;
	let loading = false;

	onMount(async () => {
		if (loaded) return;
		loading = true;

		const articlesRef = collection(db, 'articles');
		const articlesSnap = await getDocs(articlesRef);

		articles = articlesSnap.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data()
			};
		});
	});
</script>

<section class="w-full">
	<div class="flex justify-between w-full items-center">
		<h2 class="text-3xl my-6">Articles</h2>
		<a href="/admin/articles/create" class="btn btn-primary">New Article</a>
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
