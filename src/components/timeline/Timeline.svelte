<script>
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';
</script>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<h3>From: May 2022</h3>
			<h3>To: Ongoing</h3>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="/images/krieger.png" alt="Krieger Digital" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 250px;'}>
			<h3>Krieger Digital</h3>
			<p>Senior Front End Engineer</p>
			<div>
				<p>Technologies:</p>
				<ul class="list-disc">
					<li>Reactjs</li>
					<li>Nextjs</li>
					<li>Typescript</li>
					<li>Testing Library</li>
					<li>Storybook</li>
					<li>Styled Components</li>
					<li>Antd</li>
				</ul>
			</div>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<h3>Perficient Latin America</h3>
			<p>Web IU Software Designer</p>
			<div>
				<h3>Technologies:</h3>
				<ul class="list-disc">
					<li>Reactjs</li>
					<li>Redux</li>
					<li>Nextjs</li>
					<li>Typescript</li>
					<li>Testing Library</li>
					<li>Storybook</li>
					<li>Styled Components</li>
					<li>Material UI</li>
				</ul>
			</div>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="/images/perficient.png" alt="Perficient" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>From: February 2021</h3>
			<h3>To: April 2022</h3>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<h3>From: February 2018</h3>
			<h3>To: January 2021</h3>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="/images/globant.png" alt="Perficient" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>Globant</h3>
			<p>Web IU Software Designer</p>
			<div>
				<h3>Technologies:</h3>
				<ul class="list-disc">
					<li>Reactjs</li>
					<li>Typescript</li>
					<li>Jest</li>
					<li>Storybook</li>
					<li>Sass</li>
				</ul>
			</div>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<h3>Prodigious Latam</h3>
			<p>Principal Front End Engineer</p>
			<div>
				<h3>Technologies:</h3>
				<ul class="list-disc">
					<li>Backbone</li>
					<li>Marionette</li>
					<li>Jasmine</li>
					<li>Chai</li>
					<li>Less</li>
				</ul>
			</div>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 45px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
				<img src="/images/prodigious.png" alt="Perficient" class="w-full" />
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>From: February 2018</h3>
			<h3>To: January 2021</h3>
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	:root {
		margin-bottom: 2rem;
	}
	p {
		margin: 0px;
		color: grey;
	}
</style>
