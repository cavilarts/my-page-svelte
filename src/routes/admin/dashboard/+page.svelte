<script>
	import HeroAdmin from '../../../components/hero/HeroAdmin.svelte';
</script>

<section>
	<h1 class="text-3xl my-7">Welcome to the dashboard, what would you like to do today?</h1>
	<section>
		<section class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-6">
			<article class="card bg-neutral text-neutral-content">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Articles</h2>
					<p>
						In this section you can create, edit, delete and view all the articles that you have
					</p>
					<div class="card-actions">
						<a href="/admin/articles" class="btn btn-primary w-full md:w-auto min-w-[6rem]">View</a>
						<a href="/admin/articles/create" class="btn btn-secondary w-full md:w-auto min-w-[6rem]"
							>Create</a
						>
					</div>
				</div>
			</article>
			<article class="card bg-neutral text-neutral-content">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Projects</h2>
					<p>
						Manage the projects that you have worked on, you can create, edit, delete and view all
					</p>
					<div class="card-actions">
						<button class="btn btn-primary w-full md:w-auto min-w-[6rem]">View</button>
						<button class="btn btn-secondary w-full md:w-auto min-w-[6rem]">Create</button>
					</div>
				</div>
			</article>
			<article class="card bg-neutral text-neutral-content">
				<div class="card-body items-center text-center">
					<h2 class="card-title">Work Experience</h2>
					<p>Manage the work experience that you have, you can create, edit, delete and view all</p>
					<div class="card-actions">
						<button class="btn btn-primary w-full md:w-auto min-w-[6rem]">View</button>
						<button class="btn btn-secondary w-full md:w-auto min-w-[6rem]">Create</button>
					</div>
				</div>
			</article>
		</section>
		<HeroAdmin />
	</section>
</section>
