'use client';

import { createScopedStore } from 'stan-js';

export const { useStore: useSidebar, StoreProvider: SidebarProvider } =
	createScopedStore({
		open: true,
	});
