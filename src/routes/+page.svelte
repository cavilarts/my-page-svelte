<script>
	import DiReact from 'svelte-icons/di/DiReact.svelte';
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
	import DiFirebase from 'svelte-icons/di/DiFirebase.svelte';
	import MdChatBubble from 'svelte-icons/md/MdChatBubble.svelte';
	import Tilt from '$lib/tilt';
	import Card from '../components/card/Card.svelte';
	import Hero from '../components/hero/Hero.svelte';
	import PageContent from '../components/pageContent/PageContent.svelte';
</script>

<Hero title="Page" subtitle="This is a page">
	<button class="btn btn-primary">Click me</button>
</Hero>

<PageContent
	title="Overview"
	subtitle="Introduction"
	description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium repellendus eius esse
		perferendis, illo quasi sapiente est neque harum accusantium porro ut molestias modi rerum nobis
		ipsum commodi minus nesciunt necessitatibus omnis temporibus! Voluptatum exercitationem placeat
		harum culpa qui, expedita officia optio incidunt porro omnis fugit suscipit aut veritatis quis
		cumque ipsum quia maiores in libero dolorum itaque? Fugit porro minima minus expedita voluptates
		eum dolorem, maxime quibusdam adipisci ipsam aliquid eveniet, reiciendis iusto sapiente! Sit
		nemo ab facere aut, ipsam quae odio laboriosam incidunt eveniet omnis suscipit culpa ea corporis
		fuga at soluta rem. Recusandae porro veritatis fugiat veniam?"
>
	<section class="mt-20 flex flex-wrap gap-10 items-stretch md:justify-between justify-center">
		<div class="max-w-[250px] w-full" use:Tilt={{ scale: 1, reverse: false }}>
			<Card title="React Developer">
				<DiReact />
			</Card>
		</div>
		<div class="max-w-[250px] w-full" use:Tilt={{ scale: 1, reverse: false }}>
			<Card title="NodeJs Backend Developer">
				<DiNodejsSmall />
			</Card>
		</div>
		<div class="max-w-[250px] w-full" use:Tilt={{ scale: 1, reverse: false }}>
			<Card title="Firebase Practitioner">
				<DiFirebase />
			</Card>
		</div>
		<div class="max-w-[250px] w-full" use:Tilt={{ scale: 1, reverse: false }}>
			<Card title="Content Creator">
				<MdChatBubble />
			</Card>
		</div>
	</section>
</PageContent>

<PageContent title="Work Experience" subtitle="What I've done so far" />
