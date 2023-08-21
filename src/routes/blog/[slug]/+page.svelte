<script lang="ts">
	import { db } from '$lib/firebase/firebase';
	import { generateHTML } from '@tiptap/core';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import Document from '@tiptap/extension-document';
	import Paragraph from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	import Bold from '@tiptap/extension-bold';
	import Heading from '@tiptap/extension-heading';
	import type { Article } from '$lib/types';
	import { page } from '$app/stores';

	const path = $page.url.pathname.split('/').at(-1);

	let loading = false;
	let article: Partial<Article> = {};

	onMount(async () => {
		if (loading) return;
		loading = true;

		const articlesRef = collection(db, 'articles');
		const articlesSnap = await getDocs(articlesRef);

		const filteredArticle = articlesSnap.docs.find((doc) => {
			const data = doc.data();

			return data.slug === path;
		});

		article = {
			id: filteredArticle?.id,
			title: filteredArticle?.data().title,
			content: generateHTML(JSON.parse(filteredArticle?.data().content), [
				Document,
				Paragraph,
				Text,
				Bold,
				Heading
			]),
			views: filteredArticle?.data().views,
			likes: filteredArticle?.data().likes,
			comments: filteredArticle?.data().comments,
			slug: filteredArticle?.data().slug,
			image: filteredArticle?.data().image,
			description: filteredArticle?.data().description
		};
		loading = false;
	});
</script>

<section class="max-w-7xl mx-auto relative mt-0 py-8 px-8 md:px-0">
	{#if !loading}
		<h1 class="text-5xl mb-10 text-center">{article.title}</h1>
		<figure>
			<img src={article.image} alt={article.title} />
		</figure>
		<p class="prose max-w-none">{@html article.content}</p>
	{:else if loading}
		<div class="w-full h-full flex justify-center content-center align-middle">
			<span class="loading loading-bars loading-lg" />
		</div>
	{:else}
		<p>Oops Article not found :(</p>
	{/if}
</section>
