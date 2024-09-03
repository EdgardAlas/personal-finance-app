import { BalanceCards } from '@/app/(dashboard)/(home)/balance-cards';
import { Card } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/page-title';

export const metadata = {
	title: 'Overview',
	description: 'Here you can see the overview of the platform',
};

const HomePage = async () => {
	return (
		<>
			<PageTitle>Overview</PageTitle>
			<BalanceCards />

			<Card
				title='Coming Soon'
				link={{ href: '/coming-soon', label: 'View More' }}
			>
				<p>Coming</p>
			</Card>
		</>
	);
};

export default HomePage;
