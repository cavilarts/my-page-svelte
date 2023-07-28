<script lang="ts">
	import { authHandlers } from '../../store/store';

	let email = '';
	let password = '';
	let error = false;
	let authenticating = false;

	async function handleAuthenticate(event: Event) {
		if (authenticating) return;

		error = false;
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		email = formData.get('email') as string;
		password = formData.get('password') as string;

		if (email === '' || password === '') {
			error = true;
			authenticating = false;
			return;
		}

		authenticating = true;

		try {
			await authHandlers.signIn(email, password);
			authenticating = false;
		} catch (error) {
			console.log(error);
			error = true;
			authenticating = false;
		}
	}
</script>

<section class="flex flex-col items-center h-screen justify-center">
	<h1>Login</h1>
	<form on:submit={handleAuthenticate} class="w-full">
		{#if error}
			<p class="alert alert-error">Please fill in all fields</p>
		{/if}

		<div class="form-control w-full">
			<label class="label" for="id">
				<span class="label-text">Email</span>
			</label>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="Email"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="form-control w-full">
			<label class="label" for="email">
				<span class="label-text">Password</span>
			</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="*********"
				class="input input-bordered w-full"
			/>
		</div>
		<button class="btn btn-primary w-full mt-10">
			{#if authenticating}
				<span class="loading loading-dots loading-lg" />
			{:else}
				Login
			{/if}
		</button>
	</form>
</section>
