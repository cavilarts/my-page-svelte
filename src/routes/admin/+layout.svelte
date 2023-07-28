<script lang="ts">
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/firebase';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '../../store/store';

	const nonAuthRoutes = ['/admin'];

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && !nonAuthRoutes.includes(currentPath)) {
				window.location.href = '/admin';
				return;
			}

			if (user && currentPath === '/admin') {
				window.location.href = '/admin/dashboard';
				return;
			}

			if (!user) return;

			const docRef = doc(db, 'users', user?.uid ?? '');
			const docSnap = await getDoc(docRef);

			let dataToSetToStore: any = {};

			if (!docSnap.exists()) {
				const userRef = doc(db, 'users', user?.uid ?? '');
				dataToSetToStore = {
					email: user?.email ?? '',
					articles: []
				};
			} else {
				const userData = docSnap.data();

				dataToSetToStore = userData;
			}

			authStore.update((store) => {
				return {
					...store,
					user,
					data: dataToSetToStore,
					loading: false
				};
			});
		});
	});
</script>

<section class="max-w-7xl w-full m-auto px-8 md:px-4">
	<slot />
</section>
