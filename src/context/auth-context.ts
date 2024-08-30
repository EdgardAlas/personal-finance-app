'use client';

import { createScopedStore } from 'stan-js';

export const {
	StoreProvider: AuthStoreProvider,
	useStore: useAuth,
	useScopedStore: useScopedAuth,
} = createScopedStore<{
	user: {
		id: string;
		email: string;
		name: string;
	} | null;
}>({
	user: null,
});
