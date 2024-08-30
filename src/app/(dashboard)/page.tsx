import { Stringify } from '@/components/ui/stringify';
import { currentUser } from '@/lib/current-user';

export const metadata = {
	title: 'Overview',
	description: 'Here you can see the overview of the platform',
};

const HomePage = async () => {
	const user = await currentUser();
	return (
		<>
			<h1 className='fz-preset-1 text-theme-gray-900'>Overview</h1>
			<Stringify value={user} />
		</>
	);
};

export default HomePage;
