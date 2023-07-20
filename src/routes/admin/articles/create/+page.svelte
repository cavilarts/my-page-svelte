<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';

	let title = '';
	let content = '';

	function handleMessage(event: CustomEvent<{ text: string }>) {
		content = event.detail.text;
	}

	function handleTitle(event: Event) {
		title = (event.target as HTMLInputElement).value;
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

	<button class="btn btn-primary">Create</button>
</section>
