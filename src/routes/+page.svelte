<script lang="ts">
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
	import Footer from '../components/footer/Footer.svelte';

	import { t } from '../lib/i18n';
	let loadedData;
	let works = loadedData as any;

	t.subscribe((value) => {
		loadedData = value('homepage.myWork.projects');
		works = loadedData;
	});
</script>

<svelte:head>
	<title>Carlos Avila Web Developer</title>
	<meta
		name="description"
		content="Unlock the Potential of Your Projects with a Top-Tier Web Developer. I'm Carlos Avila, a software developer in Germany, skilled in React, Node.js, and Firebase. With expertise in Svelte, Vue, MongoDB, Express, Tailwind, and Bootstrap, I'm your go-to partner for web development excellence. Let's bring your ideas to life."
	/>
</svelte:head>

<Hero title={$t('homepage.hero.title')} subtitle={$t('homepage.hero.description')} />
<section id="about">
	<PageContent
		title={$t('homepage.overview.title')}
		subtitle={$t('homepage.overview.subtitle')}
		description={$t('homepage.overview.description')}
	>
		<section
			id="about"
			class="mt-20 flex flex-wrap gap-10 items-stretch md:justify-between justify-center"
		>
			{#each $t('homepage.overview.cards') as card}
				<div class="w-[75px] max-w-[250px] md:w-full" use:Tilt={{ scale: 1, reverse: false }}>
					<Card title={card}>
						{#if card === 'NodeJs Backend Developer' || card === 'Desarrollador Backend NodeJs'}
							<DiNodejsSmall />
						{:else if card === 'Firebase Developer' || card === 'Desarrollador Firebase'}
							<DiFirebase />
						{:else if card === 'React Developer' || card === 'Desarrollador React'}
							<DiReact />
						{:else if card === 'Content Creator' || card === 'Creador de contenido'}
							<MdChatBubble />
						{/if}
					</Card>
				</div>
			{/each}
		</section>
	</PageContent>
</section>
<PageContent title={$t('homepage.workExperience.title')} subtitle="What I've done so far">
	<Timeline />
	<Tech />
</PageContent>

<section id="projects">
	<PageContent
		title={$t('homepage.projects.title')}
		subtitle={$t('homepage.projects.subtitle')}
		description={$t('homepage.projects.description')}
	>
		<section class="flex flex-wrap gap-0 items-stretch md:justify-between justify-center">
			{#each works as work (work)}
				<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={work.image} alt={work.title} width="385" height="210" />
						</figure>
						<div class="card-body">
							<h2 class="card-title">{work.title}</h2>
							<p>
								{work.description}
							</p>
							<div class="card-actions justify-end">
								{#each work.technologies as tag}
									<span class="badge badge-outline">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</section>
			{/each}
		</section></PageContent
	>
</section>

<Footer />
