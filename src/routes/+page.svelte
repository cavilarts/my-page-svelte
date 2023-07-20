<script>
	import DiReact from 'svelte-icons/di/DiReact.svelte';
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
	import DiFirebase from 'svelte-icons/di/DiFirebase.svelte';
	import MdChatBubble from 'svelte-icons/md/MdChatBubble.svelte';

	import Tilt from '$lib/tilt';
	import Card from '../components/card/Card.svelte';
	import Hero from '../components/hero/Hero.svelte';
	import PageContent from '../components/pageContent/PageContent.svelte';
	import Timeline from '../components/timeline/Timeline.svelte';
	import Tech from '../components/technologies/Tech.svelte';
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

<PageContent title="Work Experience" subtitle="What I've done so far">
	<Timeline />
	<Tech />
</PageContent>

<PageContent
	title="Projects"
	subtitle="My Work"
	description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error inventore sit velit harum, delectus, maiores quis repudiandae odio omnis atque enim reprehenderit facilis ex rem voluptas, perferendis dolor quo saepe autem? Nisi laudantium quasi architecto aut alias repudiandae, corporis voluptate quo repellat ut saepe voluptatem pariatur laboriosam, numquam totam quidem?"
>
	<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
		<div class="card w-96 bg-base-100 shadow-xl">
			<figure><img src="/images/project-a.png" alt="Shoes" /></figure>
			<div class="card-body">
				<h2 class="card-title">Website</h2>
				<p>Funny web site</p>
				<div class="card-actions justify-end">
					<span class="text-primary">#react</span>
					<span class="text-secondary">#mongodb</span>
					<span class="text-accent">#tailwind</span>
				</div>
			</div>
		</div>
	</section>
</PageContent>
