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

<Hero
	title="Hello my Name is Carlos Avila"
	subtitle="I am a software developer currently based in Germany I have worked with many technologies, but my main focus is on React, NodeJs and Firebase. I also have
	experience with other technologies like Svelte, Vue, MongoDB, Express, Tailwind, Bootstrap, etc."
/>
<section id="about">
	<PageContent
		title="Overview"
		subtitle="Introduction"
		description="I am a Frontend Engineer & technology enthusiast! Throughout my career, I have been driven by my passion for technology and my appreciation for connecting with individuals and community. I have 10 years of experience specializing in web development. I am well-equipped to take on challenging projects and drive exceptional results."
	>
		<section
			id="about"
			class="mt-20 flex flex-wrap gap-10 items-stretch md:justify-between justify-center"
		>
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
</section>
<PageContent title="Work Experience" subtitle="What I've done so far">
	<Timeline />
	<Tech />
</PageContent>

<section id="projects">
	<PageContent
		title="Projects"
		subtitle="My Work"
		description="Throughout my carreer I have worked on many projects, here are some of them"
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
</section>
