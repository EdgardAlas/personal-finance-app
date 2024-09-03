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

			<div className='grid gap-6 lg:grid-cols-12'>
				<div className='grid gap-4 md:gap-6 lg:col-span-7'>
					<Card
						title='Pots'
						link={{
							href: '/pots',
						}}
					/>

					<Card
						title='Transactions'
						link={{
							href: '/transactions',
						}}
					/>
				</div>

				<div className='grid gap-4 md:gap-6 lg:col-span-5'>
					<Card
						title='Budgets'
						link={{
							href: '/budgets',
						}}
					/>
					<Card
						title='Recurring Bills'
						link={{
							href: '/recurring-bills',
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default HomePage;
