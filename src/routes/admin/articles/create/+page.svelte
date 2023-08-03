<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';
	import { db } from '$lib/firebase/firebase';
	import { collection, doc, setDoc } from 'firebase/firestore';
	import { v4 as uuidv4 } from 'uuid';

	let title = '';
	let content = '';

	function handleMessage(event: CustomEvent<{ text: string }>) {
		content = event.detail.text;
	}

	function handleTitle(event: Event) {
		title = (event.target as HTMLInputElement).value;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const articlesRef = collection(db, 'articles');

		await setDoc(doc(articlesRef, uuidv4()), {
			title,
			content,
			views: 0,
			likes: 0,
			comments: 0,
			slug: title.toLowerCase().replace(/\s/g, '-')
		});
		window.location.href = '/admin/articles';
	}
</script>

<section class="p-6">
	<h2 class="text-3xl mb-8">Create New Article</h2>
	<div>
		<label for="title">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			placeholder="Type here"
			class="input input-bordered w-full my-6"
			on:change={handleTitle}
		/>
	</div>
	<Tiptap on:message={handleMessage} />

	<button on:click={handleSubmit} class="btn btn-primary">Create</button>
</section>
