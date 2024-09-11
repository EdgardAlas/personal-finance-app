import { PotCardList } from '@/app/(dashboard)/pots/_containers/pot-card-list';
import { Button } from '@/components/ui/button';
import { PageTitle } from '@/components/ui/page-title';

export const metadata = {
	title: 'Pots',
	description: 'Here you can see all the pots you have created.',
};

const PotsPage = () => {
	return (
		<>
			<div className='flex items-center justify-between gap-4'>
				<PageTitle>Pots</PageTitle>
				<Button>+ Add New Pot</Button>
			</div>

			<PotCardList />
		</>
	);
};

export default PotsPage;
