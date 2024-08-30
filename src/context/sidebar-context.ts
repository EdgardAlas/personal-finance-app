'use client';

import { createStore } from 'stan-js';

export const { useStore: useSidebar } = createStore({
	open: true,
});
