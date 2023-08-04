<script lang="ts">
	import { db } from '$lib/firebase/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
	import { onMount } from 'svelte';
	import GoPencil from 'svelte-icons/go/GoPencil.svelte';

	const storage = getStorage();
	const storageRef = ref(storage, 'hero-image.jpg');
	let loadingImage = false;
	let editMode = false;
	let heroImageUrl = '';
	let heroTitle = '';
	let heroDescription = '';

	onMount(() => {
		getHeroImage();
		getHeroTextAndDescription();

		return getHeroImage;
	});

	async function getHeroTextAndDescription() {
		const heroDataRef = collection(db, 'hero-data');
		const heroDataSnap = await getDocs(heroDataRef);

		const heroData = heroDataSnap.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data()
			};
		});

		debugger;
	}

	async function getHeroImage() {
		loadingImage = true;

		try {
			const url = await getDownloadURL(storageRef);
			console.log(url);
			heroImageUrl = url;
			loadingImage = false;
		} catch (e) {
			loadingImage = false;
			console.error(e);
		}
	}

	async function onSelectImage(event: Event) {
		const files = (event.target as HTMLInputElement).files;
		const firstFile = files?.item(0);

		if (!firstFile) return;

		try {
			await uploadBytes(storageRef, firstFile);

			getHeroImage();
		} catch (error) {
			console.error('The file could not be uploaded', error);
		}
	}
</script>

<section>
	<article class="card bg-neutral text-neutral-content">
		<div class="card-body items-center text-center">
			<div class="flex justify-end w-full">
				<button class="btn btn-circle" on:click={() => (editMode = !editMode)}>
					<span class="text-sm w-4">
						<GoPencil />
					</span>
				</button>
			</div>
			{#if editMode}
				<input type="text" placeholder={heroTitle} class="input w-full max-w-xs card-title" />
			{:else}
				<h2 class="card-title">{heroTitle}</h2>
			{/if}
			{#if editMode}
				<textarea class="textarea textarea-ghost" placeholder="Description" />
			{:else}
				<p>{heroDescription}</p>
			{/if}
			{#if loadingImage}
				<div class="loading loading-lg" />
			{:else if !loadingImage && editMode}
				<input
					type="file"
					class="file-input file-input-bordered w-full max-w-xs"
					on:change={onSelectImage}
				/>
			{:else if !loadingImage && heroImageUrl}
				<figure>
					<img src={heroImageUrl} alt="Hero" />
				</figure>
			{:else}
				<div>No Image</div>
			{/if}
		</div>
	</article>
</section>
