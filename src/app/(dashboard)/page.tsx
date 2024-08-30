'use client';

import { DesktopSidebar } from './_containers/desktop-sidebar';

const HomePage = () => {
	return (
		<main className='flex h-dvh items-start'>
			<DesktopSidebar />

			<div className='flex-1'>2</div>
		</main>
	);
};

export default HomePage;
