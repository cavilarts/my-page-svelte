<script lang="ts">
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { generateHTML } from '@tiptap/core';
	import Document from '@tiptap/extension-document';
	import Paragraph from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	import Bold from '@tiptap/extension-bold';
	import Heading from '@tiptap/extension-heading';

	import { db } from '$lib/firebase/firebase';
	import type { Article } from '$lib/types';
	import { lazyload } from '$lib/lazyload';

	let articles: Article[] = [];
	let loaded = false;
	let loading = false;

	onMount(async () => {
		if (loaded) return;
		loading = true;

		const articlesRef = collection(db, 'articles');
		const articlesSnap = await getDocs(articlesRef);

		articles = articlesSnap.docs.map((doc) => {
			const data = doc.data();

			return {
				id: doc.id,
				title: data.title,
				content: generateHTML(JSON.parse(data.content), [Document, Paragraph, Text, Bold, Heading]),
				views: data.views,
				likes: data.likes,
				comments: data.comments,
				slug: data.slug,
				image: data.image,
				description: data.description
			};
		});
		loading = false;
	});
</script>

<section class="max-w-7xl mx-auto relative mt-0 py-8 px-8 md:px-0">
	<h1 class="text-5xl mb-10 text-center">My Articles</h1>
	{#if !loading}
		{#each articles as article}
			<a href="/blog/{article.slug}">
				<article class="card lg:card-side bg-base-100 shadow-xl">
					<figure class="w-full h-full md:min-h-[370px]">
						<img
							use:lazyload={article.image}
							alt={article.title}
							width="400"
							height="150"
							class="transition-opacity"
						/>
					</figure>
					<div class="card-body">
						<h2 class="card-title">{article.title}</h2>
						<p>{article.description}</p>
						<div class="card-actions justify-end" />
					</div>
				</article>
			</a>
		{/each}
	{:else if loading}
		<div class="w-full h-full flex justify-center content-center align-middle">
			<span class="loading loading-bars loading-lg" />
		</div>
	{:else}
		<p>No articles found</p>
	{/if}
</section>
