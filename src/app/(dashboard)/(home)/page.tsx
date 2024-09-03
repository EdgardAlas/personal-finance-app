import { BalanceCards } from '@/app/(dashboard)/(home)/balance-cards';
import { PageTitle } from '@/components/ui/page-title';
import { VanillaCard } from '@/components/ui/vanilla-card';

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
					<VanillaCard
						title='Pots'
						link={{
							href: '/pots',
						}}
					/>

					<VanillaCard
						title='Transactions'
						link={{
							href: '/transactions',
						}}
					/>
				</div>

				<div className='grid gap-4 md:gap-6 lg:col-span-5'>
					<VanillaCard
						title='Budgets'
						link={{
							href: '/budgets',
						}}
					/>
					<VanillaCard
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
