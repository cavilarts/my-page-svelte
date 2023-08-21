<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';
	import { db } from '$lib/firebase/firebase';
	import { collection, doc, setDoc } from 'firebase/firestore';
	import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
	import { v4 as uuidv4 } from 'uuid';

	let loadingImage = false;
	let articleImage = '';
	let title = '';
	let content = '';
	let description = '';

	const storage = getStorage();
	const storageRef = ref(storage, `articles/${uuidv4()}`);
	function handleMessage(event: CustomEvent<{ text: string }>) {
		content = event.detail.text;
	}

	function handleTitle(event: Event) {
		title = (event.target as HTMLInputElement).value;
	}

	function handleDescription(event: Event) {
		description = (event.target as HTMLInputElement).value;
	}

	async function getArticleImage() {
		loadingImage = true;

		try {
			const url = await getDownloadURL(storageRef);

			articleImage = url;
			loadingImage = false;
		} catch (e) {
			loadingImage = false;
			console.error(e);
		}
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const articlesRef = collection(db, 'articles');

		await setDoc(doc(articlesRef, uuidv4()), {
			title,
			content,
			description,
			views: 0,
			likes: 0,
			comments: 0,
			slug: title.toLowerCase().replace(/\s/g, '-'),
			image: articleImage
		});
		window.location.href = '/admin/articles';
	}

	async function onSelectImage(event: Event) {
		const files = (event.target as HTMLInputElement).files;
		const firstFile = files?.item(0);

		if (!firstFile) return;

		try {
			await uploadBytes(storageRef, firstFile);

			getArticleImage();
		} catch (error) {
			console.error('The file could not be uploaded', error);
		}
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
	<div>
		<label for="description">Brief description</label>
		<textarea
			id="description"
			name="description"
			placeholder="Type here"
			class="input input-bordered w-full my-6"
			on:change={handleDescription}
		/>
	</div>
	<div>
		<label for="content">Image</label>
		<input
			type="file"
			class="file-input file-input-bordered w-full max-w-xs"
			on:change={onSelectImage}
		/>
	</div>
	<div>
		{#if articleImage}
			<img src={articleImage} alt="Article" width="500" height="500" />
		{/if}
	</div>
	<Tiptap on:message={handleMessage} />

	<button on:click={handleSubmit} class="btn btn-primary">Create</button>
</section>
