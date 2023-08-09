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
	import Footer from '../components/footer/Footer.svelte';
</script>

<svelte:head>
	<title>Carlos Avila Web Developer</title>
	<meta
		name="description"
		content="Unlock the Potential of Your Projects with a Top-Tier Web Developer. I'm Carlos Avila, a software developer in Germany, skilled in React, Node.js, and Firebase. With expertise in Svelte, Vue, MongoDB, Express, Tailwind, and Bootstrap, I'm your go-to partner for web development excellence. Let's bring your ideas to life."
	/>
</svelte:head>

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
			<div class="w-[75px] max-w-[250px] md:w-full" use:Tilt={{ scale: 1, reverse: false }}>
				<Card title="React Developer">
					<DiReact />
				</Card>
			</div>
			<div class="w-[75px] max-w-[250px] md:w-full" use:Tilt={{ scale: 1, reverse: false }}>
				<Card title="NodeJs Backend Developer">
					<DiNodejsSmall />
				</Card>
			</div>
			<div class="w-[75px] max-w-[250px] md:w-full" use:Tilt={{ scale: 1, reverse: false }}>
				<Card title="Firebase Practitioner">
					<DiFirebase />
				</Card>
			</div>
			<div class="w-[75px] max-w-[250px] md:w-full" use:Tilt={{ scale: 1, reverse: false }}>
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
		description="I have collaborated with many companies and organizations, here are some of them and the projects I have worked on."
	>
		<section class="flex flex-wrap gap-0 items-stretch md:justify-between justify-center">
			<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
				<div class="card w-96 bg-base-100 shadow-xl">
					<figure><img src="/images/Sellwhenever.png" alt="SellWhenever" /></figure>
					<div class="card-body">
						<h2 class="card-title">SellWhenever</h2>
						<p>Real State application to help Home owners in United States to match with Agents.</p>
						<div class="card-actions justify-end">
							<span class="text-primary">#NextJs</span>
							<span class="text-secondary">#React</span>
							<span class="text-accent">#Styled Components</span>
						</div>
					</div>
				</div>
			</section>

			<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
				<div class="card w-96 bg-base-100 shadow-xl">
					<figure><img src="/images/tmx.png" alt="UseTMX" /></figure>
					<div class="card-body">
						<h2 class="card-title">TMX News</h2>
						<p>
							TMX web application to upload content as journalist and be able to sell to news
							corporations
						</p>
						<div class="card-actions justify-end">
							<span class="text-secondary">#React</span>
							<span class="text-primary">#Redux</span>
							<span class="text-accent">#Sass</span>
						</div>
					</div>
				</div>
			</section>

			<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
				<div class="card w-96 bg-base-100 shadow-xl">
					<figure><img src="/images/tmx.png" alt="UseTMX" /></figure>
					<div class="card-body">
						<h2 class="card-title">Southwest</h2>
						<p>
							I have collaborated with Low-Fare callendar team to help them with the implementation
							of the new design of the website.
						</p>
						<div class="card-actions justify-end">
							<span class="text-secondary">#React</span>
							<span class="text-primary">#Redux</span>
							<span class="text-accent">#Sass</span>
						</div>
					</div>
				</div>
			</section>

			<section class="sm:px-16 px-6 sm:py-20 py-10 max-w-7xl mx-auto relative z-0 mt-0">
				<div class="card w-96 bg-base-100 shadow-xl">
					<figure><img src="/images/nissan-inventory.png" alt="Nissan Inventory" /></figure>
					<div class="card-body">
						<h2 class="card-title">Nissan Car Inventory</h2>
						<p>
							I have collaborated with the car Inventory for multiple markets, I have helped them
							with the implementation and the architecture of the application.
						</p>
						<div class="card-actions justify-end">
							<span class="text-secondary">#Backbone</span>
							<span class="text-primary">#Marionette</span>
							<span class="text-accent">#Sass</span>
						</div>
					</div>
				</div>
			</section>
		</section>
	</PageContent>
</section>

<Footer />
