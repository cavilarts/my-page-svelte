<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	const dispatch = createEventDispatcher();
	function sendMessage() {
		dispatch('message', {
			text: content
		});
	}

	let element: Element;
	let editor: Editor;
	export let content = '';

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content,
			onTransaction: (transaction) => {
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				content = JSON.stringify(editor.getJSON());

				sendMessage();
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
		class:active={editor.isActive('heading', { level: 1 })}
		class="btn btn-primary">H1</button
	>
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		class:active={editor.isActive('heading', { level: 2 })}
		class="btn btn-primary">H2</button
	>
	<button
		on:click={() => editor.chain().focus().setParagraph().run()}
		class:active={editor.isActive('paragraph')}
		class="btn btn-primary">P</button
	>
{/if}

<div bind:this={element} />

<style>
	.btn.active {
		background-color: #fff;
		color: #000;
	}

	:global(div.ProseMirror *) {
		margin-top: 0.75em;
	}

	:global(div.ProseMirror h1) {
		line-height: 1.1;
		font-size: 3rem;
	}

	:global(div.ProseMirror h2) {
		line-height: 1.2;
		font-size: 2rem;
	}

	:global(div.ProseMirror h3) {
		line-height: 1.3;
		font-size: 1.5rem;
	}

	:global(div.ProseMirror p) {
		line-height: 1.5;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	:global(div.ProseMirror blockquote) {
		margin-top: 1em;
		margin-bottom: 1em;
		margin-left: 1em;
		padding-left: 1em;
		border-left: 3px solid #eee;
		font-style: italic;
	}

	:global(div.ProseMirror pre) {
		background: #eee;
		padding: 1em;
		line-height: 1.3;
	}

	:global(div.ProseMirror ul) {
		padding-left: 1em;
	}

	:global(div.ProseMirror ul > li) {
		list-style-type: disc;
	}

	:global(div.ProseMirror ol) {
		padding-left: 1em;
	}

	:global(div.ProseMirror ol > li) {
		list-style-type: decimal;
	}

	:global(div.ProseMirror li p:first-child) {
		margin-top: 0;
	}

	:global(div.ProseMirror li p:last-child) {
		margin-bottom: 0;
	}

	:global(div.ProseMirror hr) {
		border: none;
		border-top: 1px solid #ccc;
		margin: 1em 0;
	}

	:global(div.ProseMirror img) {
		max-width: 100%;
		display: block;
		margin: 1em auto;
	}

	:global(div.ProseMirror a) {
		color: #333;
		text-decoration: underline;
	}

	:global(div.ProseMirror a:hover) {
		color: #000;
	}

	:global(div.ProseMirror strong) {
		font-weight: bold;
	}

	:global(div.ProseMirror em) {
		font-style: italic;
	}

	:global(div.ProseMirror code) {
		font-family: monospace;
		background-color: #eee;
		padding: 3px 4px;
		border-radius: 4px;
	}

	:global(div.ProseMirror pre code) {
		background-color: transparent;
		padding: 0;
	}

	:global(div.ProseMirror [data-type='code_block']) {
		background-color: #eee;
		padding: 1em;
	}

	:global(div.ProseMirror [data-type='code_block'] code) {
		background-color: transparent;
		padding: 0;
	}

	:global(div.ProseMirror [data-type='code_block'] pre) {
		background-color: transparent;
		padding: 0;
	}

	:global(div.ProseMirror [data-type='code_block'] pre code) {
		background-color: transparent;
		padding: 0;
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::before) {
		content: '';
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::after) {
		content: '';
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::before) {
		content: '';
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::after) {
		content: '';
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::before) {
		content: '';
	}

	:global(div.ProseMirror [data-type='code_block'] pre code::after) {
		content: '';
	}
</style>
