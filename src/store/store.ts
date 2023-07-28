import { signInWithEmailAndPassword } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

import { auth } from '$lib/firebase/firebase';

export const authStore = writable<{
	user: User | null;
	loading: boolean;
	error: Error | null;
	data: Record<string, unknown>;
}>({
	user: null,
	loading: true,
	error: null,
	data: {}
});

export const authHandlers = {
	signIn: async (email: string, password: string) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	logout: async () => {
		await auth.signOut();
	}
};
