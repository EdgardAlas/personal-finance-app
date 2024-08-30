'use client';

import { Sidebar } from './_containers/sidebar';

const HomePage = () => {
	return (
		<main className='flex h-dvh items-start'>
			<Sidebar />

			<div className='flex-1'>2</div>
		</main>
	);
};

export default HomePage;
