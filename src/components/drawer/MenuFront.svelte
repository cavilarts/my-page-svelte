<script>
	import { locale } from '../../lib/i18n';
</script>

<li>
	<a href="#projects">Projects</a>
</li>
<li>
	<a href="#about">About</a>
</li>
<li>
	<a href="/blog">Blog</a>
</li>
<li>
	<select class="select select-bordered w-full max-w-xs min-w-[70px]" bind:value={$locale}>
		<option value="en" selected>EN</option>
		<option value="es">ES</option>
	</select>
</li>
